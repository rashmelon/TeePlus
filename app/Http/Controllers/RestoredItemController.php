<?php

namespace App\Http\Controllers;

use App\Design;
use App\Http\Requests\RestoredItemRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\Order;
use App\PriceCombination;
use App\Product;
use App\RestoredItem;
use App\Transformers\RestoredItemTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;

class RestoredItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return ApiResponse::fluentIndexRespond(RestoredItem::query(), RestoredItemTransformer::class)->execute();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param RestoredItemRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(RestoredItemRequest $request)
    {
        $this->authorize('store', RestoredItem::class);

        $data = $request->validated();

        $restoredItem = RestoredItem::create($data);
        Product::find($data['product_id'])->restoredItems()->save($restoredItem);
        PriceCombination::find($data['price_combination_id'])->restoredItems()->save($restoredItem);
        Design::find($data['design_id'])->restoredItems()->save($restoredItem);
        Order::find($data['order_id'])->restoredItems()->save($restoredItem);
        $request->user()->restoredItems()->save($restoredItem);

        $restoredItem->load('product', 'priceCombination', 'design', 'order');

        return ApiResponse::createRespond($restoredItem, RestoredItemTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param RestoredItem $restored_item
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(RestoredItem $restored_item)
    {
        $this->authorize('show', [RestoredItem::class, $restored_item]);

        return ApiResponse::showRespond($restored_item, RestoredItemTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param RestoredItem $restored_item
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(RestoredItem $restored_item)
    {
        $this->authorize('destroy', RestoredItem::class);

        $restored_item->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
