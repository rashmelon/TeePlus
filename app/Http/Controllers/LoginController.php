<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\UserTransformer;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $login_credentials = $request->validated();

        if (!Auth::guard('web')->attempt($login_credentials)){
            return ApiResponse::errorRespond([
                'email' =>[
                    'Incorrect email or password'
                ]
            ], "Invalid Credentials")->execute();
        }

        $user = User::where('email', $login_credentials['email'])->with(['roles','roles.permissions', 'permissions'])->first();

        return ApiResponse::setMessage("login credentials correct")->setData([
            'user' => fractal($user, new UserTransformer()),
            'access_token' => $user->createToken('token'),
            'token_type' => 'Bearer',
        ])->execute();
    }
}
