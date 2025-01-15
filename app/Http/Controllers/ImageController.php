<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ImageController extends Controller
{
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
}
