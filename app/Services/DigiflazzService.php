<?php

namespace App\Services;

use App\Enums\GatewayEnum;
use App\Models\TransactionDetail;
use App\Models\TransactionLog;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class DigiflazzService
{
    /**
     * Create a new class instance.
     */
    public function __construct(
        public $transaction
    ) {}

    public function execute()
    {
        try {
            $ref_id = $this->transaction->invoice_number;

            $product = TransactionDetail::with([
                'product_detail.digiflazz:id,buyer_sku_code'
            ])
                ->where('transaction_id', $this->transaction->id)
                ->first();

            $payload = [
                "username" => env('DIGIFLAZZ_USERNAME'),
                "buyer_sku_code" => $product->product_detail->digiflazz->buyer_sku_code,
                "customer_no" => $this->transaction->customer_number,
                "ref_id" => $ref_id,
                "testing" => config('app.env') !== 'production',
                "sign" => md5(env('DIGIFLAZZ_USERNAME') . env('DIGIFLAZZ_API_KEY')  . $ref_id),
            ];

            $response = Http::post('https://api.digiflazz.com/v1/transaction', $payload);
            $responseData = $response->json();

            TransactionLog::create([
                'response' => json_encode($responseData),
                'payload' => json_encode($payload),
                'gateway' => GatewayEnum::DIGIFLAZZ->value,
                'transaction_id' => $this->transaction->id
            ]);

            return $responseData;
        } catch (\Throwable $th) {
            TransactionLog::create([
                'response' => $th->getMessage(),
                'payload' => json_encode($payload ?? []),
                'gateway' => GatewayEnum::DIGIFLAZZ->value,
                'transaction_id' => $this->transaction->id
            ]);

            Log::error('Digiflazz transaction failed', [
                'error' => $th->getMessage(),
                'transaction_id' => $this->transaction->id
            ]);

            throw $th;
        }
    }
}
