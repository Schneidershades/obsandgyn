<?php

namespace App\Http\Controllers;

use App\AppointmentStatus;
use App\Http\Requests\AppointmentStatus\NewRequest;
use App\Http\Requests\AppointmentStatus\UpdateRequest;
use App\Http\Requests\AppointmentStatus\DelRequest;
use App\Http\Resources\AppointmentStatusResource;
use Illuminate\Http\Request;

class AppointmentStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $appointmentStatuses = AppointmentStatus::paginate();

        return AppointmentStatusResource::collection($appointmentStatuses);
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
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AppointmentStatus  $appointmentStatus
     * @return \Illuminate\Http\Response
     */
    public function show(AppointmentStatus $appointmentStatus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AppointmentStatus  $appointmentStatus
     * @return \Illuminate\Http\Response
     */
    public function edit(AppointmentStatus $appointmentStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AppointmentStatus  $appointmentStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AppointmentStatus $appointmentStatus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AppointmentStatus  $appointmentStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(AppointmentStatus $appointmentStatus)
    {
        //
    }
}
