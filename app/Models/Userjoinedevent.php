<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Userjoinedevent extends Model
{
    use HasFactory;

     protected $table = 'userjoinedevent'; // Tentukan nama tabel yang sesuai di sini

    protected $fillable = ['event_id', 'user_id', 'event_author'];
}
