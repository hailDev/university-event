<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Userjoinedevent;



class UserController extends Controller
{
    public function index(){

    }

    public function show()
    {
        // $myEvents = $events::where('author', auth()->user()->email)->get();
        $userId = auth()->id();
         $joinedevent = DB::table('userjoinedevent')
        ->join('events', 'events.id', '=', 'userjoinedevent.event_id')
        ->join('users', 'users.id', '=', 'userjoinedevent.user_id')
        ->select('userjoinedevent.*', 'events.title as event_title', 'events.description as description', 'events.category', 'events.author', 'users.name as user_name', 'events.date as date', 'events.type as type')
        ->where('userjoinedevent.user_id', $userId)
        ->get();

    return Inertia::render('UserDashboard', [
        'joinedevent' => $joinedevent
    ]);
        
    }

    public function store(Request $request)
    {
        $joinedevent = new Userjoinedevent();
        $joinedevent->event_id = $request->id;
        $joinedevent->event_author = $request->event_author;
        $joinedevent->user_id = auth()->user()->id;
        $joinedevent->save();
        return redirect()->back()->with('message', 'Event has been created!');
        
    }
}
