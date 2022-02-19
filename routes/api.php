<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/ping', function(){
    return [
        'pong' => true,
        'teste' => [1, 2, 3]
    ];
});

Route::post('/usuario', [ApiController::class, 'createUsuario']);
Route::get('/usuarios', [ApiController::class, 'readAllUsuarios']);
Route::get('/usuario/{id}', [ApiController::class, 'readUsuario']);
Route::put('/usuario/{id}', [ApiController::class, 'updateUsuario']);
Route::delete('/usuario/{id}', [ApiController::class, 'deleteUsuario']);