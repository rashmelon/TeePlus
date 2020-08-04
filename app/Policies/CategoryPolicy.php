<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryPolicy
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
        return request()->user()->hasPermissionTo('browse-category');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-category');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-category');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-category');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-category');
    }
}
