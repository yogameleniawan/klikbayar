<?php

namespace Database\Seeders;

use App\Models\Banner;
use App\Models\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Banner::factory()->create([
            'file_id' => File::where('path', 'images/banner.png')->first()->id,
        ]);
    }
}
