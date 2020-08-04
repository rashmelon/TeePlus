<?php

namespace App\Transformers;

use App\PrintCriteria;
use League\Fractal\TransformerAbstract;

class PrintCriteriaTransformer extends TransformerAbstract
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
     * @param PrintCriteria $criteria
     * @return array
     */
    public function transform(PrintCriteria $criteria)
    {
        return $criteria->toArray();
    }
}
