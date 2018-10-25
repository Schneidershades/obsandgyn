<?php

namespace App\Http\Controllers;

use App\Visit;
use App\Pregnancy;
use App\Http\Requests\Visit\NewRequest;
use App\Http\Requests\Visit\UpdateRequest;
use App\Http\Requests\Visit\DelRequest;
use App\Http\Resources\VisitResource;
use Illuminate\Http\Request;

class VisitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($pregnancy_id)
    {
        $pregnancy = Pregnancy::findOrFail($pregnancy_id);

        return VisitResource::collection($pregnancy->visits);
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
        $visit = new Visit();

        $visit->pregnancy_id = $request->input('pregnancy_id');
        $visit->start_date = $request->input('start_date');
        $visit->end_date = $request->input('end_date');
        $visit->diagnosis = $request->input('diagnosis');
        $visit->examiner = $request->input('examiner');
        $visit->visit_type_id = $request->input('visit_type_id');
        $visit->visit_status_id = $request->input('visit_status_id');

        if($visit->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Visit has been added'
            ]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Visit  $visit
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $visit = Visit::findOrFail($id);

        return new VisitResource($visit);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Visit  $visit
     * @return \Illuminate\Http\Response
     */
    public function edit(Visit $visit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Visit  $visit
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $visit = Visit::findOrFail($request->input('id'));

        $visit->end_date = $request->input('end_date');
        $visit->diagnosis = $request->input('diagnosis');
        $visit->examiner = $request->input('examiner');
        $visit->visit_type_id = $request->input('visit_type_id');
        $visit->visit_status_id = $request->input('visit_status_id');

        if($visit->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Visit has been updated'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Visit  $visit
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelRequest $request)
    {
        $visit = Visit::findOrFail($request->input('id'));
        
        if($visit->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'Visit has been deleted'
            ]);
        }
    }
}
