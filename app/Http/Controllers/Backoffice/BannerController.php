<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\File;
use App\Services\FileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BannerController extends Controller
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
        $request->validate([
            'image' => 'required'
        ]);

        $files = $request->file('image');

        if (count($files)) {
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
        $banner = Banner::with('file')->where('id', $id)->first();
        $file = File::find($banner->file_id);

        try {
            $banner->delete();
            $file->delete();

            $this->fileService->delete($banner->file->path);

            return back()->with('message', 'File deleted successfuly');
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
        }
    }
}
