<?php

use App\Http\Controllers\API\MidtransController;
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

        Route::post('/notification', [MidtransController::class, 'notificationHandler'])
            ->middleware('throttle:120,1')
            ->name('midtrans.notification');
    });

    Route::prefix('/transactions')->group(function () {
        Route::get('/{id}/check-status', [MidtransController::class, 'checkStatus'])
            ->middleware('throttle:20,1')
            ->name('transactions.check-status');

        Route::post('/{id}/cancel', [MidtransController::class, 'cancelTransaction'])
            ->middleware('throttle:10,1')
            ->name('transactions.cancel');
    });
});
