<?php

namespace App\Http\Controllers;

use App\InventoryType;
use App\Http\Requests\InventoryType\NewRequest;
use App\Http\Requests\InventoryType\UpdateRequest;
use App\Http\Requests\InventoryType\DelRequest;
use App\Http\Resources\InventoryTypeResource;
use Illuminate\Http\Request;

class InventoryTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $inventoryTypes = InventoryType::paginate();

        return InventoryTypeResource::collection($inventoryTypes);
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
     * @param  \App\InventoryType  $inventoryType
     * @return \Illuminate\Http\Response
     */
    public function show(InventoryType $inventoryType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\InventoryType  $inventoryType
     * @return \Illuminate\Http\Response
     */
    public function edit(InventoryType $inventoryType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\InventoryType  $inventoryType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, InventoryType $inventoryType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\InventoryType  $inventoryType
     * @return \Illuminate\Http\Response
     */
    public function destroy(InventoryType $inventoryType)
    {
        //
    }
}
