<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;

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

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::get('/ping', function(){
    return [
        'pong' => true
    ];
});

Route::get('/unauthenticated', function(){
    return ['error' => 'Usuário não logado!'];
})->name('login');

Route::post('/user', [AuthController::class, 'create']);
Route::middleware('auth:sanctum')->get('/auth/logout', [AuthController::class, 'logout']);
Route::post('/auth', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->post('/usuario', [ApiController::class, 'createUsuario']);
Route::middleware('auth:sanctum')->get('/usuarios', [ApiController::class, 'readAllUsuarios']);
Route::middleware('auth:sanctum')->get('/usuario/{id}', [ApiController::class, 'readUsuario']);
Route::middleware('auth:sanctum')->put('/usuario/{id}', [ApiController::class, 'updateUsuario']);
Route::middleware('auth:sanctum')->delete('/usuario/{id}', [ApiController::class, 'deleteUsuario']);