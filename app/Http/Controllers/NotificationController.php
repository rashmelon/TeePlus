<?php

namespace App\Http\Controllers;

use App\Http\Responses\Facades\ApiResponse;
use App\IndexResponse;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\NotificationTransformer;
use App\Transformers\QuestionTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Notifications\Notification;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return ApiResponse::indexRespond(request()->user()->unreadNotifications,  NotificationTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return Response
     */
    public function markAsRead()
    {
        request()->user()->unreadNotifications->markAsRead();

        return ApiResponse::setMessage('Marked All as Read')->execute();
    }
}
