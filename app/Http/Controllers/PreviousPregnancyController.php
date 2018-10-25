<?php

namespace App\Http\Controllers;

use App\PreviousPregnancy;
use App\Http\Requests\PreviousPregnancy\NewRequest;
use App\Http\Requests\PreviousPregnancy\UpdateRequest;
use App\Http\Requests\PreviousPregnancy\DelRequest;
use App\Http\Resources\PreviousPregnancyResource;
use Illuminate\Http\Request;

class PreviousPregnancyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($patient_id)
    {
        $previousPregnancies = PreviousPregnancy::orderBy('year', 'asc')->paginate();

        return PreviousPregnancyResource::collection($previousPregnancies);
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
        $previousPregnancy = new PreviousPregnancy();

        $previousPregnancy->patient_id = $request->input('patient_id');
        $previousPregnancy->year = $request->input('year');
        $previousPregnancy->duration = $request->input('duration');
        $previousPregnancy->antenatal_complications = $request->input('antenatal_complications');
        $previousPregnancy->labour = $request->input('labour');
        $previousPregnancy->age_if_alive = $request->input('age_if_alive');
        $previousPregnancy->age_if_dead = $request->input('age_if_dead');
        $previousPregnancy->cause_of_death = $request->input('cause_of_death');

        if($previousPregnancy->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Previous Pregnancy has been saved'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PreviousPregnancy  $previousPregnancy
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $previousPregnancy = PreviousPregnancy::findOrFail($id);

        return new PreviousPregnancyResource($previousPregnancy);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PreviousPregnancy  $previousPregnancy
     * @return \Illuminate\Http\Response
     */
    public function edit(PreviousPregnancy $previousPregnancy)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PreviousPregnancy  $previousPregnancy
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $previousPregnancy = PreviousPregnancy::findOrFail($request->input('id'));

        $previousPregnancy->year = $request->input('year');
        $previousPregnancy->duration = $request->input('duration');
        $previousPregnancy->antenatal_complications = $request->input('antenatal_complications');
        $previousPregnancy->labour = $request->input('labour');
        $previousPregnancy->age_if_alive = $request->input('age_if_alive');
        $previousPregnancy->age_if_dead = $request->input('age_if_dead');
        $previousPregnancy->cause_of_death = $request->input('cause_of_death');

        if($previousPregnancy->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Previous Pregnancy has been updated'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PreviousPregnancy  $previousPregnancy
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelRequest $request)
    {
        $previousPregnancy = PreviousPregnancy::findOrFail($request->input('id'));
        
        if($previousPregnancy->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'Previous Pregnancy has been deleted'
            ]);
        }
    }
}
