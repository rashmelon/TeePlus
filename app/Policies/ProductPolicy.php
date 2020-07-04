<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProductPolicy
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
        return request()->user()->hasPermissionTo('browse-product');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-product');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-product');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-product');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-product');
    }
}
