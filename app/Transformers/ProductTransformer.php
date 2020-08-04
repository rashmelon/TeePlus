<?php

namespace App\Transformers;

use App\Product;
use League\Fractal\TransformerAbstract;

class ProductTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'image', 'priceCombinations'
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'category', 'priceCombinations', 'image'
    ];

    /**
     * A Fractal transformer.
     *
     * @param Product $product
     * @return array
     */
    public function transform(Product $product)
    {
        return $product->toArray();
    }

    public function includeCategory(Product $product)
    {
        if ($product->category){
            return $this->item($product->category, new CategoryTransformer(), 'no-data');
        }
        return $this->null();
    }

    public function includeImage(Product $product)
    {
        if ($product->image){
            return $this->item($product->image, new MediaTransformer(), 'no-data');
        }
        return $this->null();
    }

    public function includePriceCombinations(Product $product)
    {
        return $this->collection($product->priceCombinations, new PriceCombinationTransformer(), 'no-data');
    }
}
