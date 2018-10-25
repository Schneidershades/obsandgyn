<?php

namespace App\Http\Controllers;

use App\Unit;
use App\Http\Requests\Unit\NewRequest;
use App\Http\Requests\Unit\UpdateRequest;
use App\Http\Requests\Unit\DelRequest;
use App\Http\Resources\UnitResource;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $units = Unit::paginate();

        return UnitResource::collection($units);
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
        $unit = new Unit();

        $unit->name = $request->input('name');

        if($unit->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Unit has been added'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $unit = Unit::findOrFail($id); 

        return new UnitResource($unit);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function edit(Unit $unit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $unit = Unit::findOrFail($request->input('id'));

        $unit->name = $request->input('name');

        if($unit->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Unit has been updated'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function destroy(Unit $unit)
    {
        $unit = Unit::findOrFail($request->input('id'));

        if($unit->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'Unit has been deleted'
            ]);
        }
    }
}
