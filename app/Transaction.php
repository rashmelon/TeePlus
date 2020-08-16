<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = ['type', 'amount', 'date'];

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function scopeSeller(Builder $query, $value)
    {
        return $query->where('seller_id', $value);
    }
}
