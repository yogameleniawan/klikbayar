<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\File>
 */
class FileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'path' => 'images/67cfade41ebd2_5e7e78a7-674e-4b81-b68b-f09ff0880555.webp',
            'file_name' => '67cfade41ebd2_5e7e78a7-674e-4b81-b68b-f09ff0880555.webp'
        ];
    }
}
