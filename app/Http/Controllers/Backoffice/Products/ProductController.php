<?php

namespace App\Http\Controllers\Backoffice\Products;

use App\Http\Controllers\Controller;
use App\Models\DigiProduct;
use App\Models\File;
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
        $products = Product::select('products.*', 'product_categories.name as category_name')
            ->join('product_categories', 'products.product_category_id', '=', 'product_categories.id')
            ->search(
            keyword: $request->search,
            columns: ["products.id", "products.name", "product_categories.name"],
            )
            ->sort(
            sort_by: $request->sort_by ?? 'products.name',
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
                    'product_category_id' => ProductCategory::where('name', $request->product_category_id)->first()->id
                ]);

                foreach($request->products as $item) {
                    ProductDetail::create([
                        'margin' => $item["margin"],
                        'discount' => $item["discount"],
                        'product_id' => $product->id,
                        'digi_product_id' => $item["digi_product_id"],
                        'is_active' => $item["is_active"],
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
        $data = Product::select('products.*', 'product_categories.name as category_name')
        ->with(['image', 'banner'])
        ->join('product_categories', 'products.product_category_id', '=', 'product_categories.id')
        ->where('products.id', $id)
        ->first()
        ->toArray();

        $product_details = ProductDetail::where('product_id', $id)->get();

        $categories = ProductCategory::all();

        $digiflazz_products = DigiProduct::all();

        return Inertia::render("Backoffice/Products/Catalog/Edit", [
            'categories' => $categories,
            'digiflazz_products' => $digiflazz_products,
            'data' => $data,
            'product_details' => $product_details
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'product_category_id' => 'required',
            'name' => 'required',
            'description' => 'required',
            'products' => 'required',
        ]);

        $product = Product::find($id);

        try {
            $image = $request->file('image');
            $image_id = $product->image_id;

            if ($image != null) {
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
            $banner_id = $product->banner_id;

            if ($banner != null) {
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
                $product->update([
                    'name' => $request->name,
                    'description' => $request->description,
                    'brand' => $request->brand,
                    'input' => 'input',
                    'slug' => Str::slug($request->name),
                    'banner_id' => $banner_id,
                    'image_id' => $image_id,
                    'product_category_id' => ProductCategory::where('name', $request->product_category_id)->first()->id
                ]);

                foreach($request->products as $item) {
                    ProductDetail::where('product_id', $product->id)->update([
                        'margin' => $item["margin"],
                        'discount' => $item["discount"],
                        'digi_product_id' => $item["digi_product_id"],
                        'is_active' => $item["is_active"],
                    ]);
                }

                return back()->with('message', 'Data updated successfuly');
            } catch (\Throwable $th) {
                return back()->withErrors(['message' =>  $th->getMessage()]);
            }
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::where('id', $id)->first();
        $image = File::find($product->image_id);
        $banner = File::find($product->banner_id);
        $detail_product = ProductDetail::where('product_id', $id)->first();

        try {
            $product->delete();
            $image->delete();
            $image->delete();
            $detail_product->delete();

            $this->fileService->delete($banner->file->path);
            $this->fileService->delete($image->file->path);

            return back()->with('message', 'Data deleted successfuly');
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
        }
    }
}
