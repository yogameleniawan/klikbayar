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

        $categories = ProductCategory::withCount('products')->get()->map(function ($category, $i) {
            return [
                'id' => $category->id,
                'name' => $category->name,
                'total' => $category->products_count,
                'isActive' => $i === 0 ? true : false,
                'icon' => $category->icon,
            ];
        });

        return Inertia::render('Customer/Beranda', [
            'banners' => $banners,
            'categories' => $categories
        ]);
    }

    public function detail($slug) {
        return Inertia::render('Customer/Detail/Index');
    }
}
