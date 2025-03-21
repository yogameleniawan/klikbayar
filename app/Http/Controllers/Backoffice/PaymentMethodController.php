<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class PaymentMethodController extends Controller
{
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
            'enabled' => 'required',
        ]);

        try {
            try {
                PaymentMethod::create([
                    'name' => $request->name,
                    'description' => $request->description,
                    'code' => $request->code,
                    'category' => $request->category,
                    'enabled' => $request->enabled,
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
            'enabled' => 'required',
        ]);

        $payment_method = PaymentMethod::find($id);

        try {

            try {
                $payment_method->update([
                    'name' => $request->name,
                    'description' => $request->description,
                    'code' => $request->code,
                    'category' => $request->category,
                    'enabled' => $request->enabled,
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

        try {
            $payment_method->delete();

            return back()->with('message', 'Data deleted successfuly');
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
        }
    }

    public function getLogoFiles()
    {
        $path = public_path('assets/logo');

        if (!File::isDirectory($path)) {
            return response()->json([
                'success' => false,
                'message' => 'Logo directory not found',
                'data' => []
            ], 404);
        }

        $files = File::files($path);

        $logoFiles = [];
        foreach ($files as $file) {
            $extension = strtolower($file->getExtension());
            $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'];

            if (in_array($extension, $allowedExtensions)) {
                $logoFiles[] = [
                    'name' => $file->getFilename(),
                    'path' => route('logo.stream', ['filename' => $file->getFilename()]),
                    'size' => $file->getSize(),
                    'extension' => $extension,
                    'last_modified' => date('Y-m-d H:i:s', $file->getMTime())
                ];
            }
        }

        usort($logoFiles, function ($a, $b) {
            return $a['name'] <=> $b['name'];
        });

        return $logoFiles;
    }
}
