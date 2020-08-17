<?php

namespace App\Http\Controllers;

use App\Http\Responses\Facades\ApiResponse;
use App\Invoice;
use App\User;
use Illuminate\Auth\Access\AuthorizationException;

class RevenueController extends Controller
{
    /**
     * @param User $user
     * @return int|mixed
     * @throws AuthorizationException
     */
    public function show(User $user)
    {
        $this->authorize('revenue', [Invoice::class, $user]);

        $withdraw = $user->transactions()->where('type', 'withdraw')->sum('amount');
        $deposit = $user->transactions()->where('type', 'deposit')->sum('amount');
        $invoice_sum = $user->invoices()->sum('amount');
        return ApiResponse::setData([
            'sum' => $invoice_sum + $deposit - $withdraw
        ])->setMessage('data fetched Successfully')->execute();
    }
}
