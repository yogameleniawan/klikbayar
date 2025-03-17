<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Services\FileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ImageController extends Controller
{

    public function __construct(
        protected FileService $fileService
    )
    {}

    public function streamImage(Request $request)
    {
        $path = $request->query('path');

        if (!Storage::exists($path)) {
            return response()->json(['error' => 'Image not found'], 404);
        }

        $mime = Storage::mimeType($path);
        $size = Storage::size($path);

        return new StreamedResponse(function () use ($path) {
            $stream = Storage::readStream($path);

            while (!feof($stream)) {
                $buffer = fread($stream, 65536);
                echo $buffer;
                flush();
            }

            fclose($stream);
        }, 200, [
            'Content-Type' => $mime,
            'Content-Length' => $size,
            'Cache-Control' => 'public, max-age=31536000',
            'Content-Disposition' => 'inline',
        ]);
    }

    public function destroy($id)
    {
        $file = File::find($id);

        try {

            $this->fileService->delete($file->path);

            $file->delete();

            return response()->json(['message' => 'File deleted successfuly']);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()]);
        }
    }
}
