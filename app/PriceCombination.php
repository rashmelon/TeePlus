<?php

namespace App;

use App\Traits\CategoryItems;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class PriceCombination extends Model
{
    use CategoryItems;

    protected $fillable = ['combination', 'price'];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_price_combinations');
    }

    public function scopeProduct(Builder $query, $value)
    {
        return $query->whereHas('products', function ($query) use ($value){
            $query->where('products.id', $value);
        });
    }
}
