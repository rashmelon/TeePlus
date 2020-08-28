<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\PrintCriteriaRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\PrintCriteria;
use App\Transformers\PrintCriteriaTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PrintCriteriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', PrintCriteria::class);

        return ApiResponse::fluentIndexRespond(PrintCriteria::whereHas('category', function ($query){
            return $query->whereNotNull('id');
        })->with('category'), PrintCriteriaTransformer::class, ['category'])->execute();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PrintCriteriaRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(PrintCriteriaRequest $request)
    {
        $this->authorize('store', PrintCriteria::class);

        $data = $request->validated();

        $category = Category::find($data['category_id']);

        $criteria = PrintCriteria::create([
            'criteria' => $data['criteria']
        ]);
        $category->printCriterias()->save($criteria);

        return ApiResponse::createRespond($criteria, PrintCriteriaTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param PrintCriteria $print_criterion
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(PrintCriteria $print_criterion)
    {
        $this->authorize('show', PrintCriteria::class);

        return ApiResponse::showRespond($print_criterion, PrintCriteriaTransformer::class)->execute();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PrintCriteriaRequest $request
     * @param PrintCriteria $print_criterion
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(PrintCriteriaRequest $request, PrintCriteria $print_criterion)
    {
        $this->authorize('update', PrintCriteria::class);

        $print_criterion->update($request->validated());

        return ApiResponse::updateRespond($print_criterion, PrintCriteriaTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param PrintCriteria $print_criterion
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(PrintCriteria $print_criterion)
    {
        $this->authorize('destroy', PrintCriteria::class);

        $print_criterion->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
