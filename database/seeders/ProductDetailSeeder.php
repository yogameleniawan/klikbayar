<?php

namespace Database\Seeders;

use App\Models\DigiProduct;
use App\Models\Product;
use App\Models\ProductDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductDetail::create([
            'margin' => 2,
            'discount' => 2,
            'product_id' => Product::first()->id,
            'digi_product_id' => DigiProduct::where('category', 'Games')->first()->id,
        ]);
    }
}
