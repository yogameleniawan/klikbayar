<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class File extends Model
{
    /** @use HasFactory<\Database\Factories\FileFactory> */
    use HasFactory;

    protected $table = 'files';

    protected $fillable = ['path', 'file_name'];

    protected $appends = ['file_base64'];

    protected function getFileBase64Attribute()
    {
        if (!$this->path || !Storage::exists($this->path)) {
            return null;
        }

        try {
            $stream = Storage::readStream($this->path);
            $contents = stream_get_contents($stream);
            fclose($stream);

            $base64 = base64_encode($contents);

            $mime = Storage::mimeType($this->path);

            return [
                'raw' => $base64,
                'data_uri' => 'data:' . $mime . ';base64,' . $base64,
                'mime_type' => $mime
            ];

        } catch (\Exception $e) {
            return null;
        }
    }
}
