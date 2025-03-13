<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
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
        $orderId = 'KLIK-' . time();
        $amount = $request->finalPrice;
        $paymentMethod = $request->paymentMethod;
        $contactPhone = $request->contactPhone;

        $transactionDetails = [
            'transaction_details' => [
                'order_id' => $orderId,
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
                'no_transaction' => $orderId,
                'phone' => $contactPhone,
                'json_response' => json_encode($response),
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
