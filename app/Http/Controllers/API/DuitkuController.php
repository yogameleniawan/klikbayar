<?php

namespace App\Http\Controllers\API;

use App\Enums\GatewayEnum;
use App\Enums\PaymentStatusEnum;
use App\Enums\StatusDuitkuEnum;
use App\Events\CheckoutEvent;
use App\Events\PaymentNotificationEvent;
use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
use App\Models\ProductDetail;
use App\Models\Transaction;
use App\Models\TransactionDetail;
use App\Models\TransactionLog;
use App\Services\DigiflazzService;
use DateInterval;
use DateTime;
use DateTimeZone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class DuitkuController extends Controller
{
    public function getPaymentMethod(Request $request)
    {
        $merchantCode = env('DUITKU_MERCHANT_CODE');
        $apiKey = env('DUITKU_API_KEY');
        $datetime = date('Y-m-d H:i:s');
        $paymentAmount = $request->amount;
        $signature = hash('sha256', $merchantCode . $paymentAmount . $datetime . $apiKey);

        $payload = [
            "merchantcode" => $merchantCode,
            "amount" => $paymentAmount,
            "datetime" => $datetime,
            "signature" => $signature
        ];

        $response = Http::get(env('DUITKU_BASE_URL') . "/webapi/api/merchant/paymentmethod/getpaymentmethod", $payload);

        $responseData = $response->json();

        return response()->json($responseData);
    }

    public function createTransaction(Request $request)
    {
        $invoiceNumber = 'KLIK-' . time() . '-' . Str::random(5);
        $paymentAmount = $request->finalPrice;
        $productName = $request->productName;
        $paymentMethod = PaymentMethod::find($request->paymentMethod);
        $paymentMethodCode = $paymentMethod->code;

        $contactPhone = $request->contactPhone;
        $customerNo = $request->customerNo;

        try {
            $merchantCode = env('DUITKU_MERCHANT_CODE');
            $apiKey = env('DUITKU_API_KEY');
            $datetime = date('Y-m-d H:i:s');
            $signature = md5($merchantCode . $invoiceNumber . $paymentAmount . $apiKey);

            $payload = [
                "merchantcode" => $merchantCode,
                "paymentAmount" => $paymentAmount,
                "merchantOrderId" => $invoiceNumber,
                "productDetails" => $productName,
                "email" => "customer@klikbayar.id",
                "paymentMethod" => $paymentMethodCode,
                "customerVaName" => $productName . " | " . $request->contactPhone,
                "datetime" => $datetime,
                'callbackUrl' => 'https://cd3a-103-94-190-21.ngrok-free.app/api/duitku/callback',
                'returnUrl' => 'https://cd3a-103-94-190-21.ngrok-free.app/transaction/redirect',
                "signature" => $signature,
                "expiryPeriod" => 15,
            ];

            try {
                $response = Http::post(env('DUITKU_BASE_URL') . "/webapi/api/merchant/v2/inquiry", $payload);

                if ($response->successful()) {
                    $responseData = $response->json();

                    $timezone = new DateTimeZone('Asia/Jakarta');

                    $transactionTime = new DateTime($datetime);
                    if ($transactionTime->getTimezone()->getName() === 'UTC') {
                        $transactionTime->setTimezone($timezone);
                    }

                    $transactionTime->add(new DateInterval('PT' . $payload['expiryPeriod'] . 'M'));
                    $expiryTime = $transactionTime->format('Y-m-d H:i:s');

                    $responseData['expiry_time'] = $expiryTime;

                    $transaction = Transaction::create([
                        'customer_number' => $customerNo,
                        'invoice_number' => $invoiceNumber,
                        'phone' => $contactPhone,
                        'status' => PaymentStatusEnum::PENDING->value,
                        'payment_method_id' => $paymentMethod->id
                    ]);

                    TransactionLog::create([
                        'response' => json_encode($responseData),
                        'payload' => json_encode($payload),
                        'gateway' => GatewayEnum::DUITKU->value,
                        'transaction_id' => $transaction->id
                    ]);

                    TransactionDetail::create([
                        'name' => $request->productName,
                        'price' => $paymentAmount,
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
                } else {
                    $errorMessage = $response->json()['Message'] ?? 'Unknown error';
                    $statusCode = $response->status();

                    Log::error('Duitku API Error', [
                        'status' => $statusCode,
                        'message' => $errorMessage,
                        'payload' => $payload
                    ]);

                    return response()->json([
                        'error' => $errorMessage
                    ], $statusCode);
                }
            } catch (\Throwable $th) {
                return response()->json(['error' => $th->getMessage()], 500);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function checkStatus($id)
    {
        try {
            $transaction = Transaction::findOrFail($id);

            $merchantCode = env('DUITKU_MERCHANT_CODE');
            $apiKey = env('DUITKU_API_KEY');
            $invoiceNumber = $transaction->invoice_number;
            $signature = md5($merchantCode . $invoiceNumber . $apiKey);

            $payload = [
                "merchantcode" => $merchantCode,
                "merchantOrderId" => $invoiceNumber,
                "signature" => $signature,
            ];

            $response = Http::post(env('DUITKU_BASE_URL') . "/webapi/api/merchant/transactionStatus", $payload);

            $responseJSON = $response->json();

            Log::info('Duitku Status Check Response', (array) $responseJSON);

            $this->updateTransactionStatus($transaction, $responseJSON['statusCode']);

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
     * Update transaction status based on Duitku notification
     *
     * @param \App\Models\Transaction $transaction
     * @param string $transactionStatus
     * @param string|null $fraudStatus
     * @return void
     */
    private function updateTransactionStatus($transaction, $transactionStatus, $fraudStatus = null)
    {
        switch ($transactionStatus) {
            case StatusDuitkuEnum::SUCCESS->value:
                $transaction->status = PaymentStatusEnum::SUCCESS->value;

                $paymentDigiflazz = new DigiflazzService($transaction);
                $paymentDigiflazz->execute();

                break;
            case StatusDuitkuEnum::PENDING->value:
                $transaction->status = PaymentStatusEnum::PENDING->value;
                break;
            case StatusDuitkuEnum::CANCELED->value:
                $transaction->status = PaymentStatusEnum::CANCEL->value;
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
                'message' => "Transaksi " . $transaction->invoice_number . " berhasil dibayar",
                'data' => $transaction
            ]);
        } elseif ($transaction->status === 'failed') {
            $message = json_encode([
                'status' => 'failed',
                'message' => "Transaksi " . $transaction->invoice_number . " gagal dibayar",
                'data' => $transaction
            ]);
        } elseif ($transaction->status === 'cancel') {
            $message = json_encode([
                'status' => 'cancel',
                'message' => "Transaksi " . $transaction->invoice_number . " dibatalkan",
                'data' => $transaction
            ]);
        } elseif ($transaction->status === 'expire') {
            $message = json_encode([
                'status' => 'expire',
                'message' => "Transaksi " . $transaction->invoice_number . " expired",
                'data' => $transaction
            ]);
        }

        event(new PaymentNotificationEvent($message));
    }

    /**
     * Handle Duitku payment notification callback
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function handleCallback(Request $request)
    {
        Log::info('Duitku notification received', $request->all());

        $apiKey = env('DUITKU_API_KEY');

        // Get all parameters from request
        $merchantCode = $request->input('merchantCode');
        $amount = $request->input('amount');
        $merchantOrderId = $request->input('merchantOrderId');
        $resultCode = $request->input('resultCode');
        $reference = $request->input('reference');
        $signature = $request->input('signature');

        Log::info('Payment Callback Received', $request->all());

        $params = $merchantCode . $amount . $merchantOrderId . $apiKey;
        $calcSignature = md5($params);

        if ($signature !== $calcSignature) {
            Log::error('Payment Callback: Invalid signature', [
                'received' => $signature,
                'calculated' => $calcSignature
            ]);
            return response()->json(['status' => 'error', 'message' => 'Bad Signature'], 400);
        }

        $transaction = Transaction::where('invoice_number', $merchantOrderId)->first();

        if (!$transaction) {
            Log::warning('Transaction not found', ['order_id' => $merchantOrderId]);
            return response()->json(['status' => 'error', 'message' => 'Transaction not found'], 404);
        }

        Log::info('Payment Callback: Success', [
            'merchantOrderId' => $merchantOrderId,
            'reference' => $reference
        ]);

        $this->updateTransactionStatus($transaction, $resultCode);

        return response()->json(['status' => 'success']);
    }
}
