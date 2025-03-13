<?php

use App\Http\Controllers\API\MidtransController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['as' => 'api.'], function () {
    Route::get('/product', [App\Http\Controllers\API\ProductController::class, 'getProductByCategory'])->name('product.get');
    Route::post('/midtrans/transaction', [MidtransController::class, 'createTransaction'])->name('midtrans.transaction');
});
