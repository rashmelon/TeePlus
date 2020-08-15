<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    protected $fillable = ['quantity'];

    protected $with = ['product', 'priceCombination', 'designPrintPrice'];

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

    public function scopeOrder($query, $value)
    {
        return $query->where('order_id', $value);
    }
}
