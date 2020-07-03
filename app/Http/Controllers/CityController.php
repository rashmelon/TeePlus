<?php

namespace App\Http\Controllers;

use App\City;
use App\Http\Responses\Facades\ApiResponse;
use App\Transformers\CityTransformer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return ApiResponse::fluentIndexRespond(City::query(), CityTransformer::class)->execute();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param City $city
     * @return JsonResponse
     */
    public function update(City $city)
    {
        $city->update(request()->all());

        return ApiResponse::updateRespond($city, CityTransformer::class)->execute();
    }
}
