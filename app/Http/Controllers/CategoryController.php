<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\CategoryRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\Media;
use App\PriceCombination;
use App\PrintCriteria;
use App\Transformers\CategoryTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Category::class);

        return ApiResponse::fluentIndexRespond(Category::query(), CategoryTransformer::class)->execute();
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
     * @param CategoryRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CategoryRequest $request)
    {
        $this->authorize('store', Category::class);

        $data = $request->validated();

        $category = Category::create($data);

        if (\request()->hasFile('image')){
            $file = $request->file('image');
            $image = Media::create([
                'url' => download_file($file, config('paths.'.Category::class.'.image')),
                'old_name' => $file->getClientOriginalName() . '.' . $file->getClientOriginalExtension(),
                'relation' => 'image'
            ]);
            $category->image()->save($image);
        }

        foreach (json_decode($data['priceCombinations']) as $combination){
            $combination = PriceCombination::create([
                'combination' => $combination->combination,
                'price' => $combination->price
            ]);
            $category->priceCombinations()->save($combination);
        }

        foreach (json_decode($data['printCriterias']) as $criteria){
            $criteria = PrintCriteria::create([
                'criteria' => $criteria->criteria,
                'price' => $criteria->price
            ]);
            $category->printCriterias()->save($criteria);
        }

        return ApiResponse::createRespond($category, CategoryTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param Category $category
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Category $category)
    {
        $this->authorize('show', Category::class);

        return ApiResponse::showRespond($category, CategoryTransformer::class)->execute();
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
     * @param CategoryRequest $request
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(CategoryRequest $request, $id)
    {
        $this->authorize('update', Category::class);

        $category = Category::find($id);
        $data = $request->validated();

        if ($request->hasFile('image')){
            Storage::disk('public')->delete(config('paths.'.Category::class.'.'.'image').'/'.$category->image->url);
            $file = $request->file('image');
            $category->image->update([
                'url' => download_file($file, config('paths.'.Category::class.'.image')),
                'old_name' => $file->getClientOriginalName() . '.' . $file->getClientOriginalExtension(),
            ]);
        }

        if (array_key_exists('priceCombinations', $data)){
            foreach (json_decode($data['priceCombinations']) as $combination){
                $combination = PriceCombination::create([
                    'combination' => $combination->combination,
                    'price' => $combination->price
                ]);
                $category->priceCombinations()->save($combination);
            }
        }

        if (array_key_exists('printCriterias', $data)) {
            foreach (json_decode($data['printCriterias']) as $criteria) {
                $criteria = PrintCriteria::create([
                    'criteria' => $criteria->criteria,
                    'price' => $criteria->price
                ]);
                $category->printCriterias()->save($criteria);
            }
        }

        $category->update($data);

        return ApiResponse::updateRespond($category, CategoryTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Category $category
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(Category $category)
    {
        $this->authorize('destroy', Category::class);

        if ($category->image) {
            Storage::disk('public')->delete(config('paths.' . Category::class . '.image') . '/' . $category->image->url);
        }

        $category->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
