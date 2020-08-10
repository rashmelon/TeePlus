<?php

namespace App\Transformers;

use App\RestoredItem;
use League\Fractal\TransformerAbstract;

class RestoredItemTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'product', 'price_combination', 'design'
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'product', 'price_combination', 'design'
    ];

    /**
     * A Fractal transformer.
     *
     * @param RestoredItem $restoredItem
     * @return array
     */
    public function transform(RestoredItem $restoredItem)
    {
        return $restoredItem->toArray();
    }

    public function includeProduct(RestoredItem $restoredItem)
    {
        if ($restoredItem->product){
            return $this->item($restoredItem->product, new ProductTransformer(), 'no-data');
        }
        return $this->null();
    }

    public function includePriceCombination(RestoredItem $restoredItem)
    {
        if ($restoredItem->priceCombination){
            return $this->item($restoredItem->priceCombination, new PriceCombinationTransformer(), 'no-data');
        }
        return $this->null();
    }

    public function includeDesign(RestoredItem $restoredItem)
    {
        if ($restoredItem->design){
            return $this->item($restoredItem->design, new DesignTransformer(), 'no-data');
        }
        return $this->null();
    }
}
