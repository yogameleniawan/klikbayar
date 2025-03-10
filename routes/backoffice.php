<?php

use App\Http\Controllers\Backoffice\BannerController;
use App\Http\Controllers\Backoffice\DashboardController;
use App\Http\Controllers\Backoffice\Products\DigiProductController;
use App\Http\Controllers\Backoffice\Products\ProductCategoryController;
use App\Http\Controllers\Backoffice\Products\ProductController;
use App\Http\Controllers\Backoffice\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth', 'prefix' => 'admin', 'as' => 'backoffice.'], function () {
    Route::resources([
        'banners' => BannerController::class,
        'dashboard' => DashboardController::class,
        'users' => UserController::class,
    ]);

    Route::group(['prefix' => '/products', 'as' => 'products.'], function() {
        Route::resources([
            'digi' => DigiProductController::class,
            'catalog' => ProductController::class,
            'categories' => ProductCategoryController::class
        ]);
    });
});
