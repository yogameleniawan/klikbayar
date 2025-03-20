<?php

namespace Database\Seeders;

use App\Models\PaymentMethod;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $merchantCode = env('DUITKU_MERCHANT_CODE');
        $apiKey = env('DUITKU_API_KEY');
        $datetime = date('Y-m-d H:i:s');
        $paymentAmount = 0;
        $signature = hash('sha256', $merchantCode . $paymentAmount . $datetime . $apiKey);

        $payload = [
            "merchantcode" => $merchantCode,
            "amount" => $paymentAmount,
            "datetime" => $datetime,
            "signature" => $signature
        ];

        $response = Http::get(env('DUITKU_BASE_URL') . "/webapi/api/merchant/paymentmethod/getpaymentmethod", $payload);

        $responseData = $response->json();

        foreach ($responseData as $value) {
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
    }
}
