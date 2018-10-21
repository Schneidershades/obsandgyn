<?php

namespace App\Http\Requests\Procedure;

use Illuminate\Foundation\Http\FormRequest;

class NewRequest extends FormRequest
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
            'visit_id' => 'required',
            'procedure_type_id' => 'required',
            'start_date' => 'required',
            'physician' => 'required',
            'anesthesiologist' => 'required',
            'anesthesiology_type_id' => 'required'
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
            'visit_id.required' => 'visit_id is required',
            'procedure_type_id.required' => 'procedure is required',
            'start_date.required' => 'start date is required',
            'physician.required' => 'antenatal complications is required',
            'anesthesiologist.required' => 'anesthesiologist is required',
            'anesthesiology_type_id.required' => 'anethesiology type is required'
        ];
    }
}
