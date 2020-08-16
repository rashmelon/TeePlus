<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransactionRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\Transaction;
use App\Transformers\TransactionTransformer;
use App\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Transaction::class);

        return ApiResponse::fluentIndexRespond(Transaction::query(), TransactionTransformer::class)->execute();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param TransactionRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(TransactionRequest $request)
    {
        $this->authorize('store', Transaction::class);

        $data = $request->validated();

        $transaction = Transaction::create($data);

        User::find($data['seller_id'])->transactions()->save($transaction);

        return ApiResponse::createRespond($transaction, TransactionTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param Transaction $transaction
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Transaction $transaction)
    {
        $this->authorize('show', [Transaction::class, $transaction]);

        return ApiResponse::showRespond($transaction, TransactionTransformer::class)->execute();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param TransactionRequest $request
     * @param Transaction $transaction
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(TransactionRequest $request, Transaction $transaction)
    {
        $this->authorize('update', [Transaction::class, $transaction]);

        $transaction->update($request->validated());

        return ApiResponse::updateRespond($transaction, TransactionTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Transaction $Transaction
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(Transaction $Transaction)
    {
        $this->authorize('destroy', Transaction::class);

        $Transaction->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
