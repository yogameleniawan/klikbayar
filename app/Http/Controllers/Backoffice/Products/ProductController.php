<?php

namespace App\Http\Controllers\Backoffice\Products;

use App\Http\Controllers\Controller;
use App\Models\DigiProduct;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductDetail;
use App\Services\FileService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function __construct(
        protected FileService $fileService
    ) {}

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
        $request->validate([
            'banner' => 'required',
            'image' => 'required',
            'product_category_id' => 'required',
            'name' => 'required',
            'description' => 'required',
            'products' => 'required',
        ]);

        try {
            $image = $request->file('image');
            $image_id = "";

            if (count($image)) {
                foreach ($image as $file) {
                    try {
                        $file = $this->fileService->create($file);
                        $image_id = $file->id;
                    } catch (\Throwable $th) {
                        return back()->withErrors(['message' =>  $th->getMessage()]);
                    }
                }
            }

            $banner = $request->file('banner');
            $banner_id = "";

            if (count($banner)) {
                foreach ($banner as $file) {
                    try {
                        $file = $this->fileService->create($file);
                        $banner_id = $file->id;
                    } catch (\Throwable $th) {
                        return back()->withErrors(['message' =>  $th->getMessage()]);
                    }
                }
            }

            try {
                $product = Product::create([
                    'name' => $request->name,
                    'description' => $request->description,
                    'brand' => $request->brand,
                    'input' => 'input',
                    'slug' => Str::slug($request->name),
                    'banner_id' => $banner_id,
                    'image_id' => $image_id,
                    'product_category_id' => $request->product_category_id
                ]);

                foreach($request->products as $item) {
                    ProductDetail::create([
                        'margin' => $item["margin"],
                        'product_id' => $product->id,
                        'digi_product_id' => $item["digi_product"],
                    ]);
                }

                return back()->with('message', 'Data added successfuly');
            } catch (\Throwable $th) {
                return back()->withErrors(['message' =>  $th->getMessage()]);
            }
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
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
