<?php

namespace App\Http\Controllers;

use App\Http\Requests\VegRequest;
use App\Veg;
use Illuminate\Http\Request;

class VegController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vegs = Veg::all();
        return response()->json($vegs);
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
      $veg = Veg::create($request->all());
      return response()->json('Vegetable Added to store Successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Veg  $veg
     * @return \Illuminate\Http\Response
     */
    public function show(Veg $veg)
    {
        return $veg;

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Veg  $veg
     * @return \Illuminate\Http\Response
     */
    public function edit(Veg $veg)
    {
        $vegetable = Veg::find($veg);
        return response()->json($vegetable);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Veg  $veg
     * @return \Illuminate\Http\Response
     */
    public function update(VegRequest $request, Veg $veg)
    {
        $vegetable = Veg::find($veg);
        $vegetable->vegetable = $request->vegetable;
        $vegetable->price = $request->price;
        $vegetable->description = $request->description;
        $vegetable->Available = $request->Available;
        $vegetable->supplier = $request->supplier;
        $vegetable->save();


        return response()->json('Vegetable  Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Veg  $veg
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Veg::find($id);
        $product->delete();


        return response()->json('Vegetable Deleted Successfully.');
    }
}
