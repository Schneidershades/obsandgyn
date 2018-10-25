<?php

namespace App\Http\Controllers;

use App\Pregnancy;
use App\Patient;
use App\Http\Requests\Pregnancy\NewRequest;
use App\Http\Requests\Pregnancy\UpdateRequest;
use App\Http\Requests\Pregnancy\DelRequest;
use App\Http\Resources\PregnancyResource;
use Illuminate\Http\Request;

class PregnancyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($patient_id)
    {
        $patient = Patient::findOrFail($patient_id);

        return PregnancyResource::collection($patient->pregnancies);
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
        $pregnancy = new Pregnancy();

        $pregnancy->patient_id = $request->input('patient_id');
        $pregnancy->last_period_date = $request->input('last_period_date');
        $pregnancy->delivery_date = $request->input('delivery_date');
        $pregnancy->pregnancy_status_id = $request->input('pregnancy_status_id');
        $pregnancy->notes = $request->input('notes');

        if($pregnancy->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Pregnancy has been added'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pregnancy  $pregnancy
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pregnancy = Pregnancy::findOrFail('id');
        
        return new PregnancyResource($pregnancy);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pregnancy  $pregnancy
     * @return \Illuminate\Http\Response
     */
    public function edit(Pregnancy $pregnancy)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pregnancy  $pregnancy
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $pregnancy = Pregnancy::findOrFail($request->input('id'));

        $pregnancy->last_period_date = $request->input('last_period_date');
        $pregnancy->delivery_date = $request->input('delivery_date');
        $pregnancy->pregnancy_status_id = $request->input('pregnancy_status_id');
        $pregnancy->notes = $request->input('notes');

        if($pregnancy->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Pregnancy has been updated'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pregnancy  $pregnancy
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pregnancy $pregnancy)
    {
        $pregnancy = Pregnancy::findOrFail($request->input('id'));
        
        if($pregnancy->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'Pregnancy has been deleted'
            ]);
        }
    }
}
