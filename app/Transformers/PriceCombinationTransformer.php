<?php

namespace App\Transformers;

use App\PriceCombination;
use League\Fractal\TransformerAbstract;

class PriceCombinationTransformer extends TransformerAbstract
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
     * @param PriceCombination $combination
     * @return array
     */
    public function transform(PriceCombination $combination)
    {
        return $combination->toArray();
    }
}
