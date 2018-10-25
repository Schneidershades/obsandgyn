<?php

namespace App\Http\Controllers;

use App\VisitType;
use App\Http\Requests\VisitType\NewRequest;
use App\Http\Requests\VisitType\UpdateRequest;
use App\Http\Requests\VisitType\DelRequest;
use App\Http\Resources\VisitTypeResource;
use Illuminate\Http\Request;

class VisitTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $visitTypes = VisitType::paginate();

        return VisitTypeResource::collection($visitTypes);
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
     * @param  \App\VisitType  $visitType
     * @return \Illuminate\Http\Response
     */
    public function show(VisitType $visitType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\VisitType  $visitType
     * @return \Illuminate\Http\Response
     */
    public function edit(VisitType $visitType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\VisitType  $visitType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, VisitType $visitType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\VisitType  $visitType
     * @return \Illuminate\Http\Response
     */
    public function destroy(VisitType $visitType)
    {
        //
    }
}
