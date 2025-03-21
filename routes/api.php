<?php

use App\Http\Controllers\API\DuitkuController;
use App\Http\Controllers\API\MidtransController;
use App\Http\Controllers\API\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['as' => 'api.'], function () {
    Route::get('/product', [App\Http\Controllers\API\ProductController::class, 'getProductByCategory'])
        ->middleware('throttle:120,1')
        ->name('product.get');

    Route::prefix('/midtrans')->group(function () {
        Route::post('/transaction', [MidtransController::class, 'createTransaction'])
            ->middleware('throttle:10,1')
            ->name('midtrans.transaction');
        Route::post('/callback', [MidtransController::class, 'handleCallback'])
            ->name('midtrans.callback')
            ->middleware('throttle:60,1');
    });

    Route::prefix('/duitku')->group(function () {
        Route::get('/payment-methods', [DuitkuController::class, 'getPaymentMethod'])
            ->name('duitku.payment-methods')
            ->middleware('throttle:60,1');
        Route::post('/transaction', [DuitkuController::class, 'createTransaction'])
            ->name('duitku.transaction')
            ->middleware('throttle:60,1');
        Route::post('/callback', [DuitkuController::class, 'handleCallback'])
            ->name('duitku.callback')
            ->middleware('throttle:60,1');
    });

    Route::prefix('/transactions')->group(function () {
        Route::get('/{id}/check-status', [DuitkuController::class, 'checkStatus'])
            ->middleware('throttle:20,1')
            ->name('transactions.check-status');

        Route::post('/{id}/cancel', [MidtransController::class, 'cancelTransaction'])
            ->middleware('throttle:10,1')
            ->name('transactions.cancel');

        Route::get('/{number}', [TransactionController::class, 'getTransaction'])
            ->middleware('throttle:10,1')
            ->name('transactions.detail');

        Route::post('/review', [TransactionController::class, 'storeReview'])
            ->middleware('throttle:10,1')
            ->name('transactions.review');
    });
});
