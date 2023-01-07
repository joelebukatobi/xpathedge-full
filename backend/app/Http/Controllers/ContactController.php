<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // $contact = Contact::orderBy('created_at', 'asc')->get();
        // $response = [
        //     'success' => true,
        //     'contact' => $contact,
        // ];

        // return response($response, 200);
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
        $request->validate(
            [
                'address' => 'required',
                'email' => 'required',
                'linkedin' => 'required',
                'twitter' => 'required',
                'facebook' => 'required',
                'instagram' => 'required',
                'behance' => 'required',
            ],
            [
                'address.required' => 'Please add an address',
                'email.required' => 'Please add an email address',
                'linkedin.required' => 'Please add a LinkedIn account',
                'twitter.required' => 'Please add a Twitter account',
                'facebook.required' => 'Please add a Facebook account',
                'instagram.required' => 'Please add an Instagram account',
                'behance.required' => 'Please add a Behance account',
            ]
        );

        $contact = Contact::create([
            'address' => $request->address,
            'email' => $request->email,
            'linkedin' => $request->linkedin,
            'twitter' => $request->twitter,
            'facebook' => $request->facebook,
            'instagram' => $request->instagram,
            'behance' => $request->behance,
        ]);

        $response = [
            'success' => true,
            'message' => 'Contact created successfully',
            'contact' => $contact,

        ];

        return response($response, 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $contact = Contact::where(['id' => $id])->orderBy('created_at', 'asc')->firstOrFail();
        $response = [
            'success' => true,
            'contact' => $contact,
        ];

        return response($response, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $request->validate(
            [
                'address' => 'required',
                'email' => 'required',
                'linkedin' => 'required',
                'twitter' => 'required',
                'facebook' => 'required',
                'instagram' => 'required',
                'behance' => 'required',
            ],
            [
                'address.required' => 'Please add an address',
                'email.required' => 'Please add an email address',
                'linkedin.required' => 'Please add a LinkedIn account',
                'twitter.required' => 'Please add a Twitter account',
                'facebook.required' => 'Please add a Facebook account',
                'instagram.required' => 'Please add an Instagram account',
                'behance.required' => 'Please add a Behance account',
            ]
        );



        $contact = Contact::where(['id' => $id])->firstOrFail();
        $edit = $request->all();
        $contact->update($edit);

        $response = [
            'success' => true,
            'message' => 'Contact updated successfully',
            'contact' => $contact,

        ];

        return response($response, 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}