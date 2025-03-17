<?php

use App\Http\Controllers\API\MidtransController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['as' => 'api.'], function () {
    Route::get('/product', [App\Http\Controllers\API\ProductController::class, 'getProductByCategory'])->name('product.get');

    Route::prefix('/midtrans')->group(function() {
        Route::post('/transaction', [MidtransController::class, 'createTransaction'])->name('midtrans.transaction');
        Route::post('/notification', [MidtransController::class, 'notificationHandler'])->name('midtrans.notification');
    });

    Route::prefix('/transactions')->group(function() {
        Route::get('/{id}/check-status', [MidtransController::class, 'checkStatus'])->name('transactions.check-status');
        Route::post('/{id}/cancel', [MidtransController::class, 'cancelTransaction'])->name('transactions.cancel');
    });

});
