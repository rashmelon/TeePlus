<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
                'name' => 'required',
                'description' => 'required',
                'image' => 'required',
                'base_price' => 'required',
                'quantity' => 'required',
                'category_id' => 'required|exists:categories,id',
                'priceCombinations' => '',
                'priceCombinations.*' => 'required_with:priceCombinations|exists:price_combinations,id',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'name' => '',
                'description' => '',
                'image' => '',
                'base_price' => '',
                'quantity' => '',
                'priceCombinations' => '',
                'priceCombinations.*' => 'required_with:priceCombinations|exists:price_combinations,id',
            ];
        }
    }
}
