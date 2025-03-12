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
});

Route::get('stream/image', [ImageController::class, 'streamImage'])->name('stream');
Route::delete('destroy/image', [ImageController::class, 'destroy'])->name('image.destroy');

require __DIR__.'/auth.php';
require __DIR__.'/backoffice.php';
