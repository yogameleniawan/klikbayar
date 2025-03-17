<?php

namespace App\Http\Controllers\API;

use App\Enums\GatewayEnum;
use App\Enums\PaymentStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
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
                'name'=> $request->productName,
                'price' => $amount,
                'product_detail_id' => $request->productId,
                'transaction_id' => $transaction->id,
            ]);

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
            // Ambil data transaksi dari database
            $transaction = Transaction::findOrFail($id);

            // Request ke Midtrans API untuk cek status
            $midtransStatus = MidtransTransaction::status($transaction->invoice_number);

            // Log response dari Midtrans
            Log::info('Midtrans Status Check Response', (array) $midtransStatus);

            // Update status transaksi di database
            $this->updateTransactionStatus($transaction, (array) $midtransStatus);

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

    /**
     * Membatalkan transaksi di Midtrans
     */
    public function cancelTransaction(Request $request, $id)
    {
        try {
            // Ambil data transaksi dari database
            $transaction = Transaction::findOrFail($id);

            // Cek apakah transaksi masih bisa dibatalkan
            if (!in_array($transaction->status, ['pending', 'challenge'])) {
                return redirect()->back()->with('error', 'Transaksi tidak dapat dibatalkan dengan status: ' . $transaction->status);
            }

            // Request ke Midtrans API untuk membatalkan transaksi
            $midtransCancel = MidtransTransaction::cancel($transaction->invoice_number);

            // Log response dari Midtrans
            Log::info('Midtrans Cancel Transaction Response', (array) $midtransCancel);

            // Update status transaksi menjadi cancel
            $transaction->status = 'cancel';
            $transaction->save();

            return response()->json([
                'status' => 'success',
                'data' => [
                    'transaction_status' => 'cancel',
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
     * Update status transaksi berdasarkan response dari Midtrans
     */
    private function updateTransactionStatus($transaction, $midtransStatus)
    {
        // Tentukan status transaksi berdasarkan transaction_status dari Midtrans
        $transactionStatus = $midtransStatus['transaction_status'] ?? null;
        $fraudStatus = $midtransStatus['fraud_status'] ?? null;

        switch ($transactionStatus) {
            case 'capture':
                $transaction->status = ($fraudStatus == 'challenge') ? 'challenge' : 'success';
                break;
            case 'settlement':
                $transaction->status = 'success';
                break;
            case 'pending':
                $transaction->status = 'pending';
                break;
            case 'deny':
                $transaction->status = 'deny';
                break;
            case 'cancel':
                $transaction->status = 'cancel';
                break;
            case 'expire':
                $transaction->status = 'expire';
                break;
            case 'refund':
                $transaction->status = 'refund';
                break;
            case 'partial_refund':
                $transaction->status = 'partial_refund';
                break;
            default:
                $transaction->status = 'pending';
        }

        $transaction->save();
    }

    /**
     * Callback dari Midtrans untuk notifikasi pembayaran
     * Route ini harus di-expose untuk Midtrans
     */
    public function notificationHandler(Request $request)
    {
        try {
            $notificationBody = json_decode($request->getContent(), true);
            Log::info('Midtrans Notification', $notificationBody);

            $orderId = $notificationBody['order_id'] ?? null;

            if (!$orderId) {
                return response()->json(['status' => 'error', 'message' => 'Order ID tidak ditemukan'], 400);
            }

            // Verifikasi signature key
            $statusResponse = MidtransTransaction::status($orderId);

            // Proses hanya jika transaction_status sama
            if ($notificationBody['transaction_status'] !== $statusResponse->transaction_status) {
                return response()->json(['status' => 'error', 'message' => 'Invalid transaction status'], 400);
            }

            // Cari transaksi berdasarkan order_id
            $transaction = Transaction::where('invoice_number', $orderId)->first();

            if (!$transaction) {
                return response()->json(['status' => 'error', 'message' => 'Transaksi tidak ditemukan'], 404);
            }

            // Update status transaksi
            $this->updateTransactionStatus($transaction, (array) $statusResponse);

            // Tambahkan log transaksi
            $transaction->transactionLogs()->create([
                'type' => 'notification',
                'response' => json_encode($statusResponse),
                'payload' => json_encode($notificationBody)
            ]);

            return response()->json(['status' => 'success']);

        } catch (\Exception $e) {
            Log::error('Notification Handler Error: ' . $e->getMessage());
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }
}
