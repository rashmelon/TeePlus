<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class RestoredItem extends Model
{
    protected $fillable = ['notes'];

    protected $with = ['product', 'priceCombination', 'designPrintPrice'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function priceCombination()
    {
        return $this->belongsTo(PriceCombination::class);
    }

    public function designPrintPrice()
    {
        return $this->belongsTo(DesignPrintPrice::class);
    }

    public function scopeUser(Builder $query, $value)
    {
        return $query->where('user_id', $value);
    }
}
