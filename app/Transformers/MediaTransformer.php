<?php

namespace App\Transformers;

use App\Media;
use League\Fractal\TransformerAbstract;

class MediaTransformer extends TransformerAbstract
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
     * @param Media $media
     * @return array
     */
    public function transform(Media $media=null)
    {
        if ($media){
            $data = [];

            $data['url'] = config('app.url').config('paths.image.get').$media['url'];

            return $data;
        }
        return  [];
    }
}
