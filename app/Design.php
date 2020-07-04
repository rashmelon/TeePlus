<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Design extends Model
{
    protected $fillable = ['name'];

    public function images()
    {
        return $this->morphMany(Media::class, 'mediable')->where('relation', 'image');
    }

    public function printPrices()
    {
        return $this->hasMany(DesignPrintPrice::class);
    }
}
