<?php

namespace App\Http\Controllers;

use App\VisitStatus;
use App\Http\Requests\VisitStatus\NewRequest;
use App\Http\Requests\VisitStatus\UpdateRequest;
use App\Http\Requests\VisitStatus\DelRequest;
use App\Http\Resources\VisitStatusResource;
use Illuminate\Http\Request;

class VisitStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $visitStatuses = VisitStatus::paginate();

        return VisitStatusResource::collection($visitStatuses);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\VisitStatus  $visitStatus
     * @return \Illuminate\Http\Response
     */
    public function show(VisitStatus $visitStatus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\VisitStatus  $visitStatus
     * @return \Illuminate\Http\Response
     */
    public function edit(VisitStatus $visitStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\VisitStatus  $visitStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, VisitStatus $visitStatus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\VisitStatus  $visitStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(VisitStatus $visitStatus)
    {
        //
    }
}
