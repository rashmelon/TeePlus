<?php

use Illuminate\Http\Request;

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

Route::post('login', 'LoginController@login');

Route::middleware('auth:api')->resource('user', 'UserController');
Route::middleware('auth:api')->post('user/{id}', 'UserController@update');

Route::middleware('auth:api')->resource('category', 'CategoryController');
Route::middleware('auth:api')->post('category/{id}', 'CategoryController@update');

Route::group(['prefix' => 'role', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'RoleController@update');
    Route::get('{id}', 'RoleController@show');
    Route::delete('{id}', 'RoleController@destroy');
    Route::resource('', 'RoleController');
});

Route::middleware('auth:api')->get('permission', 'PermissionController@index');

Route::group(['prefix' => 'notification', 'middleware' => 'auth:api'], function () {
    Route::get('', 'NotificationController@index');
    Route::post('mark-as-read', 'NotificationController@markAsRead');
});