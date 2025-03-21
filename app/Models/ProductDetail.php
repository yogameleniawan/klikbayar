<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Yogameleniawan\SearchSortEloquent\Traits\Searchable;
use Yogameleniawan\SearchSortEloquent\Traits\Sortable;

class ProductDetail extends Model
{
    /** @use HasFactory<\Database\Factories\ProductCategoryFactory> */
    use HasFactory, HasUuids, Searchable, Sortable;

    protected $guarded = ['created_at', 'updated_at'];

    public function product() {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function digiflazz() {
        return $this->belongsTo(DigiProduct::class, 'digi_product_id');
    }

    public function transaction_detail() {
        return $this->belongsTo(TransactionDetail::class, 'transaction_detail_id');
    }
}
