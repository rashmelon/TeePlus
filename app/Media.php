<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Media extends Model
{
    protected $fillable = ['name', 'old_name', 'url', 'relation'];

    protected $table = 'medias';

    public function mediable()
    {
        return $this->morphTo();
    }
}
