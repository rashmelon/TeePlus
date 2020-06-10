<?php

namespace App\Transformers;

use App\User;
use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'image'
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'image'
    ];

    /**
     * A Fractal transformer.
     *
     * @param User $user
     * @return array
     */
    public function transform(User $user)
    {
        $data = $user->toArray();

        return $data;
    }

    public function includeImage(User $user)
    {
        if ($user->image){
            return $this->item($user->image, new MediaTransformer(), 'no-data');
        }
        return $this->null();
    }
}
