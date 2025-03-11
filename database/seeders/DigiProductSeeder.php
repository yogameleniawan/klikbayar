<?php

namespace Database\Seeders;

use App\Models\DigiProduct;
use App\Models\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class DigiProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $res = Http::post('https://api.digiflazz.com/v1/price-list', [
            "cmd" => "prepaid",
            "username" => env('DIGIFLAZZ_USERNAME'),
            "sign" => md5(env('DIGIFLAZZ_USERNAME') . env('DIGIFLAZZ_API_KEY') . "pricelist"),
        ]);

        $json = $res->json();

        $products = $json['data'];

        foreach ($products as $product) {
            DigiProduct::updateOrCreate([
                'product_name' => $product['product_name'],
            ], [
                'product_name' => $product['product_name'],
                'category' => $product['category'],
                'brand' => $product['brand'],
                'type' => $product['type'],
                'seller_name' => $product['seller_name'],
                'price' => $product['price'],
                'buyer_sku_code' => $product['buyer_sku_code'],
                'buyer_product_status' => $product['buyer_product_status'],
                'seller_product_status' => $product['seller_product_status'],
                'unlimited_stock' => $product['unlimited_stock'],
                'stock' => $product['stock'],
                'multi' => $product['multi'],
                'start_cut_off' => $product['start_cut_off'],
                'end_cut_off' => $product['end_cut_off'],
                'desc' => $product['desc'],
            ]);
        }

        $category = DigiProduct::select('category')->distinct()->get();

        foreach ($category as $cat) {
            ProductCategory::updateOrCreate([
                'name' => $cat->category,
            ], [
                'name' => $cat->category,
            ]);
        }
    }
}
