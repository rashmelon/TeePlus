<?php

namespace App\Policies;

use App\Transaction;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TransactionPolicy
{
    use HandlesAuthorization;

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-transaction');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-transaction');
    }

    public function show(User $user, Transaction $transaction)
    {
        if ($user->roles[0]->is_core == 1){
            return true;
        }
        return request()->user()->hasPermissionTo('view-transaction') && $transaction->seller_id == $user->id;
    }

    public function update(User $user, Transaction $transaction)
    {
        if ($user->roles[0]->is_core == 1){
            return true;
        }
        return request()->user()->hasPermissionTo('edit-transaction') && $transaction->seller_id == $user->id;
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-transaction');
    }
}
