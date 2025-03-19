<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
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
            ->search(
                keyword: $number,
                columns: ["invoice_number", "phone"],
            )
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
}
