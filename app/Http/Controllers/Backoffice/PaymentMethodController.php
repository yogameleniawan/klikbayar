<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\File;
use App\Models\PaymentMethod;
use App\Services\FileService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentMethodController extends Controller
{
    public function __construct(
        protected FileService $fileService
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $payment_methods = PaymentMethod::search(
            keyword: $request->search,
            columns: ["id", "name", "code", "category"],
            )
            ->sort(
            sort_by: $request->sort_by ?? 'name',
            sort_order: $request->sort_order == 'ascending' ? 'ASC' : 'DESC'
            )
            ->paginate($request->length ?? 10);

        return Inertia::render("Backoffice/PaymentMethods/Index", [
            'payment_methods' => $payment_methods
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Backoffice/PaymentMethods/Add");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'code' => 'required',
            'category' => 'required',
            'image' => 'required',
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

            try {
                PaymentMethod::create([
                    'name' => $request->name,
                    'description' => $request->description,
                    'code' => $request->code,
                    'category' => $request->category,
                    'image_id' => $image_id,
                ]);

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
        $data = PaymentMethod::with(['image'])
        ->where('id', $id)
        ->first()
        ->toArray();

        return Inertia::render("Backoffice/PaymentMethods/Edit", [
            'data' => $data,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'code' => 'required',
            'category' => 'required',
            'image' => 'required',
        ]);

        $payment_method = PaymentMethod::find($id);

        try {
            $image = $request->file('image');
            $image_id = $payment_method->image_id;

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

            try {
                $payment_method->update([
                    'name' => $request->name,
                    'description' => $request->description,
                    'code' => $request->code,
                    'category' => $request->category,
                    'image_id' => $image_id
                ]);

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
        $payment_method = PaymentMethod::find($id);
        $image = File::find($payment_method->image_id);

        try {
            $payment_method->delete();

            $this->fileService->delete($image->file->path);

            return back()->with('message', 'Data deleted successfuly');
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
        }
    }
}
