<?php

namespace App\Transformers;

use App\PaymentType;
use League\Fractal\TransformerAbstract;

class PaymentTypeTransformer extends TransformerAbstract
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
     * @param PaymentType $type
     * @return array
     */
    public function transform(PaymentType $type)
    {
        return $type->toArray();
    }
}
