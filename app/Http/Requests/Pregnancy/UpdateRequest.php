<?php

namespace App\Http\Requests\Pregnancy;

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
            'last_period_date' => 'required',
            'pregnancy_status_id' => 'required'
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
            'last_period_date.required' => 'last period is required',
            'pregnancy_status_id.required' => 'pregnancy status is required'
        ];
    }
}
