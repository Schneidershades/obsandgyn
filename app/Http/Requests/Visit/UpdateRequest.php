<?php

namespace App\Http\Requests\Visit;

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
            'start_date' => 'required',
            'examiner' => 'required',
            'visit_type_id' => 'required',
            'visit_status_id' => 'required'
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
            'start_date.required' => 'start date is required',
            'examiner.required' => 'examiner is required',
            'visit_type_id.required' => 'visit_type_id is required',
            'visit_status_id.required' => 'visit_status_id is required'
        ];
    }
}
