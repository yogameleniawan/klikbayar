<?php

namespace Database\Seeders;

use App\Models\File;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Valorant',
            'description' => 'Valorant (bergaya sebagai VALORANT) adalah permainan video POP (penembak orang pertama) taktis multipemain gratis yang dikembangkan dan diterbitkan oleh Riot Games, untuk Microsoft Windows.',
            'brand' => 'Riot',
            'slug' => 'valorant',
            'input' => 'input',
            'banner_id' => File::where('path', 'images/banner.png')->first()->id,
            'image_id' => File::where('path', 'images/image.png')->first()->id,
            'product_category_id' => ProductCategory::where('name', 'Games')->first()->id,
        ]);
    }
}
