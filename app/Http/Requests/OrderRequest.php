<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $segments = request()->segments();
        if (sizeof($segments) == 2){
            return [
                'customer_name' => 'required',
                'phone_number' => 'required',
                'additional_number' => '',
                'address' => 'required',
                'shipping_note' => '',
                'discount' => '',
                'additional_fees' => '',
                'additional_fees_details' => '',
                'status_id' => 'required|exists:statuses,id',
                'shipping_price_id' => 'required|exists:shipping_prices,id',
                'orderProducts' => 'required',
                'external_tracking' => ''
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'customer_name' => '',
                'phone_number' => '',
                'additional_number' => '',
                'address' => '',
                'shipping_note' => '',
                'discount' => '',
                'additional_fees' => '',
                'additional_fees_details' => '',
                'status_id' => 'exists:statuses,id',
                'shipping_price_id' => 'exists:shipping_prices,id',
                'orderProducts' => '',
                'external_tracking' => ''
            ];
        }
    }
}
