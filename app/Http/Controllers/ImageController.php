<?php

namespace App\Http\Controllers;

use App\Models\File as ModelFile;
use App\Services\FileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Illuminate\Support\Facades\Response;

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
        $file = ModelFile::find($id);

        try {

            $this->fileService->delete($file->path);

            $file->delete();

            return response()->json(['message' => 'File deleted successfuly']);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()]);
        }
    }

    public function streamLogoFile(Request $request, $filename)
    {
        // Sanitasi nama file untuk keamanan
        $filename = basename($filename);

        // Path ke file logo
        $path = public_path('assets/logo/' . $filename);

        // Periksa apakah file ada
        if (!File::exists($path)) {
            return response()->json([
                'success' => false,
                'message' => 'File not found'
            ], 404);
        }

        // Dapatkan last modified time dan ETag
        $lastModified = File::lastModified($path);
        $etag = md5_file($path);

        // Check if file is not modified (HTTP caching)
        if ($request->header('If-None-Match') === $etag) {
            return response('', 304);
        }

        if ($request->header('If-Modified-Since')) {
            $ifModifiedSince = strtotime($request->header('If-Modified-Since'));
            if ($lastModified <= $ifModifiedSince) {
                return response('', 304);
            }
        }

        // Untuk menambahkan header ke BinaryFileResponse, perlu menggunakan cara ini
        $response = response()->file($path, [
            'Cache-Control' => 'public, max-age=86400',
            'ETag' => $etag,
            'Last-Modified' => gmdate('D, d M Y H:i:s', $lastModified) . ' GMT'
        ]);

        return $response;
    }


}
