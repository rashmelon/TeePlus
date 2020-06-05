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
}
