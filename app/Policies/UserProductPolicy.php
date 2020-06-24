<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserProductPolicy
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
        return request()->user()->hasPermissionTo('browse-seller-product');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-seller-product');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-seller-product');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-seller-product');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-seller-product');
    }
}
