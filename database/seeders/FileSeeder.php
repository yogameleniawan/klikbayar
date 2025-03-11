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
            'path' => 'images/67cfade41ebd2_5e7e78a7-674e-4b81-b68b-f09ff0880555.webp',
            'file_name' => '67cfade41ebd2_5e7e78a7-674e-4b81-b68b-f09ff0880555.webp'
        ]);

        File::create([
            'path' => 'images/67cfade42791b_c87afb55-35d7-4197-b18a-99811ca4f718.jpg',
            'file_name' => '67cfade42791b_c87afb55-35d7-4197-b18a-99811ca4f718.jpg'
        ]);
    }
}
