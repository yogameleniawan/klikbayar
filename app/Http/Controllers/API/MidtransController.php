<?php

namespace App\Http\Controllers\API;

use App\Enums\GatewayEnum;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\TransactionDetail;
use App\Models\TransactionLog;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Midtrans\Config;
use Midtrans\CoreApi;

class MidtransController extends Controller
{
    public function __construct()
    {
        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');
        Config::$isSanitized = true;
        Config::$is3ds = true;
    }

    public function createTransaction(Request $request)
    {
        $invoiceNumber = 'KLIK-' . time() . '-' . Str::random(5);
        $amount = $request->finalPrice;
        $paymentMethod = $request->paymentMethod;
        $contactPhone = $request->contactPhone;

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
            'payment_type' => $paymentMethod,
        ];

        if ($paymentMethod === 'bank_transfer') {
            $transactionDetails['bank_transfer'] = ['bank' => 'bca'];
        } elseif ($paymentMethod === 'qris') {
            $transactionDetails['qris'] = [];
        }

        try {
            $response = CoreApi::charge($transactionDetails);

            $transaction = Transaction::create([
                'invoice_number' => $invoiceNumber,
                'phone' => $contactPhone,
                'status' => json_encode($response),
            ]);

            TransactionLog::create([
                'response' => json_encode($response),
                'payload' => json_encode($request->all()),
                'gateway' => GatewayEnum::MIDTRANS,
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
}
