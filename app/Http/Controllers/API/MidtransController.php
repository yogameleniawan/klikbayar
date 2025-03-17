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
}
