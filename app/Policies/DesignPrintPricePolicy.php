<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DesignPrintPricePolicy
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
        return request()->user()->hasPermissionTo('browse-design-price');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-design-price');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-design-price');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-design-price');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-design-price');
    }
}
