<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Yogameleniawan\SearchSortEloquent\Traits\Searchable;
use Yogameleniawan\SearchSortEloquent\Traits\Sortable;

class ProductDetail extends Model
{
    /** @use HasFactory<\Database\Factories\ProductCategoryFactory> */
    use HasUuids, Searchable, Sortable;

    protected $guarded = ['created_at', 'updated_at'];
}
