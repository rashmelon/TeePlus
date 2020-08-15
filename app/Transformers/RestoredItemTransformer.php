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
        'product', 'price_combination', 'design_print_price'
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'product', 'price_combination', 'design_print_price'
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

    public function includeDesignPrintPrice(RestoredItem $restoredItem)
    {
        if ($restoredItem->designPrintPrice){
            return $this->item($restoredItem->designPrintPrice, new DesignPrintPriceTransformer(), 'no-data');
        }
        return $this->null();
    }
}
