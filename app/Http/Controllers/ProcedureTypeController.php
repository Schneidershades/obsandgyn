<?php

namespace App\Http\Controllers;

use App\ProcedureType;
use App\Http\Requests\ProcedureType\NewRequest;
use App\Http\Requests\ProcedureType\UpdateRequest;
use App\Http\Requests\ProcedureType\DelRequest;
use App\Http\Resources\ProcedureTypeResource;
use Illuminate\Http\Request;

class ProcedureTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $procedureTypes = ProcedureType::paginate();

        return ProcedureTypeResource::collection($procedureTypes);
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
        $procedureType = new ProcedureType();

        $procedureType->name = $request->input('name');

        if($procedureType->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Procedure Type has been saved'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProcedureType  $procedureType
     * @return \Illuminate\Http\Response
     */
    public function show(ProcedureType $procedureType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ProcedureType  $procedureType
     * @return \Illuminate\Http\Response
     */
    public function edit(ProcedureType $procedureType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProcedureType  $procedureType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $procedureType = ProcedureType::findOrFail($request->input('id'));

        $procedureType->name = $request->input('name');

        if($procedureType->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Procedure Type has been updated'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProcedureType  $procedureType
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelRequest $request)
    {
        $procedureType = ProcedureType::findOrFail($request->input('id'));
        
        if($procedureType->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Procedure Type has been deleted'
            ]);
        }
    }
}
