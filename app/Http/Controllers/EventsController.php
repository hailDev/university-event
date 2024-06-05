<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventsCollection;
use Inertia\Inertia;
use App\Models\Events;
use App\Models\Userjoinedevent;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use App\Exports\ParticipantExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Str;


class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $events = new EventsCollection(Events::OrderByDesc('id')->paginate(8));
        
        return Inertia::render('AdminHome', [
            'title' => "University Event",
            'description' => "Selamat datang di portal event universitas",
            'events' => $events
        ]);
    }

    // public function get_events(){
    //     $events = new EventsCollection(Events::OrderByDesc('id')->paginate(8));

    //     $user = auth()->user();
    //     $userRole = $user->role;
        
    //     return Inertia::render('Events', [
    //         'title' => "Event Lists",
    //         'description' => "Selamat datang di portal event universitas",
    //         'events' => $events
    //     ]);
    // }

    public function get_events(){
        $events = new EventsCollection(Events::OrderByDesc('id')->paginate(6));
            
        $user = auth()->user();

        // $userRole = $user->role;
        // $status = ($userRole === 'admin'|| $userRole === null) ? 'off' : 'on';

        if ($user) {
            $userRole = $user->role;
            $status = ($userRole === 'admin' || $userRole === null) ? 'off' : 'on';
        } else {
            // Jika tidak ada pengguna yang terautentikasi, atur status ke 'off'
            $status = 'off';
        }
        
        return Inertia::render('Events', [
            'title' => "Event Lists",
            'description' => "Selamat datang di portal event universitas",
            'events' => $events,
            'status' => $status,
        ]);
    }

    // get webinar
    public function get_webinar(){
        $events = new EventsCollection(Events::where('type', 'Webinar')->orderByDesc('id')->paginate(6));
            
        $user = auth()->user();

        // $userRole = $user->role;
        // $status = ($userRole === 'admin'|| $userRole === null) ? 'off' : 'on';

        if ($user) {
            $userRole = $user->role;
            $status = ($userRole === 'admin' || $userRole === null) ? 'off' : 'on';
        } else {
            // Jika tidak ada pengguna yang terautentikasi, atur status ke 'off'
            $status = 'off';
        }
        
        return Inertia::render('Webinar', [
            'title' => "Webinar Lists",
            'events' => $events,
            'status' => $status,
        ]);
    }

    // get belmawa
    public function get_belmawa(){
        $events = new EventsCollection(Events::where('type', 'Belmawa')->orderByDesc('id')->paginate(6));
            
        $user = auth()->user();

        // $userRole = $user->role;
        // $status = ($userRole === 'admin'|| $userRole === null) ? 'off' : 'on';

        if ($user) {
            $userRole = $user->role;
            $status = ($userRole === 'admin' || $userRole === null) ? 'off' : 'on';
        } else {
            // Jika tidak ada pengguna yang terautentikasi, atur status ke 'off'
            $status = 'off';
        }
        
        return Inertia::render('Webinar', [
            'title' => "Webinar Lists",
            'events' => $events,
            'status' => $status,
        ]);
    }

    // get community
    public function get_community(){
        $events = new EventsCollection(Events::where('type', 'Community')->orderByDesc('id')->paginate(6));
            
        $user = auth()->user();

        // $userRole = $user->role;
        // $status = ($userRole === 'admin'|| $userRole === null) ? 'off' : 'on';

        if ($user) {
            $userRole = $user->role;
            $status = ($userRole === 'admin' || $userRole === null) ? 'off' : 'on';
        } else {
            // Jika tidak ada pengguna yang terautentikasi, atur status ke 'off'
            $status = 'off';
        }
        
        return Inertia::render('Webinar', [
            'title' => "Webinar Lists",
            'events' => $events,
            'status' => $status,
        ]);
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
        
        // $request->validate([
        //     'title' => 'required',
        //     'description' => 'required',
        //     'category' => 'required',
        //     'image' => 'required|image|mimes:png,jpg|max:2040'
        // ]);

        $events = new Events();
        $events->title = $request->title;
        $events->description = $request->description;
        // $events->category = $request->category;
        $events->category = $request->category;
        $events->type = $request->type;
        $events->date = $request->date;
        $events->author = auth()->user()->email;

         if ($request->hasFile('image')) {
        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('build/assets/images-base/events'), $imageName);
        $events->event_image = '/build/assets/images-base/events/' . $imageName;
    }
        
        // $image = $request->image;
        // dd($request->image);
        // $image->move('uploads/events', $new_image);

        
        $events->save();
        return redirect()->back()->with('message', 'Event has been created!');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Events  $events
     * @return \Illuminate\Http\Response
     */
    public function show(Events $events)
    {
        $myEvents = $events::where('author', auth()->user()->email)->get();

        return Inertia::render('AdminDashboard', [
            'myEvents' => $myEvents
        ]);
        
    }

    public function show_eventinfo(Events $events, Userjoinedevent $userjoinedevent, Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;
        $eventId = $request->id;

        $userJoinedEvent = $userjoinedevent->where('user_id', $userId)
                                     ->where('event_id', $eventId)
                                     ->first();

        $isUserJoined = $userJoinedEvent ? 'on' : 'off';

        return Inertia::render('EventInfo', [
            'Eventsinfo' => $events->find($request->id),
            'isUserJoined' => $isUserJoined,
        ]);
        
    }

    public function show_eventRegistrar(Request $request)
    {
        $user = auth()->user(); // Mengambil objek User yang sedang masuk
        $eventAuthor = $user->email;
        $id = $request->input('id');
         $userjoinedevent = DB::table('userjoinedevent')
        ->join('events', 'events.id', '=', 'userjoinedevent.event_id')
        ->join('users', 'users.id', '=', 'userjoinedevent.user_id')
        ->select('userjoinedevent.*', 'events.title as event_title','events.id as event_id', 'events.description', 'events.category', 'events.author', 'events.event_image', 'users.name as user_name','events.type','events.category', 'users.user_image', 'users.nim', 'users.email')
        ->where('userjoinedevent.event_author', $eventAuthor)
        ->where('userjoinedevent.event_id', $id)
        ->get();

         $events_data = DB::table('events')
        ->select('events.*')
        ->where('events.id', $id) // Anda mungkin ingin menggunakan $id di sini
        ->get();

        return Inertia::render('EventRegistrars', [
            'eventRegistrars' => $userjoinedevent,
            'eventsData' => $events_data
        ]);
        
    }

    public function dashboard(Request $request)
    {

        $user = auth()->user();
        $role = $user->role;

        if ($user->role === 'admin') {
            return redirect()->intended(route('admin.dashboard'));
        } elseif ($user->role === 'user') {
            return redirect()->intended(route('user.dashboard'));
        }

        return redirect()->route('events.index');

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Events  $events
     * @return \Illuminate\Http\Response
     */
    public function edit(Events $events, Request $request)
    {
        
        return Inertia::render('EditEvents', [
            'myEvents' => $events->find($request->id)
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Events  $events
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // dd($request);
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('build/assets/images-base/events'), $imageName);
            $updatedImage = '/build/assets/images-base/events/' . $imageName;
        }else{
            $updatedImage = $request->image;
        }
        
        Events::where('id', $request->id)->update([
            
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'type' => $request->type,
            'date' => $request->date,
            'event_image' => $updatedImage,

        ]);
        return to_route('admin.dashboard');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Events  $events
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
       $events = Events::find($request->id);
       $events->delete();
       return redirect()->back()->with('message', 'Event has been deleted!');
    }

    public function participant_destroy(Request $request)
    {
       $events = Userjoinedevent::find($request->id);
       $events->delete();
       return redirect()->back()->with('message', 'Event has been deleted!');
    }

    // public function exportexcel(){
    //     return Excel::download(new ParticipantExport, 'ParticipantsData.xlsx');
    // }

    public function exportexcel(Request $request)
    {
        $eventId = $request->id;
        return Excel::download(new ParticipantExport($eventId), 'ParticipantsExportData.xlsx');
    }
}
