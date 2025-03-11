<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index() {
        $banners = Banner::with('file')->get();
        $categories = ProductCategory::select(['name'])->get();

        return Inertia::render('Customer/Beranda', [
            'banners' => $banners,
            'categories' => $categories
        ]);
    }

    public function detail($slug) {
        return Inertia::render('Customer/Detail/Index');
    }
}
