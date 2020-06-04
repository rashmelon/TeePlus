<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\IndexResponse;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\UserTransformer;
use App\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class EmployeeController extends Controller
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

        $builder = User::employees();
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
     * @param EmployeeRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(EmployeeRequest $request)
    {
        $this->authorize('store', User::class);

        $data = $request->except('role');

        if (\request()->hasFile('image')){
            $data['image'] = download_file(\request()->file('image'), config('paths.image.create'));
        }
        $data['email_verified_at'] = now();
        $data['password'] = bcrypt($request->password);

        $user = User::create($data);

        $user->assignRole($request->role);

        return ApiResponse::createRespond($user, UserTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show($id)
    {
        $this->authorize('show', User::class);

        return ApiResponse::showRespond(User::find($id), UserTransformer::class)->execute();
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
     * @param EmployeeRequest $request
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(EmployeeRequest $request, $id)
    {
        return $this->updateUser(User::find($id), $request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy($id)
    {
        $this->authorize('destroy', User::class);

        $user = User::find($id);

        Storage::disk('public')->delete(config('paths.user-image.delete').$user->image);

        User::find($id)->delete();

        return ApiResponse::deleteRespond()->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @param EmployeeRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function updateUser(User $user, Request $request)
    {
        $this->authorize('update', User::class);

        $data = $request->validated();
        if (array_key_exists('role', $data)){
            $role = $data['role'];
            unset($data['role']);

            if ($role){
                $user->syncRoles($role);
            }
        }

        if ($request->hasFile('image')){
            Storage::disk('public')->delete($user->image);
            $data['image'] = download_file(\request()->file('image'), config('paths.image.create'));
        }
        if ($request->password){
            $data['password'] = bcrypt($data['password']);
        }

        $user->update($data);

        return ApiResponse::updateRespond($user, UserTransformer::class)->execute();
    }
}
