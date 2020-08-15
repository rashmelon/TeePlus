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
        if ($order->status){
            if ($order->status->name == 'pending' || $order->status->name == 'canceled before printing'){
                $order->total_price = 0;
                $order->total_price_info = "";
            }
            else if($order->status->name == 'printing'
                || $order->status->name == 'canceled after printing'
                ||$order->status->name == 'ready for shipping'
                ||$order->status->name == 'shipped'
                ||$order->status->name == 'delivered'
                ||$order->status->name == 'returned'
            ){
                $order->total_price = 0;
                $order->total_price_info = "";
                foreach ($order->orderProducts as $orderProduct){
                    $order->total_price += ($orderProduct->designPrintPrice->price + $orderProduct->product->base_price + $orderProduct->priceCombination->price) * $orderProduct->quantity;
                    $order->total_price_info .=
                        "+(".($orderProduct->designPrintPrice->price + $orderProduct->product->base_price + $orderProduct->priceCombination->price)." * ".$orderProduct->quantity.") "
                        .$orderProduct->quantity." items ".$orderProduct->product->name."(".$orderProduct->product->base_price.
                        " with the combination of ".$orderProduct->priceCombination->combination."(".$orderProduct->priceCombination->price.")".
                        " with printing type of "
                        .$orderProduct->designPrintPrice->printCriteria->criteria."(".$orderProduct->designPrintPrice->price.")<br>";
                }
            }
            if($order->status->name == 'shipped' || $order->status->name == 'delivered' ||$order->status->name == 'returned'){
                $order->total_price += $order->shippingPrice->price +$order->additional_fees - $order->discount;
                $order->total_price_info .= "+(".$order->shippingPrice->price.") Shipping Price"
                    ." to ".$order->shippingPrice->city->name
                    ." with method of ".$order->shippingPrice->shippingMethod->name."<br>";
                $order->total_price_info .= "+(".$order->additional_fees.") additional fees for ".$order->additional_fees_details."<br>";
                $order->total_price_info .= "-(".$order->discount.") discount<br>";
            }
            $order->total_price_info .= "=(".$order->total_price.") total";

        }
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
