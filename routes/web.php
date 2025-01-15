<?php

use App\Http\Controllers\Backoffice\BannerController;
use App\Http\Controllers\Backoffice\DashboardController;
use App\Http\Controllers\Backoffice\UserController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['middleware' => 'auth', 'prefix' => 'admin'], function () {
    Route::resources([
        'banners' => BannerController::class,
        'dashboard' => DashboardController::class,
        'users' => UserController::class,
    ]);
});

Route::group(['as' => 'customer.'], function() {
    Route::get('/', [CustomerController::class, 'index'])->name('beranda');
    Route::get('/{slug}', [CustomerController::class, 'detail'])->name('detail');
});

Route::get('stream/image', [ImageController::class, 'streamImage'])->name('stream');

require __DIR__.'/auth.php';
