<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\File;
use App\Models\Product;
use App\Models\ProductPromo;
use App\Services\FileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CustomerPageController extends Controller
{

    public function __construct(
        protected FileService $fileService
    )
    {}
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $banners = Banner::with('file')->get();
        $products = Product::all();
        $product_promos = ProductPromo::with('product.image')->where('type', 'promo')->get()->toArray();
        $product_best = ProductPromo::with('product.image')->where('type', 'best')->get();

        return Inertia::render('Backoffice/CustomerPage/Index', [
            'banners' => $banners,
            'products' => $products,
            'product_promos' => $product_promos,
            'product_best' => $product_best
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
        $files = $request->file('image');

        if ($files !== null) {
            foreach ($files as $file) {
                try {
                    $file = $this->fileService->create($file);

                    Banner::create([
                        'file_id' => $file->id,
                    ]);
                } catch (\Throwable $th) {
                    return back()->withErrors(['message' =>  $th->getMessage()]);
                }
            }
        }

        ProductPromo::create([
            'product_id' => $request->product_id,
            'type' => $request->type,
        ]);

        return back()->with('message', 'Data added successfuly');
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
        $file = File::find($id);
        $banner = Banner::where('file_id', $file->id)->first();

        try {
            $banner->delete();
            $file->delete();

            $this->fileService->delete($banner->file->path);

            return back()->with('message', 'File deleted successfuly');
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
        }
    }

    public function deleteProduct($id) {
        $product = ProductPromo::find($id);

        try {
            $product->delete();

            return back()->with('message', 'Product deleted successfuly');
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
        }
    }
}
