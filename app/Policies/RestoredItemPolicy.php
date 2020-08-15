<?php

namespace App\Policies;

use App\RestoredItem;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RestoredItemPolicy
{
    use HandlesAuthorization;

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-restored-item');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-restored-item');
    }

    public function show(User $user, RestoredItem $restoredItem)
    {
        return request()->user()->hasPermissionTo('view-restored-item') || $restoredItem->user_id == $user->id;
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-restored-item');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-restored-item');
    }
}
