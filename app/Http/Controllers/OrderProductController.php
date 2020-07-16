<?php

namespace App\Http\Controllers;

use App\Design;
use App\Http\Requests\OrderProductRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\Order;
use App\OrderProduct;
use App\PriceCombination;
use App\Product;
use App\Transformers\OrderProductTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class OrderProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Order::class);

        return ApiResponse::fluentIndexRespond(OrderProduct::query(), OrderProductTransformer::class)->execute();
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
     * @param OrderProductRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(OrderProductRequest $request)
    {
        $this->authorize('store', Order::class);

        $data = $request->validated();

        $order_product = OrderProduct::create([
            'quantity' => $data['quantity'],
        ]);
        Product::find($data['product_id'])->orderProducts()->save($order_product);
        PriceCombination::find($data['price_combination_id'])->orderProducts()->save($order_product);
        Design::find($data['design_id'])->orderProducts()->save($order_product);
        Order::find($data['order_id'])->orderProducts()->save($order_product);

        $order_product->load('product', 'priceCombination', 'design', 'order');

        return ApiResponse::createRespond($order_product, OrderProductTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param OrderProduct $orderProduct
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(OrderProduct $orderProduct)
    {
        $this->authorize('show', Order::class);

        return ApiResponse::showRespond($orderProduct, OrderProductTransformer::class)->execute();
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
     * @param OrderProductRequest $request
     * @param OrderProduct $order_product
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(OrderProductRequest $request, OrderProduct $order_product)
    {
        $this->authorize('update', Order::class);

        $data = $request->validated();

        $order_product->update($data);

        if (array_key_exists('product_id', $data)){
            Product::find($data['product_id'])->orderProducts()->save($order_product);
        }

        if (array_key_exists('price_combination_id', $data)){
            PriceCombination::find($data['price_combination_id'])->orderProducts()->save($order_product);
        }

        if (array_key_exists('design_id', $data)){
            Design::find($data['design_id'])->orderProducts()->save($order_product);
        }

        if (array_key_exists('order_id', $data)){
            Order::find($data['order_id'])->orderProducts()->save($order_product);
        }

        $order_product->load('product', 'priceCombination', 'design', 'order');

        return ApiResponse::updateRespond($order_product, OrderProductTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param OrderProduct $order_product
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(OrderProduct $order_product)
    {
        $this->authorize('destroy', Order::class);

        $order_product->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
