<?php

namespace App\Http\Controllers;

use App\Charge;
use App\Visit;
use App\Http\Requests\Charge\NewRequest;
use App\Http\Requests\Charge\UpdateRequest;
use App\Http\Requests\Charge\DelRequest;
use App\Http\Resources\ChargeResource;
use Illuminate\Http\Request;

class ChargeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($visit_id)
    {
        $visit = Visit::findOrFail($visit_id);

        return ChargeResource::collection($visit->charges);
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
        $charge = new Charge();

        $charge->visit_id = $request->input('visit_id');
        $charge->item = $request->input('item');
        $charge->quantity = $request->input('quantity');

        if($charge->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Charge added successfully'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Charge  $charge
     * @return \Illuminate\Http\Response
     */
    public function show(Charge $charge)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Charge  $charge
     * @return \Illuminate\Http\Response
     */
    public function edit(Charge $charge)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Charge  $charge
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $charge = Charge::findOrFail($request->input('id'));

        $charge->item = $request->input('item');
        $charge->quantity = $request->input('quantity');

        if($charge->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'charge has been updated'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Charge  $charge
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelRequest $request)
    {
        $charge = Charge::findOrFail($request->input('id'));
        
        if($charge->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'charge has been deleted'
            ]);
        }
    }
}
