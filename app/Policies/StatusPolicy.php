<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StatusPolicy
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
        return request()->user()->hasPermissionTo('browse-status');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-status');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-status');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-status');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-status');
    }
}
