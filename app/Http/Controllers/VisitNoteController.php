<?php

namespace App\Http\Controllers;

use App\VisitNote;
use App\Visit;
use App\Http\Requests\VisitNote\NewRequest;
use App\Http\Requests\VisitNote\UpdateRequest;
use App\Http\Requests\VisitNote\DelRequest;
use App\Http\Resources\VisitNoteResource;
use Illuminate\Http\Request;

class VisitNoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($visit_id)
    {
        $visit = Visit::findOrFail($visit_id);

        return VisitNoteResource::collection($visit->visitNotes);
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
        $visitNote = new VisitNote();

        $visitNote->visit_id = $request->input('visit_id');
        $visitNote->note = $request->input('note');

        if($visitNote->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Visit note has been added'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\VisitNote  $visitNote
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $visitNote = VisitNote::findOrFail($id);

        return new VisitNoteResource($visitNote);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\VisitNote  $visitNote
     * @return \Illuminate\Http\Response
     */
    public function edit(VisitNote $visitNote)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\VisitNote  $visitNote
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $visitNote = VisitNote::findOrFail($request->input('note'));

        $visitNote->note = $request->input('note');

        if($visitNote->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Visit note has been updated'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\VisitNote  $visitNote
     * @return \Illuminate\Http\Response
     */
    public function destroy(VisitNote $visitNote)
    {
        $visitNote = VisitNote::findOrFail($request->input('note'));
        
        if($visitNote->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Visit note has been deleted'
            ]);
        }
    }
}
