<?php

namespace App\Transformers;

use App\Order;
use League\Fractal\TransformerAbstract;

class OrderTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'status', 'payment_type', 'shipping_price'
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'status', 'payment_type', 'shipping_price', 'order_products'
    ];

    /**
     * A Fractal transformer.
     *
     * @param Order $order
     * @return array
     */
    public function transform(Order $order)
    {
        return $order->toArray();
    }

    public function includeStatus(Order $order)
    {
        if ($order->status){
            return $this->item($order->status, new StatusTransformer(), 'no-data');
        }
        return  $this->null();
    }

    public function includePaymentType(Order $order)
    {
        if ($order->paymentType){
            return $this->item($order->paymentType, new PaymentTypeTransformer(), 'no-data');
        }
        return  $this->null();
    }

    public function includeShippingPrice(Order $order)
    {
        if ($order->shippingPrice){
            return $this->item($order->shippingPrice, new ShippingPriceTransformer(), 'no-data');
        }
        return  $this->null();
    }

    public function includeOrderProducts(Order $order)
    {
        return $this->collection($order->orderProducts, new OrderProductTransformer(), 'no-data');
    }
}
