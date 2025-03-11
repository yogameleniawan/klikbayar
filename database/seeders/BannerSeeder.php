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
            'file_id' => File::where('path', 'images/67cfade42791b_c87afb55-35d7-4197-b18a-99811ca4f718.jpg')->first()->id,
        ]);
    }
}
