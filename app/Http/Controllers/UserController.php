<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\Media;
use App\Transformers\UserTransformer;
use App\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', User::class);

        $builder = User::employees()->finance();
        $user = \request()->user();

        if ($user && $user->hasRole('Agency Admin')){
            $builder->where('agency_id', $user->agency_id);
        }

        return ApiResponse::fluentIndexRespond($builder, UserTransformer::class)->execute();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param UserRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(UserRequest $request)
    {
        $this->authorize('store', User::class);

        $data = $request->except('role');
        $data['email_verified_at'] = now();
        $data['password'] = bcrypt($request->password);

        $user = User::create($data);

        if (\request()->hasFile('image')){
            $file = $request->file('image');
            $image = Media::create([
                'url' => download_file($file, config('paths.'.User::class.'.image')),
                'old_name' => $file->getClientOriginalName() . '.' . $file->getClientOriginalExtension(),
                'relation' => 'image'
            ]);
            $user->image()->save($image);
        }

        $user->assignRole($request->role);

        return ApiResponse::createRespond($user, UserTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(User $user)
    {
        $this->authorize('show', User::class);

        return ApiResponse::showRespond(User::finance()->find($user->id), UserTransformer::class)->execute();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserRequest $request
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(UserRequest $request, $id)
    {
        $this->authorize('update', User::class);

        $user = User::find($id);

        $data = $request->validated();
        if (array_key_exists('role', $data)){
            $role = $data['role'];
            unset($data['role']);

            if ($role){
                $user->syncRoles($role);
            }
        }

        if ($request->hasFile('image')){
            $file = $request->file('image');
            $user->image->update([
                'url' => download_file($file, config('paths.'.User::class.'.image')),
                'old_name' => $file->getClientOriginalName() . '.' . $file->getClientOriginalExtension(),
            ]);
        }
        if ($request->password){
            $data['password'] = bcrypt($data['password']);
        }

        $user->update($data);

        return ApiResponse::updateRespond($user, UserTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(User $user)
    {
        $this->authorize('destroy', User::class);

        Storage::disk('public')->delete(config('paths.user-image.delete').$user->image);

        $user->delete();

        return ApiResponse::deleteRespond()->execute();
    }

}
