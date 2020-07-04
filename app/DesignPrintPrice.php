<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DesignPrintPrice extends Model
{
    protected $fillable = ['price'];

    protected $with = ['printCriteria'];

    public function design()
    {
        return $this->belongsTo(Design::class);
    }

    public function printCriteria()
    {
        return $this->belongsTo(PrintCriteria::class);
    }
}
