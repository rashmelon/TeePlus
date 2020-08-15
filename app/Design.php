<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Design extends Model
{
    protected $fillable = ['name'];

    protected $with = ['images'];

    public function images()
    {
        return $this->morphMany(Media::class, 'mediable')->where('relation', 'image');
    }

    public function printPrices()
    {
        return $this->hasMany(DesignPrintPrice::class);
    }

    public function printCriteria()
    {
        return $this->belongsToMany(PrintCriteria::class, 'design_print_prices');
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class, 'order_products');
    }

    public function orderProducts()
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function restoredItems()
    {
        return $this->hasMany(RestoredItem::class);
    }

    public function scopeCategory($query, $value)
    {
        $query->whereHas('printCriteria', function ($query) use ($value){
            $query->where('category_id', $value);
        });
    }
}
