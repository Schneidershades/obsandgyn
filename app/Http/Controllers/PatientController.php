<?php

namespace App\Http\Controllers;

use App\Patient;
use App\Http\Requests\Patient\NewRequest;
use App\Http\Requests\Patient\UpdateRequest;
use App\Http\Requests\Patient\DelRequest;
use App\Http\Resources\PatientResource;
use Illuminate\Http\Request;
 
class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $patients = Patient::paginate();

        return PatientResource::collection($patients);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewRequest $request)
    {
        $patient = new Patient();

        $patient->name = $request->input('name');
        $patient->address = $request->input('address');
        $patient->religion = $request->input('religion');
        $patient->birth_date = $request->input('birth_date');
        $patient->tribe = $request->input('tribe');
        $patient->husband_occupation = $request->input('husband_occupation');

        if($patient->save()) {
            return response()->json([
                'success' => 1,
                'message' => "Patient has been added"
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $patient = Patient::findOrFail($id);

        return new PatientResource($patient);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $patient = Patient::findOrFail($request->input('id'));

        $patient->address = $request->input('address');
        $patient->religion = $request->input('religion');
        $patient->birth_date = $request->input('birth_date');
        $patient->tribe = $request->input('tribe');
        $patient->husband_occupation = $request->input('husband_occupation');

        if($patient->save()) {
            return response()->json([
                'success' => 1,
                'message' => "Patient has been added"
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelRequest $request)
    {
        $patient = Patient::findOrFail($request->input('id'));
        
        if($patient->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'Patient has been deleted'
            ]);
        }
    }
}
