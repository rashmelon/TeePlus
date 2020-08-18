<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\ProductRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\Media;
use App\Product;
use App\Transformers\ProductTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Product::class);

        $query = Product::query();

        if (!request()->user()->roles[0]->name == 'Super Admin'){
            $query = $query->inStock();
        }

        return ApiResponse::fluentIndexRespond($query, ProductTransformer::class)->execute();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(ProductRequest $request)
    {
        $this->authorize('store', Product::class);

        $data = $request->validated();

        $product = Product::create($data);

        if (\request()->hasFile('image')){
            $file = $request->file('image');
            $image = Media::create([
                'url' => download_file($file, config('paths.'.Product::class.'.image')),
                'old_name' => $file->getClientOriginalName() . '.' . $file->getClientOriginalExtension(),
                'relation' => 'image'
            ]);
            $product->image()->save($image);
        }

        $product->priceCombinations()->sync(json_decode($data['priceCombinations']));

        Category::find($data['category_id'])->products()->save($product);

        return ApiResponse::createRespond($product, ProductTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param Product $product
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Product $product)
    {
        $this->authorize('show', [Product::class, $product]);

        return ApiResponse::showRespond($product, ProductTransformer::class)->execute();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProductRequest $request
     * @param Product $product
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(ProductRequest $request, Product $product)
    {
        $this->authorize('update', Product::class);

        $data = $request->validated();

        if ($request->hasFile('image')){
            Storage::disk('public')->delete(config('paths.'.Product::class.'.'.'image').'/'.$product->image->url);
            $file = $request->file('image');
            $product->image->update([
                'url' => download_file($file, config('paths.'.Product::class.'.image')),
                'old_name' => $file->getClientOriginalName() . '.' . $file->getClientOriginalExtension(),
            ]);
        }

        if (array_key_exists('priceCombinations', $data)){
            $product->priceCombinations()->sync(json_decode($data['priceCombinations']));
        }

        $product->update($data);

        return ApiResponse::updateRespond($product, ProductTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Product $product
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(Product $product)
    {
        $this->authorize('destroy', Category::class);

        if ($product->image) {
            Storage::disk('public')->delete(config('paths.' . Product::class . '.image') . '/' . $product->image->url);
        }

        $product->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
