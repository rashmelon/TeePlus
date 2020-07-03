<?php

namespace App\Http\Controllers;

use App\Http\Requests\ShippingMethodRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\ShippingMethod;
use App\Transformers\ShippingMethodTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ShippingMethodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', ShippingMethod::class);

        return ApiResponse::fluentIndexRespond(ShippingMethod::query(), ShippingMethodTransformer::class)->execute();
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
     * @param ShippingMethodRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(ShippingMethodRequest $request)
    {
        $this->authorize('store', ShippingMethod::class);

        return ApiResponse::createRespond(ShippingMethod::create($request->validated()), ShippingMethodTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param ShippingMethod $shipping_method
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(ShippingMethod $shipping_method)
    {
        $this->authorize('show', ShippingMethod::class);

        return ApiResponse::showRespond($shipping_method, ShippingMethodTransformer::class)->execute();
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
     * @param ShippingMethodRequest $request
     * @param ShippingMethod $shipping_method
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(ShippingMethodRequest $request, ShippingMethod $shipping_method)
    {
        $this->authorize('update', ShippingMethod::class);

        $shipping_method->update($request->validated());

        return ApiResponse::updateRespond($shipping_method, ShippingMethodTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param ShippingMethod $shipping_method
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(ShippingMethod $shipping_method)
    {
        $this->authorize('destroy', ShippingMethod::class);

        $shipping_method->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
