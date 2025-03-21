<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Yogameleniawan\SearchSortEloquent\Traits\Searchable;
use Yogameleniawan\SearchSortEloquent\Traits\Sortable;

class Transaction extends Model
{
    use HasFactory, HasUuids, Searchable, Sortable;

    protected $guarded = ['created_at', 'updated_at'];

    public function payment_method() {
        return $this->belongsTo(PaymentMethod::class, 'payment_method_id');
    }

    public function transaction_detail() {
        return $this->hasMany(TransactionDetail::class, 'transaction_id');
    }

    public function transaction_log() {
        return $this->hasMany(TransactionLog::class, 'transaction_id');
    }

    public function product_review() {
        return $this->hasMany(ProductReview::class, 'transaction_id');
    }
}
