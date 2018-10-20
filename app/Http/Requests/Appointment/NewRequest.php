<?php

namespace App\Http\Requests\Appointment;

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
            'patient_id' => 'required',
            'start_date' => 'required|date_format:Y-m-d|after:today',
            'examiner' => 'required',
            'appointment_type_id' => 'required',
            'appointment_status_id' => 'required',
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
            'patient_id.required' => 'patient id is required',
            'start_date.required' => 'start date is required', 
            'start_date.date_format' => 'start date is not in the right format',
            'start_date.after' => 'start date must be after today',
            'examiner.required' => 'examiner is required',
            'appointment_type_id' => 'type is required',
            'appointment_status_id' => 'status is required'
        ];
    }
}
