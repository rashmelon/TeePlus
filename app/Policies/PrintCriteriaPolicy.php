<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PrintCriteriaPolicy
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
        return request()->user()->hasPermissionTo('browse-print-criteria');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-print-criteria');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-print-criteria');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-print-criteria');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-print-criteria');
    }
}
