<?php

namespace App\Http\Controllers;

use App\City;
use App\Http\Requests\ShippingPriceRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\ShippingMethod;
use App\ShippingPrice;
use App\Transformers\ShippingPriceTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ShippingPriceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', ShippingPrice::class);

        return ApiResponse::fluentIndexRespond(ShippingPrice::query(), ShippingPriceTransformer::class)->execute();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ShippingPriceRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(ShippingPriceRequest $request)
    {
        $this->authorize('store', ShippingPrice::class);

        $data = $request->validated();

        $price = ShippingPrice::create($data);

        City::find($data['city_id'])->shippingPrices()->save($price);
        ShippingMethod::find($data['shipping_method_id'])->shippingPrices()->save($price);

        return ApiResponse::createRespond($price, ShippingPriceTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param ShippingPrice $shipping_price
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(ShippingPrice $shipping_price)
    {
        $this->authorize('show', ShippingPrice::class);

        return ApiResponse::showRespond($shipping_price, ShippingPriceTransformer::class)->execute();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ShippingPriceRequest $request
     * @param ShippingPrice $shipping_price
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(ShippingPriceRequest $request, ShippingPrice $shipping_price)
    {
        $this->authorize('update', ShippingPrice::class);

        $shipping_price->update($request->validated());

        return ApiResponse::updateRespond($shipping_price, ShippingPriceTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param ShippingPrice $shipping_price
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(ShippingPrice $shipping_price)
    {
        $this->authorize('destroy', ShippingPrice::class);

        $shipping_price->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
