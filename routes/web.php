<?php

use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RouteFallbackController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['as' => 'customer.'], function() {
    Route::get('/', [CustomerController::class, 'index'])->name('beranda');
    Route::get('/about-us', [CustomerController::class, 'aboutUs'])->name('about-us');
    Route::get('/check-transaction', [CustomerController::class, 'checkTransaction'])->name('check-transaction');
    Route::get('/transaction/{id}', [CustomerController::class, 'detailTransaction'])->name('detail-transaction');
    Route::get('/transaction/redirect', [CustomerController::class, 'handleRedirect'])->name('redirect-transaction');
    Route::get('/checkout/{slug}', [CustomerController::class, 'checkout'])->name('checkout');
});

Route::get('stream/image', [ImageController::class, 'streamImage'])->name('stream');
Route::post('destroy/image/{id}', [ImageController::class, 'destroy'])->name('image.destroy');
Route::get('/logo/{filename}', [ImageController::class, 'streamLogoFile'])->name('logo.stream');

require __DIR__.'/auth.php';
require __DIR__.'/backoffice.php';
