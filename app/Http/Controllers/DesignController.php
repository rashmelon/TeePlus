<?php

namespace App\Http\Controllers;

use App\Design;
use App\DesignPrintPrice;
use App\Http\Requests\DesignRequest;
use App\Http\Responses\Facades\ApiResponse;
use App\Media;
use App\PrintCriteria;
use App\Transformers\DesignTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class DesignController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Design::class);

        return ApiResponse::fluentIndexRespond(Design::query(), DesignTransformer::class)->execute();
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
     * @param DesignRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(DesignRequest $request)
    {
        $this->authorize('store', Design::class);

        $data = $request->validated();

        $design = Design::create($data);

        foreach ($data['images'] as $file){
            $image = Media::create([
                'url' => download_file($file, config('paths.'.Design::class.'.image')),
                'old_name' => $file->getClientOriginalName(),
                'relation' => 'image'
            ]);
            $design->images()->save($image);
        }

        if (isset($data['designPrintPrice'])){
            foreach (json_decode($data['designPrintPrice']) as $temp){
                $price = DesignPrintPrice::create([
                    'price' => $temp->price
                ]);
                $design->printPrices()->save($price);
                PrintCriteria::find($temp->print_criteria_id)->designPrices()->save($price);
            }
        }


        return ApiResponse::createRespond($design, DesignTransformer::class)->execute();
    }

    /**
     * Display the specified resource.
     *
     * @param Design $design
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Design $design)
    {
        $this->authorize('show', Design::class);

        return ApiResponse::showRespond($design, DesignTransformer::class)->execute();
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
     * @param DesignRequest $request
     * @param Design $design
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(DesignRequest $request, Design $design)
    {
        $this->authorize('update', Design::class);

        $data = $request->validated();

        if (array_key_exists('images', $data)){
            foreach ($design->images as $image){
                Storage::disk('public')->delete(config('paths.'.Design::class.'.'.'image').'/'.$image->url);
            }
            $design->images()->delete();
            foreach ($data['images'] as $file){
                $image = Media::create([
                    'url' => download_file($file, config('paths.'.Design::class.'.image')),
                    'old_name' => $file->getClientOriginalName(),
                    'relation' => 'image'
                ]);
                $design->images()->save($image);
            }
        }

        $design->update($data);

        return ApiResponse::updateRespond($design, DesignTransformer::class)->execute();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Design $design
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(Design $design)
    {
        $this->authorize('destroy', Design::class);

        foreach ($design->images as $image){
            Storage::disk('public')->delete(config('paths.' . Design::class . '.image') . '/' . $image->url);
        }
        $design->images()->delete();
        $design->delete();

        return ApiResponse::deleteRespond()->execute();
    }
}
