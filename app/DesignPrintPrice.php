<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class DesignPrintPrice extends Model
{
    protected $fillable = ['price'];

    protected $with = ['printCriteria', 'design'];

    public function design()
    {
        return $this->belongsTo(Design::class);
    }

    public function printCriteria()
    {
        return $this->belongsTo(PrintCriteria::class);
    }

    public function orderProducts()
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function restoredItems()
    {
        return $this->hasMany(RestoredItem::class);
    }

    public function scopeDesign($query, $value)
    {
        return $query->where('design_id', $value);
    }

    public function scopeCategory(Builder $query, $value)
    {
        return $query->whereHas('printCriteria', function ($query) use ($value){
            $query->where('category_id', $value);
        });
    }
}
