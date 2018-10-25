<?php

namespace App\Http\Controllers;

use App\MedicalHistory;
use App\Patient;
use App\Http\Requests\MedicalHistory\NewRequest;
use App\Http\Requests\MedicalHistory\UpdateRequest;
use App\Http\Requests\MedicalHistory\DelRequest;
use App\Http\Resources\MedicalHistoryResource;
use Illuminate\Http\Request;

class MedicalHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($patient_id)
    {
        $patient = Patient::findOrFail($patient_id);

        return MedicalHistoryResource::collection($patient->medicalHistories);
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
        $medicalHistory = new MedicalHistory();

        $medicalHistory->patient_id = $request->input('patient_id');
        $medicalHistory->remarks = $request->input('remarks');
        $medicalHistory->lmp = $request->input('lmp');
        $medicalHistory->eod = $request->input('eod');
        $medicalHistory->gravida = $request->input('gravida');
        
        if($medicalHistory->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Medical History has been saved'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\MedicalHistory  $medicalHistory
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $medicalHistory = MedicalHistory::findOrFail($id);

        return new MedicalHistoryResource($medicalHistory);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\MedicalHistory  $medicalHistory
     * @return \Illuminate\Http\Response
     */
    public function edit(MedicalHistory $medicalHistory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\MedicalHistory  $medicalHistory
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $medicalHistory = MedicalHistory::findOrFail($request->input('id'));

        $medicalHistory->remarks = $request->input('remarks');
        $medicalHistory->lmp = $request->input('lmp');
        $medicalHistory->eod = $request->input('eod');
        $medicalHistory->gravida = $request->input('gravida');
        
        if($medicalHistory->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Medical History has been updated'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MedicalHistory  $medicalHistory
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelRequest $request)
    {
        $medicalHistory = MedicalHistory::findOrFail($request->input('id'));
        
        if($medicalHistory->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'Medical History has been deleted'
            ]);
        }
    }
}
