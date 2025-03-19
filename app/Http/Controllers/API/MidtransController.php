<?php

namespace App\Http\Controllers\API;

use App\Enums\GatewayEnum;
use App\Enums\PaymentStatusEnum;
use App\Events\CheckoutEvent;
use App\Events\PaymentNotificationEvent;
use App\Events\TestEvent;
use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
use App\Models\ProductDetail;
use App\Models\Transaction;
use App\Models\TransactionDetail;
use App\Models\TransactionLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Midtrans\Config;
use Midtrans\CoreApi;
use Midtrans\Transaction as MidtransTransaction;

class MidtransController extends Controller
{
    protected $midtransUrl;

    public function __construct()
    {
        $this->midtransUrl = config('midtrans.is_production')
            ? 'https://api.midtrans.com'
            : 'https://api.sandbox.midtrans.com';

        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');
        Config::$isSanitized = true;
        Config::$is3ds = true;
    }

    public function createTransaction(Request $request)
    {
        $invoiceNumber = 'KLIK-' . time() . '-' . Str::random(5);
        $amount = $request->finalPrice;
        $paymentMethod = PaymentMethod::find($request->paymentMethod);
        $paymentMethodCode = $paymentMethod->code;

        $contactPhone = $request->contactPhone;
        $customerNo = $request->customerNo;

        $transactionDetails = [
            'transaction_details' => [
                'order_id' => $invoiceNumber,
                'gross_amount' => $amount,
            ],
            'item_details' => [
                [
                    "id" => Str::slug($request->productName),
                    "name" => $request->productName,
                    "price" => $amount,
                    "quantity" => 1,
                ]
            ],
            'customer_details' => [
                'first_name' => 'Klik Bayar',
                'phone' => $contactPhone,
            ],
            'payment_type' => $paymentMethodCode,
        ];

        if ($paymentMethodCode === 'bank_transfer') {
            $transactionDetails['bank_transfer'] = ['bank' => 'bca'];
        } elseif ($paymentMethodCode === 'qris') {
            $transactionDetails['qris'] = [];
        }

        try {
            $response = CoreApi::charge($transactionDetails);

            $transaction = Transaction::create([
                'customer_number' => $customerNo,
                'invoice_number' => $invoiceNumber,
                'phone' => $contactPhone,
                'status' => PaymentStatusEnum::PENDING->value,
                'payment_method_id' => $paymentMethod->id
            ]);

            TransactionLog::create([
                'response' => json_encode($response),
                'payload' => json_encode($request->all()),
                'gateway' => GatewayEnum::MIDTRANS->value,
                'transaction_id' => $transaction->id
            ]);

            TransactionDetail::create([
                'name' => $request->productName,
                'price' => $amount,
                'product_detail_id' => $request->productId,
                'transaction_id' => $transaction->id,
            ]);

            event(new CheckoutEvent(json_encode([
                'name' => $request->productName,
                'phone' => $contactPhone,
                'product' => ProductDetail::where('product_details.id', $request->productId)
                    ->join('products', 'product_details.product_id', '=', 'products.id')
                    ->leftJoin('files', 'products.image_id', '=', 'files.id')
                    ->select('products.brand', 'files.path as image_path')
                    ->first()->toArray(),
            ])));

            return response()->json([
                'transaction_id' => $transaction->id,
                'message' => 'Transaction created'
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function checkStatus(Request $request, $id)
    {
        try {
            $transaction = Transaction::findOrFail($id);

            $midtransStatus = MidtransTransaction::status($transaction->invoice_number);

            Log::info('Midtrans Status Check Response', (array) $midtransStatus);

            $this->updateTransactionStatus($transaction, $midtransStatus->transaction_status);

            return response()->json([
                'status' => 'success',
                'data' => [
                    'transaction_status' => $transaction->status,
                    'invoice_number' => $transaction->invoice_number,
                    'updated_at' => $transaction->updated_at->format('Y-m-d H:i:s')
                ],
                'message' => 'Status transaksi berhasil diperbarui'
            ]);
        } catch (\Exception $e) {
            Log::error('Check Payment Status Error: ' . $e->getMessage());

            return response()->json([
                'status' => 'error',
                'error' => 'Terjadi kesalahan: ' . $e->getMessage()
            ], 500);
        }
    }

    public function cancelTransaction(Request $request, $id)
    {
        try {
            $transaction = Transaction::findOrFail($id);

            if (!in_array($transaction->status, [PaymentStatusEnum::PENDING->value, PaymentStatusEnum::CHALLENGE->value])) {
                return redirect()->back()->with('error', 'Transaksi tidak dapat dibatalkan dengan status: ' . $transaction->status);
            }

            $midtransCancel = MidtransTransaction::cancel($transaction->invoice_number);

            Log::info('Midtrans Cancel Transaction Response', (array) $midtransCancel);

            $transaction->status = PaymentStatusEnum::CANCEL->value;
            $transaction->save();

            return response()->json([
                'status' => 'success',
                'data' => [
                    'transaction_status' => PaymentStatusEnum::CANCEL->value,
                ],
                'message' => 'Transaksi berhasil dibatalkan'
            ]);
        } catch (\Exception $e) {
            Log::error('Cancel Transaction Error: ' . $e->getMessage());

            return response()->json([
                'status' => 'error',
                'error' => 'Terjadi kesalahan: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Handle Midtrans payment notification callback
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function handleCallback(Request $request)
    {
        Log::info('Midtrans notification received', $request->all());

        $notificationBody = $request->all();

        if (!$this->verifySignatureKey($notificationBody)) {
            Log::warning('Invalid signature key', $notificationBody);
            return response()->json(['status' => 'error', 'message' => 'Invalid signature'], 403);
        }

        $orderId = $notificationBody['order_id'] ?? null;
        $transactionStatus = $notificationBody['transaction_status'] ?? null;
        $fraudStatus = $notificationBody['fraud_status'] ?? null;

        if (!$orderId) {
            return response()->json(['status' => 'error', 'message' => 'Order ID not provided'], 400);
        }

        $transaction = Transaction::where('invoice_number', $orderId)->first();

        if (!$transaction) {
            Log::warning('Transaction not found', ['order_id' => $orderId]);
            return response()->json(['status' => 'error', 'message' => 'Transaction not found'], 404);
        }

        $this->updateTransactionStatus($transaction, $transactionStatus, $fraudStatus);

        return response()->json(['status' => 'success']);
    }

    /**
     * Verify Midtrans signature key
     *
     * @param array $data
     * @return bool
     */
    private function verifySignatureKey($data)
    {
        if (config('app.env') !== 'production') {
            return true;
        }

        $serverKey = env('MIDTRANS_SERVER_KEY');

        if (
            !isset($data['order_id']) || !isset($data['status_code'])
            || !isset($data['gross_amount']) || !isset($data['signature_key'])
        ) {
            return false;
        }

        $orderId = $data['order_id'];
        $statusCode = $data['status_code'];
        $grossAmount = $data['gross_amount'];
        $signatureKey = $data['signature_key'];

        $mySignature = hash('sha512', $orderId . $statusCode . $grossAmount . $serverKey);

        return $mySignature === $signatureKey;
    }

    /**
     * Update transaction status based on Midtrans notification
     *
     * @param \App\Models\Transaction $transaction
     * @param string $transactionStatus
     * @param string|null $fraudStatus
     * @return void
     */
    private function updateTransactionStatus($transaction, $transactionStatus, $fraudStatus = null)
    {
        switch ($transactionStatus) {
            case PaymentStatusEnum::CAPTURE->value:
                $transaction->status = ($fraudStatus == PaymentStatusEnum::CHALLENGE->value) ? PaymentStatusEnum::CHALLENGE->value : PaymentStatusEnum::SUCCESS->value;
                break;
            case PaymentStatusEnum::SETTLEMENT->value:
                $transaction->status = PaymentStatusEnum::SUCCESS->value;
                break;
            case PaymentStatusEnum::PENDING->value:
                $transaction->status = PaymentStatusEnum::PENDING->value;
                break;
            case PaymentStatusEnum::DENY->value:
                $transaction->status = PaymentStatusEnum::DENY->value;
                break;
            case PaymentStatusEnum::EXPIRE->value:
                $transaction->status = PaymentStatusEnum::EXPIRE->value;
                break;
            case PaymentStatusEnum::CANCEL->value:
                $transaction->status = PaymentStatusEnum::CANCEL->value;
                break;
            case PaymentStatusEnum::REFUND->value:
                $transaction->status = PaymentStatusEnum::REFUND->value;
                break;
            case PaymentStatusEnum::PARTIAL_REFUND->value:
                $transaction->status = PaymentStatusEnum::PARTIAL_REFUND->value;
                break;

            default:
                Log::warning('Unknown transaction status', [
                    'status' => $transactionStatus,
                    'order_id' => $transaction->invoice_number
                ]);
                break;
        }

        $transaction->save();

        $this->triggerStatusActions($transaction);
    }

    /**
     * Trigger actions based on transaction status
     *
     * @param \App\Models\Transaction $transaction
     * @return void
     */
    private function triggerStatusActions($transaction)
    {
        $message = null;

        if ($transaction->status === 'success') {
            $message = json_encode([
                'status' => 'success',
                'message' => "Transaksi " . $transaction->id . " berhasil dibayar",
                'data' => $transaction
            ]);
        } elseif ($transaction->status === 'failed') {
            $message = json_encode([
                'status' => 'failed',
                'message' => "Transaksi " . $transaction->id . " gagal dibayar",
                'data' => $transaction
            ]);
        } elseif ($transaction->status === 'cancel') {
            $message = json_encode([
                'status' => 'cancel',
                'message' => "Transaksi " . $transaction->id . " dibatalkan",
                'data' => $transaction
            ]);
        } elseif ($transaction->status === 'expire') {
            $message = json_encode([
                'status' => 'expire',
                'message' => "Transaksi " . $transaction->id . " expired",
                'data' => $transaction
            ]);
        }

        event(new PaymentNotificationEvent($message));
    }
}
