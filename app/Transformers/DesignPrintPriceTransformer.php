<?php

namespace App\Transformers;

use App\DesignPrintPrice;
use League\Fractal\TransformerAbstract;

class DesignPrintPriceTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'print_criteria', 'design'
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'design', 'print_criteria'
    ];

    /**
     * A Fractal transformer.
     *
     * @param DesignPrintPrice $printPrice
     * @return array
     */
    public function transform(DesignPrintPrice $printPrice)
    {
        return $printPrice->toArray();
    }

    public function includePrintCriteria(DesignPrintPrice $printPrice)
    {
        if ($printPrice->printCriteria){
            return $this->item($printPrice->printCriteria, new PrintCriteriaTransformer(), 'no-data');
        }
        return $this->null();
    }

    public function includeDesign(DesignPrintPrice $printPrice)
    {
        if ($printPrice->design){
            return $this->item($printPrice->design, new DesignTransformer(), 'no-data');
        }
        return $this->null();
    }
}
