<?php

namespace App\Http\Controllers;

use Storage;
use Illuminate\Http\Request;
use App\Models\Team;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        $members = Team::orderBy('created_at', 'asc')->get();
        $response = [
            'success' => true,
            'members' => $members,
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
                'image' => 'required',
                'title' => 'required',
            ],
            [
                'name.required' => 'Please enter name of the team member',
                'image.required' => 'Please enter the image of the team member',
                'title.required' => 'Please enter the title to the team member',
            ]
        );


        $filename = "";
        if ($request->file('image')) {
            $filename = $request->file('image')->store('images/teams', 'public');
        } else {
            $filename = "null";
        }

        $member = Team::create([
            'name' => $request->name,
            'title' => $request->title,
            'image' => $filename,
        ]);

        if ($request->has('tags')) {
            $member->tags()->attach($request->tags);
        }

        $response = [
            'success' => true,
            'message' => 'Member added successfully',
            'member' => $member,

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
        $member = Team::where(['slug' => $slug])->orderBy('created_at', 'asc')->firstOrFail();
        $response = [
            'success' => true,
            'member' => $member,
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
        //
        $request->validate(
            [
                'name' => 'required',
                'title' => 'required',
            ],
            [
                'name.required' => 'Please enter name of the team member',
                'title.required' => 'Please enter the title to the team member',
            ]
        );


        $member = Team::where(['slug' => $slug])->firstOrFail();
        $edit = $request->all();


        $filename = "";
        if ($request->file('new_image')) {
            if (Storage::disk('public')->exists($member->image)) {
                Storage::disk('public')->delete($member->image);
            }
            $filename = $request->file('new_image')->store('images/teams', 'public');
            $edit['image'] = $filename;
        } else {
            $filename = $member->image;
            $edit['image'] = $filename;
        }
        ;


        $member->update($edit);

        $response = [
            'success' => true,
            'message' => 'Member added successfully',
            'member' => $member,

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
        $member = Team::where(['slug' => $slug])->firstOrFail()->delete();
        $response = [
            'success' => true,
            'message' => 'Member deleted successfully',
        ];

        return response($response, 200);
    }
}