<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RestoredItemRequest extends FormRequest
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
        return [
            'notes' => '',
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
            'price_combination_id' => 'required|exists:price_combinations,id',
            'design_print_price_id' => 'required|exists:design_print_prices,id',
            'order_id' => 'required|exists:orders,id',
        ];
    }
}
