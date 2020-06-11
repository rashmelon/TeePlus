<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name', 'description'
    ];

    protected $with = ['image'];

    public function image()
    {
        return $this->morphOne(Media::class, 'mediable')->where('relation', 'image');
    }

    public function priceCombinations()
    {
        return $this->hasMany(PriceCombination::class);
    }

    public function printCriterias()
    {
        return $this->hasMany(PrintCriteria::class);
    }
}
