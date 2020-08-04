<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ShippingMethodPolicy
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
        return request()->user()->hasPermissionTo('browse-shipping-method');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-shipping-method');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-shipping-method');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-shipping-method');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-shipping-method');
    }
}
