<?php

use App\Http\Controllers\Backoffice\CustomerPageController;
use App\Http\Controllers\Backoffice\DashboardController;
use App\Http\Controllers\Backoffice\PaymentMethodController;
use App\Http\Controllers\Backoffice\Products\DigiProductController;
use App\Http\Controllers\Backoffice\Products\ProductCategoryController;
use App\Http\Controllers\Backoffice\Products\ProductController;
use App\Http\Controllers\Backoffice\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth', 'prefix' => 'admin', 'as' => 'backoffice.'], function () {
    Route::resources([
        'customer-page' => CustomerPageController::class,
        'dashboard' => DashboardController::class,
        'payment-methods' => PaymentMethodController::class,
        'users' => UserController::class,
    ]);

    Route::post('/customer-page/delete-product/{id}', [CustomerPageController::class, 'deleteProduct'])->name('customer-page.delete-product');

    Route::group(['prefix' => '/products', 'as' => 'products.'], function() {
        Route::resources([
            'digi' => DigiProductController::class,
            'catalog' => ProductController::class,
            'categories' => ProductCategoryController::class
        ]);
    });
});
