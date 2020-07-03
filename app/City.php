<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $fillable = ['name'];

    public function shippingPrices()
    {
        return $this->hasMany(ShippingPrice::class);
    }
}
