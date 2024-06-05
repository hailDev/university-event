<?php
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;



Route::middleware('auth', 'role')->group(function(){
    Route::get('/admin', [AdminController::class, 'index'])->name('admin.test');
});
