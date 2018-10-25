<?php

namespace App\Http\Controllers;

use App\Procedure;
use App\Visit;
use App\Http\Requests\Procedure\NewRequest;
use App\Http\Requests\Procedure\UpdateRequest;
use App\Http\Requests\Procedure\DelRequest;
use App\Http\Resources\ProcedureResource;
use Illuminate\Http\Request;

class ProcedureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($visit_id)
    {
        $visit = Visit::findOrFail($visit_id);

        return ProcedureResource::collection($visit->procedures);
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
        $procedure = new Procedure();

        $procedure->visit_id = $request->input('visit_id');
        $procedure->procedure_type_id = $request->input('procedure_type_id');
        $procedure->location = $request->input('location');
        $procedure->start_date = $request->input('start_date');
        $procedure->end_date = $request->input('end_date');
        $procedure->physician = $request->input('physician');
        $procedure->anesthesiologist = $request->input('anesthesiologist');
        $procedure->anesthesiology_type_id = $request->input('anesthesiology_type_id');
        $procedure->notes = $request->input('notes');

        if($procedure->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'procedure has been saved'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Procedure  $procedure
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $procedure = Procedure::findOrFail($id);

        return new ProcedureResource($procedure);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Procedure  $procedure
     * @return \Illuminate\Http\Response
     */
    public function edit(Procedure $procedure)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Procedure  $procedure
     * @return \Illuminate\Http\Response
     */
    public function update(NewRequest $request)
    {
        $procedure = Procedure::findOrFail($request->input('id'));

        $procedure->procedure_type_id = $request->input('procedure_type_id');
        $procedure->location = $request->input('location');
        $procedure->start_date = $request->input('start_date');
        $procedure->end_date = $request->input('end_date');
        $procedure->physician = $request->input('physician');
        $procedure->anesthesiologist = $request->input('anesthesiologist');
        $procedure->anesthesiology_type_id = $request->input('anesthesiology_type_id');
        $procedure->notes = $request->input('notes');

        if($procedure->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'procedure has been updated'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Procedure  $procedure
     * @return \Illuminate\Http\Response
     */
    public function destroy(Procedure $procedure)
    {
        $procedure = Procedure::findOrFail($request->input('id'));
        
        if($procedure->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'procedure has been deleted'
            ]);
        }
    }
}
