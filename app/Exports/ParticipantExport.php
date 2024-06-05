<?php

namespace App\Exports;

use App\Models\Userjoinedevent;
use App\Models\Events;
use App\Models\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Support\Facades\DB;

class ParticipantExport implements FromCollection
{
    protected $eventId; // Tambahkan properti untuk menyimpan eventId

    public function __construct($eventId)
    {
        $this->eventId = $eventId;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    // public function collection()
    // {
    //     return Userjoinedevent::all();
    // }

    public function collection()
    {
        $user = auth()->user(); // Mengambil objek User yang sedang masuk
        $eventAuthor = $user->email;
        
         $userjoinedevent = DB::table('userjoinedevent')
        ->join('events', 'events.id', '=', 'userjoinedevent.event_id')
        ->join('users', 'users.id', '=', 'userjoinedevent.user_id')
        // ->select('userjoinedevent.*', 'events.title as event_title', 'events.description', 'events.category', 'events.author', 'events.event_image', 'users.name as user_name', 'users.user_image', 'users.nim', 'users.email')
        ->select('users.name', 'users.nim' , 'users.email', 'userjoinedevent.created_at', 'userjoinedevent.updated_at')
        ->where('userjoinedevent.event_author', $eventAuthor)
        ->where('userjoinedevent.event_id', $this->eventId)
        ->get();

        return $userjoinedevent;
    }

    public function headings(): array
    {
        return [
            'id',
            'user_id',
            'event_id',
            'event_author',
            'created_date',
            'updated_date',
            
        ];
    }
}
