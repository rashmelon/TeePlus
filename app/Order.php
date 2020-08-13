<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['customer_name', 'phone_number', 'additional_number', 'address', 'shipping_note', 'internal_tracking',
        'external_tracking', 'discount', 'additional_fees', 'additional_fees_details',
    ];

    protected $with = ['status', 'paymentType', 'shippingPrice'];

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function paymentType()
    {
        return $this->belongsTo(PaymentType::class);
    }

    public function shippingPrice()
    {
        return $this->belongsTo(ShippingPrice::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'order_products');
    }

    public function designs()
    {
        return $this->belongsToMany(Design::class, 'order_products');
    }

    public function priceCombinations()
    {
        return $this->belongsToMany(PriceCombination::class, 'order_products');
    }

    public function orderProducts()
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function restoredItems()
    {
        return $this->hasMany(RestoredItem::class);
    }
}
