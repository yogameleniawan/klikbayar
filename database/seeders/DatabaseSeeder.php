<?php

namespace Database\Seeders;

use App\Models\File;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(50)->create();

        // User::factory()->create([
        //     'name' => 'Admin',
        //     'email' => 'admin@test.com',
        //     'password' => Hash::make('qwerty')
        // ]);

        $this->call([
            // FileSeeder::class,
            // BannerSeeder::class,
            // DigiProductSeeder::class,
            // ProductSeeder::class,
            // ProductDetailSeeder::class,
            PaymentMethodSeeder::class,
        ]);
    }
}
