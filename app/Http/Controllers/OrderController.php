<?php

namespace App\Http\Controllers;

use App\Design;
use App\Http\Requests\OrderRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\Order;
use App\OrderProduct;
use App\PaymentType;
use App\PriceCombination;
use App\Product;
use App\RestoredItem;
use App\ShippingPrice;
use App\Status;
use App\Transformers\OrderTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
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

        return ApiResponse::fluentIndexRespond(Order::query(), OrderTransformer::class)->execute();
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
     * @param OrderRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(OrderRequest $request)
    {
        $this->authorize('store', Order::class);

        $data = $request->validated();

        DB::beginTransaction();

        $order = Order::create($data);

        $data['internal_tracking'] = str_slug($request->user()->name).'-'.$order->id;

        $order->update($data);

        Status::find($data['status_id'])->orders()->save($order);
        PaymentType::where('name', 'cash')->first()->orders()->save($order);
        ShippingPrice::find($data['shipping_price_id'])->orders()->save($order);

        foreach (json_decode($data['orderProducts']) as $data){
            $order_product = OrderProduct::create([
                'quantity' => $data->quantity,
            ]);
            $product = Product::find($data->product_id);
            if (isset($data->id)){
                $product->fill([
                    'quantity' => $product->quantity+1
                ]);
                $product->save();
                RestoredItem::find($data->id)->delete();
            }

            if ($product->quantity - $product->sold() < $data->quantity){
                DB::rollBack();

                return ApiResponse::setMessage('The given data was invalid.')->setErrors([
                    "product" => [
                        "the amount chosen for product '$product->name' is greater than our stock"
                    ]
                ])->setStatusCode(422)->execute();
            }
            $product->orderProducts()->save($order_product);
            PriceCombination::find($data->price_combination_id)->orderProducts()->save($order_product);
            Design::find($data->design_id)->orderProducts()->save($order_product);
            $order->orderProducts()->save($order_product);
        }

        DB::commit();

        $order->load('status', 'paymentType', 'shippingPrice');

        return ApiResponse::createRespond($order, OrderTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param Order $order
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Order $order)
    {
        $this->authorize('show', Order::class);

        $order->load(['orderProducts', 'orderProducts.product.category']);

        return ApiResponse::showRespond($order, OrderTransformer::class, ['order_products'])->execute();
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
     * @param OrderRequest $request
     * @param Order $order
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(OrderRequest $request, Order $order)
    {
        $this->authorize('update', Order::class);

        $data = $request->validated();

        $order->update($data);

        if (array_key_exists('status_id', $data)){
            Status::find($data['status_id'])->orders()->save($order);
        }

        if (array_key_exists('shipping_price_id', $data)){
            ShippingPrice::find($data['shipping_price_id'])->orders()->save($order);
        }

        $order->load('status', 'shippingPrice');

        return ApiResponse::updateRespond($order, OrderTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Order $order
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(Order $order)
    {
        $this->authorize('destroy', Order::class);

        $order->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
