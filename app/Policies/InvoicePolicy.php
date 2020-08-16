<?php

namespace App\Policies;

use App\Invoice;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class InvoicePolicy
{
    use HandlesAuthorization;

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-invoice');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-invoice');
    }

    public function show(User $user, Invoice $invoice)
    {
        if ($user->roles[0]->is_core == 1){
            return true;
        }
        return request()->user()->hasPermissionTo('view-invoice') && $invoice->seller_id == $user->id;
    }

    public function update(User $user, Invoice $invoice)
    {
        if ($user->roles[0]->is_core == 1){
            return true;
        }
        return request()->user()->hasPermissionTo('edit-invoice') && $invoice->seller_id == $user->id;
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-invoice');
    }
}
