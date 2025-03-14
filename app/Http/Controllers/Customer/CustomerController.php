<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\PaymentMethod;
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
        $product = Product::with([
            'category',
            'banner',
            'image'
        ])->with(['detail' => function ($query) {
            $query->with(['digiflazz']);
            $query->join('digi_products', 'digi_products.id', '=', 'product_details.digi_product_id')
                ->orderBy('digi_products.price', 'asc')
                ->select('product_details.*');
        }])->where('slug', $slug)->first()->toArray();

        $payment_methods = PaymentMethod::with(['image'])->get()->toArray();

        return Inertia::render('Customer/Detail/Index', [
            'product' => $product,
            'payment_methods' => $payment_methods
        ]);
    }
}
