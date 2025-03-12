<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProductByCategory(Request $request) {
        $category = $request->category;

        if ($category == null || ProductCategory::where('id', $category)->pluck('name')->first() == "Semua") {
            $products = Product::all()->map(
                function ($product) {
                    return [
                        'id' => $product->id,
                        'name' => $product->name,
                        'brand' => $product->brand,
                        'image' => $product->image->path,
                        'slug' => $product->slug,
                    ];
                }
            );

            return response()->json($products);
        }

        $products = Product::where('product_category_id', $category)->get()->map(
            function ($product) {
                return [
                    'id' => $product->id,
                    'name' => $product->name,
                    'brand' => $product->brand,
                    'image' => $product->image->path,
                    'slug' => $product->slug,
                ];
            }
        );

        return response()->json($products);
    }
}
