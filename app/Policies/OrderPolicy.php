<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class OrderPolicy
{
    use HandlesAuthorization;

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-order');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-order');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-order');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-order');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-order');
    }
}
