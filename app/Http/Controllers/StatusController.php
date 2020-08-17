<?php

namespace App\Http\Controllers;

use App\Http\Requests\StatusRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\Status;
use App\Transformers\StatusTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Status::class);

        return ApiResponse::fluentIndexRespond(Status::query(), StatusTransformer::class)->execute();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StatusRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(StatusRequest $request)
    {
        $this->authorize('store', Status::class);

        return ApiResponse::createRespond(Status::create($request->validated()), StatusTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param Status $status
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Status $status)
    {
        $this->authorize('show', Status::class);

        return ApiResponse::showRespond($status, StatusTransformer::class)->execute();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param StatusRequest $request
     * @param Status $status
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(StatusRequest $request, Status $status)
    {
        $this->authorize('update', Status::class);

        $status->update($request->validated());

        return ApiResponse::updateRespond($status, StatusTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Status $status
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(Status $status)
    {
        $this->authorize('destroy', Status::class);

        $status->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
