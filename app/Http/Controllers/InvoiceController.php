<?php

namespace App\Http\Controllers;

use App\Http\Responses\Facades\ApiResponse;
use App\Invoice;
use App\Transformers\InvoiceTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Invoice::class);

        return ApiResponse::fluentIndexRespond(Invoice::query(), InvoiceTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param Invoice $invoice
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Invoice $invoice)
    {
        $this->authorize('show', [Invoice::class, $invoice]);

        return ApiResponse::showRespond($invoice, InvoiceTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Invoice $invoice
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(Invoice $invoice)
    {
        $this->authorize('destroy', [Invoice::class, $invoice]);

        $invoice->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
