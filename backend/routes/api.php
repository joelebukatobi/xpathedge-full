<?php

use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::get('/products', [ProductController::class, 'index']);
// Route::post('/products', [ProductController::class, 'store']);
// Route::resource('products', ProductController::class);

// Public Routes
// ------------------------------------------------------------------------

// User 
Route::post('/register', [AuthController::class, 'register']); // Remember to delete in production!!!
// Authentication
Route::post('/login', [AuthController::class, 'login']);
// Category 
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{slug}', [CategoryController::class, 'show']);
// Tags
Route::get('/tags', [TagController::class, 'index']);
Route::get('/tags/{slug}', [TagController::class, 'show']);
// Posts
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{slug}', [PostController::class, 'show']);
// Subscription
Route::post('/subscriptions', [SubscriptionController::class, 'store']);
// Contact
Route::get('/contact/{id}', [ContactController::class, 'show']);
// Services
Route::get('/services', [ServiceController::class, 'index']);
// Careers
Route::get('/careers', [CareerController::class, 'index']);
// Projects
Route::get('/projects', [ProjectController::class, 'index']);
// Teams
Route::get('/teams', [TeamController::class, 'index']);

// Protected Routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    // User
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/me', [UserController::class, 'me']);
    Route::get('/users/{username}', [UserController::class, 'show']);
    Route::post('/users/register', [UserController::class, 'register']);
    Route::post('/users/{username}', [UserController::class, 'update']);
    Route::delete('/users/{username}', [UserController::class, 'destroy']);
    // Auth
    Route::post('/logout', [AuthController::class, 'logout']);
    // Categories
    Route::post('/categories', [CategoryController::class, 'store']);
    Route::put('/categories/{slug}', [CategoryController::class, 'update']);
    Route::delete('/categories/{slug}', [CategoryController::class, 'destroy']);
    // Tags
    Route::post('/tags', [TagController::class, 'store']);
    Route::put('/tags/{slug}', [TagController::class, 'update']);
    Route::delete('/tags/{slug}', [TagController::class, 'destroy']);
    // Posts
    Route::post('/posts', [PostController::class, 'store']);
    Route::post('/posts/{slug}', [PostController::class, 'update']);
    Route::delete('/posts/{slug}', [PostController::class, 'destroy']);
    // Subscription
    Route::get('/subscriptions', [SubscriptionController::class, 'index']);
    Route::delete('/subscriptions/{id}', [SubscriptionController::class, 'destroy']);
    // Contact
    Route::post('/contact', [ContactController::class, 'store']);
    Route::post('/contact/{id}', [ContactController::class, 'update']);
    // Services
    Route::get('/services/{slug}', [ServiceController::class, 'show']);
    Route::post('/services', [ServiceController::class, 'store']);
    Route::post('/services/{slug}', [ServiceController::class, 'update']);
    Route::delete('/services/{slug}', [ServiceController::class, 'destroy']);
    // Careers
    Route::get('/careers/{slug}', [CareerController::class, 'show']);
    Route::post('/careers', [CareerController::class, 'store']);
    Route::post('/careers/{slug}', [CareerController::class, 'update']);
    Route::delete('/careers/{slug}', [CareerController::class, 'destroy']);
    // Projects
    Route::get('/projects/{slug}', [ProjectController::class, 'show']);
    Route::post('/projects', [ProjectController::class, 'store']);
    Route::post('/projects/{slug}', [ProjectController::class, 'update']);
    Route::delete('/projects/{slug}', [ProjectController::class, 'destroy']);
    // Teams
    Route::get('/teams/{slug}', [TeamController::class, 'show']);
    Route::post('/teams', [TeamController::class, 'store']);
    Route::post('/teams/{slug}', [TeamController::class, 'update']);
    Route::delete('/teams/{slug}', [TeamController::class, 'destroy']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });