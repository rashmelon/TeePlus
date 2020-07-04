<?php
namespace App\Traits;

use App\Category;

trait CategoryItems
{
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function scopeCategory($query, $value)
    {
        return $query->where('category_id', $value);
    }
}
