<?php

namespace App\Transformers;

use App\Notifications\QuestionAsked;
use App\Notifications\ReplyAdded;
use Illuminate\Notifications\DatabaseNotification;
use League\Fractal\TransformerAbstract;

class NotificationTransformer extends TransformerAbstract
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
     * @param DatabaseNotification $notification
     * @return array
     */
    public function transform(DatabaseNotification $notification)
    {
        $data = [
            'data' => $notification->data,
            'created_at' => $notification->created_at,
        ];
        return $data;
    }
}
