<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Product::orderBy('created_at', 'Desc')->get();//
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newProduct = new Product;
        $newProduct->name = $request->product["name"];
        $newProduct->images = json_encode($request->product["images"]);
        $newProduct->details = $request->product["details"];
        $newProduct->quantity = $request->product["quantity"];
        $newProduct->price = $request->product["price"];
        $newProduct->sell_price = $request->product["sell_price"];
        $newProduct->sizes = json_encode($request->product["sizes"]);
        $newProduct->available_sizes = json_encode($request->product["available_sizes"]);
        $newProduct->colors = json_encode($request->product["colors"]);
        $newProduct->available_colors = json_encode($request->product["available_colors"]);
        $newProduct->weight = $request->product["weight"];
        $newProduct->keywords = $request->product["keywords"];
        $newProduct->save();

        return $newProduct;//
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
