<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PriceCombinationPolicy
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
        return request()->user()->hasPermissionTo('browse-price-combination');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-price-combination');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-price-combination');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-price-combination');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-price-combination');
    }
}
