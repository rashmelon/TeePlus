<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\UserTransformer;
use App\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'name' => 'required',
            'image' => 'max:2048|mimes:jpeg,png',
            'birth_date' => 'date',
            'gender' => '',
            'phone' => ''
        ]);
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        $data = $request->all();

        if ($request->hasFile('image')){
            $data['image'] = download_file(\request()->file('image'), config('paths.image.create'));
        }else{
            $data['image'] = null;
        }

        event(new Registered($user = $this->create($data)));

        if (request()->header('accept') == 'application/json'){
            return ResponseFacade::createRespond(
                fractal(
                    User::where('id', $user->id)->first(),
                    new UserTransformer()
                )
            );
        }

        $this->guard()->login($user);

        return $this->registered($request, $user)
            ?: redirect($this->redirectPath());
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $user =  User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'image' => $data['image'],
            'birth_date' => $data['birth_date'],
            'gender' => $data['gender'],
            'phone' => array_key_exists('phone', $data) ? $data['phone']:null
        ]);

        $user->assignRole('customer');

        return $user;
    }
}
