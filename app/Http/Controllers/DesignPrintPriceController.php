<?php

namespace App\Http\Controllers;

use App\Design;
use App\DesignPrintPrice;
use App\Http\Requests\DesignPrintPriceRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\PrintCriteria;
use App\Transformers\DesignPrintPriceTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DesignPrintPriceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', DesignPrintPrice::class);

        return ApiResponse::fluentIndexRespond(DesignPrintPrice::query(), DesignPrintPriceTransformer::class)->execute();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param DesignPrintPriceRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(DesignPrintPriceRequest $request)
    {
        $this->authorize('store', DesignPrintPrice::class);

        $data = $request->validated();

        $price = DesignPrintPrice::create($data);
        Design::find($data['design_id'])->printPrices()->save($price);
        PrintCriteria::find($data['print_criteria_id'])->designPrices()->save($price);

        return ApiResponse::createRespond($price, DesignPrintPriceTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param DesignPrintPrice $design_print_price
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(DesignPrintPrice $design_print_price)
    {
        $this->authorize('show', DesignPrintPrice::class);

        return ApiResponse::showRespond($design_print_price, DesignPrintPriceTransformer::class)->execute();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param DesignPrintPriceRequest $request
     * @param DesignPrintPrice $design_print_price
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(DesignPrintPriceRequest $request, DesignPrintPrice $design_print_price)
    {
        $this->authorize('update', DesignPrintPrice::class);

        $data = $request->validated();

        $design_print_price->update($data);
        if (array_key_exists('print_criteria_id', $data)){
            PrintCriteria::find($data['print_criteria_id'])->designPrices()->save($design_print_price);
        }

        return ApiResponse::updateRespond($design_print_price, DesignPrintPriceTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param DesignPrintPrice $design_print_price
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DesignPrintPrice $design_print_price)
    {
        $this->authorize('destroy', DesignPrintPrice::class);

        $design_print_price->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
