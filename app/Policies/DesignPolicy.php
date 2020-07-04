<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DesignPolicy
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
        return request()->user()->hasPermissionTo('browse-design');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-design');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-design');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-design');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-design');
    }
}
