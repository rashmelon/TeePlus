<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderProductRequest extends FormRequest
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
                'quantity' => 'required',
                'product_id' => 'required|exists:products,id',
                'price_combination_id' => 'required|exists:price_combinations,id',
                'design_id' => 'required|exists:designs,id',
                'order_id' => 'required|exists:orders,id',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'quantity' => '',
                'product_id' => 'exists:products,id',
                'price_combination_id' => 'exists:price_combinations,id',
                'design_id' => 'exists:designs,id',
                'order_id' => 'exists:orders,id',
            ];
        }
    }
}
