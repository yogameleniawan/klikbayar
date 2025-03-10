<?php

namespace App\Http\Controllers\Backoffice\Products;

use App\Http\Controllers\Controller;
use App\Models\DigiProduct;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = Product::search(
            keyword: $request->search,
            columns: ["id", "name"],
        )
        ->sort(
            sort_by: $request->sort_by ?? 'name',
            sort_order: $request->sort_order == 'ascending' ? 'ASC' : 'DESC'
        )
        ->paginate($request->length ?? 10);

        return Inertia::render("Backoffice/Products/Catalog/Index", [
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = ProductCategory::all();

        $digiflazz_products = DigiProduct::all();

        return Inertia::render("Backoffice/Products/Catalog/Add", [
            'categories' => $categories,
            'digiflazz_products' => $digiflazz_products
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request->all());
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
