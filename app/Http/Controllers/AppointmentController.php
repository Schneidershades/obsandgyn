<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Http\Requests\Appointment\NewRequest;
use App\Http\Requests\Appointment\UpdateRequest;
use App\Http\Requests\Appointment\DelRequest;
use App\Http\Resources\AppointmentResource;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $appointments = Appointment::orderBy('created_at', 'desc')->paginate();

        return AppointmentResource::collection($appointments);
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
        $appointment = new Appointment();

        $appointment->patient_id = $request->input('patient_id');
        $appointment->start_date = $request->input('start_date');
        $appointment->end_date = $request->input('end_date');
        $appointment->examiner = $request->input('examiner');
        $appointment->location = $request->input('location');
        $appointment->appointment_type_id = $request->input('appointment_type_id');
        $appointment->appointment_status_id = $request->input('appointment_status_id');
        $appointment->notes = $request->input('notes');

        if($appointment->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Appointment added successfully'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $appointment = Appointment::findOrFail($id);

        return new AppointmentResource($appointment);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $appointment = Appointment::findOrFail($request->input('id'));

        $appointment->start_date = $request->input('start_date');
        $appointment->end_date = $request->input('end_date');
        $appointment->examiner = $request->input('examiner');
        $appointment->location = $request->input('location');
        $appointment->appointment_type_id = $request->input('appointment_type_id');
        $appointment->appointment_status_id = $request->input('appointment_status_id');
        $appointment->notes = $request->input('notes');

        if($appointment->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Appointment updated successfully'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelRequest $request)
    {
        $appointment = Appointment::findOrFail($request->input('id'));

        if($appointment->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'Appointment has been deleted successfully'
            ]);
        }
    }
}
