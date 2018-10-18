<?php
namespace App\Http\Requests\User;
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
    public function rules() {
        return [
            'id' => 'required',
            'name' => 'required',
            'email' => 'required',
            'active' => 'required',
            'role_id' => 'required'
        ];
    }
    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages() {
        return [
            'id.required' => 'id can not be empty',
            'name.required' => 'name can not be empty',
            'email.required' => 'email can not be empty',
            'active.required' => 'user status can not be empty',
            'role_id.required' => 'user role can not be empty'
        ];
    }
}