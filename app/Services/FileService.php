<?php

namespace App\Services;

use App\Models\File;
use Illuminate\Support\Facades\Storage;

class FileService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function create($file)
    {
        $fileName = uniqid() . '_' . $file->getClientOriginalName();
        $path = $file->storeAs('images', $fileName);

        try {
            $file_model = File::create([
                'file_name' => $fileName,
                'path' => $path
            ]);

            return $file_model;
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
        }
    }

    public function delete($file_path) {
        Storage::delete($file_path);
    }
}
