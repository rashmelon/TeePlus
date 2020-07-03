<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShippingPrice extends Model
{
    protected $fillable = ['price', 'days'];

    protected $with = ['city', 'shippingMethod'];

    public function shippingMethod()
    {
        return $this->belongsTo(ShippingMethod::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }
}
