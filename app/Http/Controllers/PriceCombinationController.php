<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\PriceCombinationRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\PriceCombination;
use App\Transformers\PriceCombinationTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PriceCombinationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', PriceCombination::class);

        return ApiResponse::fluentIndexRespond(PriceCombination::query(), PriceCombinationTransformer::class)->execute();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PriceCombinationRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(PriceCombinationRequest $request)
    {
        $this->authorize('store', PriceCombination::class);

        $data = $request->validated();

        $category = Category::find($data['category_id']);

        $combination = PriceCombination::create([
            'combination' => $data['combination'],
            'price' => $data['price']
        ]);
        $category->priceCombinations()->save($combination);

        return ApiResponse::createRespond($combination, PriceCombinationTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param PriceCombination $priceCombination
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(PriceCombination $priceCombination)
    {
        $this->authorize('show', PriceCombination::class);

        return ApiResponse::showRespond($priceCombination, PriceCombinationTransformer::class)->execute();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PriceCombinationRequest $request
     * @param PriceCombination $priceCombination
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(PriceCombinationRequest $request, PriceCombination $priceCombination)
    {
        $this->authorize('update', PriceCombination::class);

        $priceCombination->update($request->validated());

        return ApiResponse::updateRespond($priceCombination, PriceCombinationTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param PriceCombination $priceCombination
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(PriceCombination $priceCombination)
    {
        $this->authorize('destroy', PriceCombination::class);

        $priceCombination->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
