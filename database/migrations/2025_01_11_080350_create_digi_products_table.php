<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('digi_products', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('product_name');
            $table->string('category');
            $table->string('brand');
            $table->string('type');
            $table->integer('price');
            $table->string('buyer_sku_code');
            $table->boolean('buyer_product_status');
            $table->boolean('seller_product_status');
            $table->boolean('unlimited_stock');
            $table->integer('stock');
            $table->boolean('multi');
            $table->string('start_cut_off');
            $table->string('end_cut_off');
            $table->string('desc');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('digi_products');
    }
};
