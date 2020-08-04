<?php

namespace App\Transformers;

use App\OrderProduct;
use League\Fractal\TransformerAbstract;

class OrderProductTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'product', 'price_combination', 'design'
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'product', 'price_combination', 'design'
    ];

    /**
     * A Fractal transformer.
     *
     * @param OrderProduct $orderProduct
     * @return array
     */
    public function transform(OrderProduct $orderProduct)
    {
        return $orderProduct->toArray();
    }

    public function includeProduct(OrderProduct $orderProduct)
    {
        if ($orderProduct->product){
            return $this->item($orderProduct->product, new ProductTransformer(), 'no-data');
        }
        return $this->null();
    }

    public function includePriceCombination(OrderProduct $orderProduct)
    {
        if ($orderProduct->priceCombination){
            return $this->item($orderProduct->priceCombination, new PriceCombinationTransformer(), 'no-data');
        }
        return $this->null();
    }

    public function includeDesign(OrderProduct $orderProduct)
    {
        if ($orderProduct->design){
            return $this->item($orderProduct->design, new DesignTransformer(), 'no-data');
        }
        return $this->null();
    }
}
