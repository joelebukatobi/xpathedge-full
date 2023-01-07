<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $services = Service::orderBy('created_at', 'asc')->get();
        $response = [
            'success' => true,
            'services' => $services,
        ];

        return response($response, 200);
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
        $request->validate(
            [
                'name' => 'required',
                'description' => 'required',
            ],
            [
                'title.required' => 'Please enter name of service',
                'description.required' => 'Please enter the description of the service',
            ]
        );

        $service = Service::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        $response = [
            'success' => true,
            'message' => 'Service added successfully',
            'service' => $service,

        ];

        return response($response, 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        //
        $service = Service::where(['slug' => $slug])->orderBy('created_at', 'asc')->firstOrFail();
        $response = [
            'success' => true,
            'service' => $service,
        ];

        return response($response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        //
        $request->validate(
            [
                'name' => 'required',
                'description' => 'required',
            ],
            [
                'title.required' => 'Please enter name of service',
                'description.required' => 'Please enter the description of the service',
            ]
        );

        $service = Service::where(['slug' => $slug])->firstOrFail();
        $edit = $request->all();
        $service->update($edit);

        $response = [
            'success' => true,
            'message' => 'Service updated successfully',
            'service' => $service,

        ];

        return response($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        //
        $service = Service::where(['slug' => $slug])->firstOrFail()->delete();
        $response = [
            'success' => true,
            'message' => 'Service deleted successfully',
        ];

        return response($response, 200);
    }
}