<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-user');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-user');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-user');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-user');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-user');
    }
}
