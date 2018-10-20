<?php

namespace App\Http\Requests\Inventory;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'id' => 'required',
            'name' => 'required',
            'inventory_type_id' => 'required',
            'quantity' => 'required',
            'unit_id' => 'required',
            'price' => 'required',
            'expiration' => 'required'
        ];
    }
    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'id.required' => 'id is required',
            'name.required' => 'name is required',
            'inventory_type_id.required' => 'inventory_type_id is required',
            'quantity.required' => 'quantity is required',
            'unit_id.required' => 'unit is required',
            'price.required' => 'price is required',
            'expiration.required' => 'expiration is required'
        ];
    }
}
