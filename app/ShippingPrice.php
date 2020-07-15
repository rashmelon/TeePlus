<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShippingPrice extends Model
{
    protected $fillable = ['price', 'days'];

    public function shippingMethod()
    {
        return $this->belongsTo(ShippingMethod::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
