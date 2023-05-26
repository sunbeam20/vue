<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use Carbon\Carbon;

class CustomersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Customer::orderBy('created_at', 'Desc')->get();
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
        // dd($request);
        $newCustomer = new Customer;
        $newCustomer->name = $request->customer["name"];
        $newCustomer->email = $request->customer["email"];
        $newCustomer->password = $request->customer["password"];
        $newCustomer->address = $request->customer["address"];
        $newCustomer->city = $request->customer["city"];
        $newCustomer->zip = $request->customer["zip"];
        $newCustomer->state = $request->customer["state"];
        $newCustomer->contact = $request->customer["contact"];
        $newCustomer->gender = $request->customer["gender"];
        $newCustomer->save();

        return $newCustomer;
        return $request->customer;
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
        $existngCustomer = Customer::find( $id);

        if($existngCustomer){
            $existngCustomer->completed = $request->customer['completed'] ? true : false;
            $existngCustomer->completed_at = $request->customer['completed'] ? Carbon::now() : null;
            $existngCustomer->save();
            return $existngCustomer;
        }

        return "Customer Not Found";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

    }
}
