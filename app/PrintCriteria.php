<?php

namespace App;

use App\Traits\CategoryItems;
use Illuminate\Database\Eloquent\Model;

class PrintCriteria extends Model
{
    use CategoryItems;

    protected $fillable = ['criteria', 'price'];
}
