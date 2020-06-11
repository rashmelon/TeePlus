<?php

namespace App;

use App\Traits\CategoryItems;
use Illuminate\Database\Eloquent\Model;

class PriceCombination extends Model
{
    use CategoryItems;

    protected $fillable = ['combination', 'price'];
}
