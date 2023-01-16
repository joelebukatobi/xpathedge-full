<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Career;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $positions = Career::orderBy('created_at', 'asc')->get();
        $response = [
            'success' => true,
            'positions' => $positions,
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
                'category' => 'required',
            ],
            [
                'title.required' => 'Please enter name of position',
                'description.required' => 'Please enter the description of the service',
                'category.required' => 'Please enter the category of the position',
            ]
        );

        $position = Career::create([
            'name' => $request->name,
            'description' => $request->description,
            'category' => $request->category,
        ]);

        $response = [
            'success' => true,
            'message' => 'Position added successfully',
            'position' => $position,

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
        $position = Career::where(['slug' => $slug])->orderBy('created_at', 'asc')->firstOrFail();
        $response = [
            'success' => true,
            'position' => $position,
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
                'category' => 'required',
            ],
            [
                'title.required' => 'Please enter name of position',
                'description.required' => 'Please enter the description of the service',
                'category.required' => 'Please enter the category of the position',
            ]
        );

        $position = Career::where(['slug' => $slug])->firstOrFail();
        $edit = $request->all();
        $position->update($edit);

        $response = [
            'success' => true,
            'message' => 'Position added successfully',
            'position' => $position,

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
        $position = Career::where(['slug' => $slug])->firstOrFail()->delete();
        $response = [
            'success' => true,
            'message' => 'Position deleted successfully',
        ];

        return response($response, 200);
    }
}