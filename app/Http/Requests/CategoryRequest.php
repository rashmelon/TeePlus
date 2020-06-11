<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
                'priceCombinations' => 'required',
                'priceCombinations.*.combination' => 'required',
                'priceCombinations.*.price' => 'required',
                'printCriterias' => 'required',
                'printCriterias.*.criteria' => 'required',
                'printCriterias.*.price' => 'required',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'name' => '',
                'description' => '',
                'image' => '',
                'priceCombinations' => '',
                'priceCombinations.*.combination' => '',
                'priceCombinations.*.price' => '',
                'printCriterias' => '',
                'printCriterias.*.criteria' => '',
                'printCriterias.*.price' => '',
            ];
        }
    }
}
