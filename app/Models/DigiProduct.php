<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Yogameleniawan\SearchSortEloquent\Traits\Searchable;
use Yogameleniawan\SearchSortEloquent\Traits\Sortable;

class DigiProduct extends Model
{
    /** @use HasFactory<\Database\Factories\DigiProductFactory> */
    use HasFactory, Searchable, Sortable, HasUuids;

    protected $table = 'digi_products';

    protected $guarded = ['created_at', 'updated_at'];
}
