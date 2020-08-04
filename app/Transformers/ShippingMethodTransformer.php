<?php

namespace App\Transformers;

use App\ShippingMethod;
use League\Fractal\TransformerAbstract;

class ShippingMethodTransformer extends TransformerAbstract
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
        //
    ];

    /**
     * A Fractal transformer.
     *
     * @param ShippingMethod $method
     * @return array
     */
    public function transform(ShippingMethod $method)
    {
        return $method->toArray();
    }
}
