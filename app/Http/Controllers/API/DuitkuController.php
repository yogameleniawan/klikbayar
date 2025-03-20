<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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

        foreach ($responseData as $key => $value) {
            $feeString = $value['pgFee'];
            $feeAmount = 0;

            if (preg_match('/Rp\s+(\d+(?:\.\d+)?)\s*\+\s*(\d+(?:\.\d+)?)%/', $feeString, $matches)) {
                $flatFee = (float) str_replace('.', '', $matches[1]);
                $percentageFee = (float) $matches[2];

                $percentageAmount = ($percentageFee / 100) * $paymentAmount;
                $feeAmount = $flatFee + $percentageAmount;
            } elseif (preg_match('/Rp\s+(\d+(?:\.\d+)?)/', $feeString, $matches)) {
                $feeAmount = (float) str_replace('.', '', $matches[1]);
            }

            PaymentMethod::create([
                'name' => $value['name'],
                'code' => $value['pgCode'],
                'category' => 'Bank',
                'fee' => $feeAmount,
                'description' => "<p>Deskripsi</p>",
                'image' => $value['imageUrl'],
            ]);
        }

        return response()->json($responseData);
    }
}
