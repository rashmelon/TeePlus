<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\IndexResponse;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\RoleTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Role::class);

        return ApiResponse::fluentIndexRespond(Role::where('name', '!=', 'super_admin'), RoleTransformer::class)->execute();
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
     * @param RoleRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(RoleRequest $request)
    {
        $this->authorize('store', Role::class);

        $role_data = $data = $request->validated();

        $role_data['is_core'] = 0;

        unset($role_data['rolePermissions']);

        $role = Role::create($role_data);

        foreach ($data['rolePermissions'] as $permission){
            $role->givePermissionTo($permission);
        }

        return ApiResponse::createRespond($role, RoleTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show($id)
    {
        $this->authorize('show', [Role::class, $id]);

        return ApiResponse::showRespond(Role::findById($id), RoleTransformer::class)->execute();
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
     * @param RoleRequest $request
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(RoleRequest $request, $id)
    {
        $this->authorize('update', Role::class);

        $role = Role::findById($id);

        $role_data = $data = $request->validated();

        unset($role_data['permissions']);

        $role->update($role_data);

        $role->syncPermissions($data['permissions']);

        return ApiResponse::updateRespond($role, RoleTransformer::class)->execute();
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
        $this->authorize('destroy', Role::class);

        Role::find($id)->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
