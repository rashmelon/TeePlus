<?php

namespace App\Transformers;

use App\Status;
use League\Fractal\TransformerAbstract;

class StatusTransformer extends TransformerAbstract
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
     * @param Status $status
     * @return array
     */
    public function transform(Status $status)
    {
        return $status->toArray();
    }
}
