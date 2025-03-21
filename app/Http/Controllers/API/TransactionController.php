<?php

namespace App\Http\Controllers\API;

use App\Enums\PaymentStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\ProductReview;
use App\Models\Transaction;
use App\Models\TransactionDetail;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function getTransaction($number)
    {
        $transaction = Transaction::with([
            'transaction_detail' => function ($query) {
                $query->with([
                    'product_detail' => function ($query) {
                        $query->with([
                            'product' => function ($query) {
                                $query->with([
                                    'image' => function ($query) {
                                        $query->select('id', 'path');
                                    }
                                ]);
                                $query->select('id', 'name', 'description', 'brand', 'image_id');
                            }
                        ]);
                        $query->select('id', 'product_id');
                    }
                ]);

                $query->select('id', 'name', 'price', 'transaction_id', 'product_detail_id');
            }
        ])
            ->select('id', 'invoice_number', 'phone', 'status')
            ->where('invoice_number', $number)
            ->orWhere('phone', $number)
            ->orderBy('created_at', 'DESC')
            ->first();

        if ($transaction) {
            return response()->json([
                'data' => [
                    'status' => 'success',
                    'transaction' => $transaction
                        ->toArray(),
                    'message' => 'Transaksi dengan nomor ' . $transaction->invoice_number . ' ditemukan.'
                ]
            ], 200);
        } else {
            return response()->json([
                'status' => 'failed',
                'transaction' => null,
                'message' => 'Transaksi ' . $number . ' tidak ditemukan.'
            ], 404);
        }
    }

    public function storeReview(Request $request)
    {
        try {
            $product = TransactionDetail::with([
                'product_detail.digiflazz:id,buyer_sku_code'
            ])
                ->where('transaction_id', $request->id)
                ->first();

            ProductReview::create([
                'rating' => $request->rating,
                'review' => $request->review,
                'transaction_id' => $request->id,
                'product_id' => $product->id,
            ]);

            $transaction = Transaction::find($request->id);
            $transaction->status = PaymentStatusEnum::REVIEW->value;
            $transaction->save();

            return response()->json([
                'status' => 'success',
                'data' => [
                    'transaction_status' => PaymentStatusEnum::REVIEW->value
                ]
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'failed',
                'message' => "Gagal membuat review",
            ], 500);
        }
    }
}
