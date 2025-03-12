<?php

namespace Database\Seeders;

use App\Models\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        File::create([
            'path' => 'images/image.png',
            'file_name' => 'image.png'
        ]);

        File::create([
            'path' => 'images/banner.png',
            'file_name' => 'banner.png'
        ]);
    }
}
