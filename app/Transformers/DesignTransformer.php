<?php

namespace App\Transformers;

use App\Design;
use League\Fractal\TransformerAbstract;

class DesignTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'images'
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'images'
    ];

    /**
     * A Fractal transformer.
     *
     * @param Design $design
     * @return array
     */
    public function transform(Design $design)
    {
        return $design->toArray();
    }

    public function includeImages(Design $design)
    {
        return $this->collection($design->images, new MediaTransformer(), 'no-data');
    }
}
