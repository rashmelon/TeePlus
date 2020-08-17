<?php

namespace App\Transformers;

use App\Invoice;
use League\Fractal\TransformerAbstract;

class InvoiceTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'order'
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'order'
    ];

    /**
     * A Fractal transformer.
     *
     * @param Invoice $invoice
     * @return array
     */
    public function transform(Invoice $invoice)
    {
        return $invoice->toArray();
    }

    public function includeOrder(Invoice $invoice)
    {
        if ($invoice->order){
            return $this->item($invoice->order, new OrderTransformer(), 'no-data');
        }
        return  $this->null();
    }
}
