<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $banners = File::all();

        return Inertia::render('Backoffice/Banner/Index', [
            'banners' => $banners
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
        if (count($files)) {
            foreach ($files as $file) {
                $fileName = uniqid() . '_' . $file->getClientOriginalName();
                $path = $file->storeAs('images', $fileName);

                try {
                    File::create([
                        'file_name' => $fileName,
                        'path' => $path
                    ]);
                } catch (\Throwable $th) {
                    return back()->withErrors(['message' =>  $th->getMessage()]);
                }
            }
        }

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
        $data = File::find($id);

        try {
            $data->delete();

            return back()->with('message', 'File deleted successfuly');
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
        }
    }
}
