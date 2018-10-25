<?php

namespace App\Http\Controllers;

use App\Inventory;
use App\Http\Requests\Inventory\NewRequest;
use App\Http\Requests\Inventory\UpdateRequest;
use App\Http\Requests\Inventory\DelRequest;
use App\Http\Resources\InventoryResource;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $inventories = Inventory::paginate();

        return InventoryResource::collection($inventories);
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
        $inventory = new Inventory();

        $inventory->name = $request->input('name');
        $inventory->inventoryTypeId = $request->input('inventory_type_id');
        $inventory->quantity = $request->input('quantity');
        $inventory->unit_id = $request->input('unit_id');
        $inventory->price = $request->input('price');
        $inventory->expiration = $request->input('expiration');

        if($inventory->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Item added successfully'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $inventory = Inventory::findOrFail($id);

        return new InventoryResource($inventory);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function edit(Inventory $inventory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request)
    {
        $inventory = Inventory::findOrFail($request->input('id'));

        $inventory->name = $request->input('name');
        $inventory->inventoryTypeId = $request->input('inventory_type_id');
        $inventory->quantity = $request->input('quantity');
        $inventory->unit_id = $request->input('unit_id');
        $inventory->price = $request->input('price');
        $inventory->expiration = $request->input('expiration');

        if($inventory->save()) {
            return response()->json([
                'success' => 1,
                'message' => 'Item updated successfully'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Inventory  $inventory
     * @return \Illuminate\Http\Response
     */
    public function destroy(DelRequest $request)
    {
        $inventory = Inventory::findOrFail($request->input('id'));
        
        if($inventory->delete()) {
            return response()->json([
                'success' => 1,
                'message' => 'Item deleted successfully'
            ]);
        }
    }
}
