<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Yogameleniawan\SearchSortEloquent\Traits\Searchable;
use Yogameleniawan\SearchSortEloquent\Traits\Sortable;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory, HasUuids, Searchable, Sortable;

    protected $guarded = ['created_at', 'updated_at'];

    public function category()
    {
        return $this->belongsTo(ProductCategory::class, "product_category_id");
    }

    public function image()
    {
        return $this->belongsTo(File::class, 'image_id');
    }

    public function banner()
    {
        return $this->belongsTo(File::class, 'banner_id');
    }

    public function detail() {
        return $this->hasMany(ProductDetail::class, 'product_id');
    }
}
