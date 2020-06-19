<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'description'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function image()
    {
        return $this->morphOne(Media::class, 'mediable')->where('relation', 'image');
    }

    public function priceCombinations()
    {
        return $this->belongsToMany(PriceCombination::class, 'product_price_combinations');
    }
}
