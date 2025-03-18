<?php

use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['as' => 'customer.'], function() {
    Route::get('/', [CustomerController::class, 'index'])->name('beranda');
    Route::get('/checkout/{slug}', [CustomerController::class, 'checkout'])->name('checkout');
    Route::get('/transaction/{id}', [CustomerController::class, 'detailTransaction'])->name('detail-transaction');
});

Route::get('stream/image', [ImageController::class, 'streamImage'])->name('stream');
Route::post('destroy/image/{id}', [ImageController::class, 'destroy'])->name('image.destroy');
Route::get('/logo/{filename}', [ImageController::class, 'streamLogoFile'])->name('logo.stream');

Route::get('/tes', function() {
    $result = App\Models\ProductDetail::where('product_details.id', '01958d2d-d444-7276-a774-f9c765a6b00c')
    ->join('products', 'product_details.product_id', '=', 'products.id')
    ->leftJoin('files', 'products.image_id', '=', 'files.id')
    ->select('products.brand', 'files.path as image_path')
    ->first();

   dd($result->toArray());
});

require __DIR__.'/auth.php';
require __DIR__.'/backoffice.php';
