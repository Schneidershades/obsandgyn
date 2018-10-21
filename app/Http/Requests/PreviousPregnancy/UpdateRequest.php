<?php

namespace App\Http\Requests\PreviousPregnancy;

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
            'year' => 'required',
            'duration' => 'required',
            'antenatal_complications' => 'required',
            'labour' => 'required'
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
            'year.required' => 'last period is required',
            'duration.required' => 'pregnancy status is required',
            'antenatal_complications.required' => 'antenatal complications is required',
            'labour.required' => 'labour is required'
        ];
    }
}
