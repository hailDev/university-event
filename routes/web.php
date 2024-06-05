<?php
use App\Http\Middleware\AdminMiddleware;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [EventsController::class, 'index']);
Route::get('/eventlists', [EventsController::class, 'get_events'])->name('event.lists');
Route::get('/webinarlists', [EventsController::class, 'get_webinar'])->name('webinar.lists');
Route::get('/bemawalists', [EventsController::class, 'get_belmawa'])->name('belmawa.lists');
Route::get('/communitylists', [EventsController::class, 'get_community'])->name('community.lists');

// User access
Route::get('/joinedevent', [UserController::class, 'show'])->middleware(['auth', 'verified', 'user'])->name('joined.event');
Route::post('/joinevent', [UserController::class, 'store'])->middleware(['auth', 'verified', 'user'])->name('join.events');
Route::get('/events/eventinfo', [EventsController::class, 'show_eventinfo'])->middleware(['auth', 'verified', 'user'])->name('event.info');

// Admin access
Route::post('/events', [EventsController::class, 'store'])->middleware(['auth', 'verified', 'role'])->name('create.events');
Route::get('/events', [EventsController::class, 'show'])->middleware(['auth', 'verified','role'])->name('my.events');
Route::get('/event/registrar', [EventsController::class, 'show_eventRegistrar'])->middleware(['auth', 'verified','role'])->name('registrars.events');
Route::get('/events/edit', [EventsController::class, 'edit'])->middleware(['auth', 'verified', 'role'])->name('edit.events');
Route::post('/events/update', [EventsController::class, 'update'])->middleware(['auth', 'verified', 'role'])->name('update.events');
Route::post('/events/delete', [EventsController::class, 'destroy'])->middleware(['auth', 'verified', 'role'])->name('delete.events');
Route::post('/participant/delete', [EventsController::class, 'participant_destroy'])->middleware(['auth', 'verified', 'role'])->name('delete.participant');
Route::get('/exportexcel', [EventsController::class, 'exportexcel'])->middleware(['auth', 'verified', 'role'])->name('export.excel');

Route::get('/dasshboard', [EventsController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Auth::routes(['verify' => true]);

Route::get('/AdminDashboard', function () {
    return Inertia::render('AdminDashboard');
})->middleware(['auth', 'verified', 'role'])->name('admin.dashboard');

Route::get('/dashboard', function () {
    return Inertia::render('UserDashboard');
})->middleware(['auth', 'verified', 'user'])->name('user.dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/profile/inertia', [ProfileController::class, 'editInertia'])->name('profile.editInertia');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
require __DIR__.'/api.php';
