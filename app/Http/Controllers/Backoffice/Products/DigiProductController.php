<?php

namespace App\Http\Controllers\Backoffice\Products;

use App\Http\Controllers\Controller;
use App\Models\DigiProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class DigiProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = DigiProduct::search(
            keyword: $request->search,
            columns: ["id", "product_name"],
        )
        ->sort(
            sort_by: $request->sort_by ?? 'product_name',
            sort_order: $request->sort_order == 'ascending' ? 'ASC' : 'DESC'
        )
        ->paginate($request->length ?? 10);

        return Inertia::render("Backoffice/Products/Digi/Index", [
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
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
                ],[
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

            return response()->json([
                'message' => 'Product created successfully'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
