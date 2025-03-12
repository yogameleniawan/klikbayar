<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $banners = Banner::with('file')->get();

        $allProductsCount = Product::count();

        $categories = ProductCategory::withCount('products')->orderBy('name', 'DESC')->get()->map(function ($category, $i) use ($allProductsCount) {
            return [
                'id' => $category->id,
                'name' => $category->name,
                'total' => $category->name === 'Semua' || str_contains($category->name, 'Semua') ? $allProductsCount : $category->products_count,
                'isActive' => $i === 0 ? true : false,
                'icon' => $category->icon,
            ];
        });

        return Inertia::render('Customer/Beranda', [
            'banners' => $banners,
            'categories' => $categories
        ]);
    }

    public function checkout($slug)
    {
        return Inertia::render('Customer/Detail/Index');
    }
}
