<?php

namespace App\Transformers;

use App\ShippingPrice;
use League\Fractal\TransformerAbstract;

class ShippingPriceTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'city', 'shipping_method'
    ];

    /**
     * A Fractal transformer.
     *
     * @param ShippingPrice $price
     * @return array
     */
    public function transform(ShippingPrice $price)
    {
        return $price->toArray();
    }

    public function includeCity(ShippingPrice $price)
    {
        return $this->item($price->city, new CityTransformer(), 'no-data');
    }

    public function includeShippingMethod(ShippingPrice $price)
    {
        return $this->item($price->shippingMethod, new ShippingMethodTransformer(), 'no-data');
    }
}
