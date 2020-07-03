<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShippingPriceRequest extends FormRequest
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
                'price' => 'required',
                'days' => 'required',
                'city_id' => 'required|exists:cities,id',
                'shipping_method_id' => 'required|exists:shipping_methods,id',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'price' => '',
                'days' => '',
                'city_id' => 'exists:cities,id',
                'shipping_method_id' => 'exists:shipping_methods,id',
            ];
        }
    }
}
