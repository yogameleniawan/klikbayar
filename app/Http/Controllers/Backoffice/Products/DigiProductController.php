<?php

namespace App\Http\Controllers\Backoffice\Products;

use App\Http\Controllers\Controller;
use App\Models\DigiProduct;
use Illuminate\Http\Request;
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
        //
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
