<?php


namespace App\Http\Responses\Facades;


use Illuminate\Support\Facades\Facade;

class ApiResponse extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'CrudResponse';
    }
}
