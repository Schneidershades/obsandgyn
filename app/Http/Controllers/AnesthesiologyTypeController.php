<?php

namespace App\Http\Controllers;

use App\AnesthesiologyType;
use App\Http\Requests\AnesthesiologyType\NewRequest;
use App\Http\Requests\AnesthesiologyType\UpdateRequest;
use App\Http\Requests\AnesthesiologyType\DelRequest;
use App\Http\Resources\AnesthesiologyTypeResource;
use Illuminate\Http\Request;

class AnesthesiologyTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $anesthesiologyTypes = AnesthesiologyType::paginate(100);

        return AnesthesiologyTypeResources::collection($anesthesiologyTypes);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewRequest $request)
    {
        $anesthesiologyType = new AnesthesiologyType();

        $anesthesiologyType->name = $request->input('name');

        if($anesthesiologyType->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Anesthesiology Type added successfully'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AnesthesiologyType  $anesthesiologyType
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $anesthesiologyType = AnesthesiologyType::findOrFail($id);

        return new AnesthesiologyTypeResource($anesthesiologyType);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AnesthesiologyType  $anesthesiologyType
     * @return \Illuminate\Http\Response
     */
    public function edit(AnesthesiologyType $anesthesiologyType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AnesthesiologyType  $anesthesiologyType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $anesthesiologyType = AnesthesiologyType::findOrFail($request->input(id));

        $anesthesiologyType->name = $anesthesiologyType->input('name');

        if($anesthesiologyType->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Anesthesiology Type updated successfully'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AnesthesiologyType  $anesthesiologyType
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelRequest $anesthesiologyType)
    {
        $anesthesiologyType = AnesthesiologyType::findOrFail($request->input(id));

        if($anesthesiologyType->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'Anesthesiology Type deleted successfully'
            ]);
        }
    }
}
