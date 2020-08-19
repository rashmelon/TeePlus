<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = ['amount', 'description'];

    protected $with  = ['order','order.orderProducts'];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function scopeSeller(Builder $query, $value)
    {
        return $query->where('seller_id', $value);
    }
}
