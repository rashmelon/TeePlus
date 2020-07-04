<?php

namespace App\Http\Controllers;

use App\Http\Responses\Facades\ApiResponse;
use App\User;
use App\UserProduct;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserProductController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param User $user
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(Request $request, User $user)
    {
        $this->authorize('update', UserProduct::class);

        $data = $request->all();

        if (array_key_exists('productsToSell', $data)){
            $user->productsToSell()->sync(json_decode($data['productsToSell']));
        }

        return ApiResponse::setMessage("Products Associated Successfully")->execute();
    }
}
