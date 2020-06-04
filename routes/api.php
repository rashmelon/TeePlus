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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::middleware('auth:api')->resource('users', 'UserController');

Route::post('login', 'LoginController@login');
Route::post('register', 'Auth\RegisterController@register');

Route::group(['prefix' => 'employee', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'EmployeeController@update');
    Route::get('{id}', 'EmployeeController@show');
    Route::delete('{id}', 'EmployeeController@destroy');
    Route::resource('', 'EmployeeController');
});

Route::group(['prefix' => 'role', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'RoleController@update');
    Route::get('{id}', 'RoleController@show');
    Route::delete('{id}', 'RoleController@destroy');
    Route::resource('', 'RoleController');
});

Route::middleware('auth:api')->get('permission', 'PermissionController@index');


Route::group(['prefix' => 'agency', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'AgencyController@update');
    Route::get('{id}', 'AgencyController@show');
    Route::delete('{id}', 'AgencyController@destroy');
    Route::resource('', 'AgencyController');
});

Route::group(['prefix' => 'package', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'PackageController@update');
    Route::get('{id}', 'PackageController@show');
    Route::delete('{id}', 'PackageController@destroy');
    Route::resource('', 'PackageController');
});

Route::group(['prefix' => 'booking', 'middleware' => 'auth:api'], function () {
    Route::post('restore/{id}', 'BookingController@restore');
    Route::post('{id}', 'BookingController@update');
    Route::get('{id}', 'BookingController@show');
    Route::delete('cancel/{id}', 'BookingController@cancel');
    Route::delete('{id}', 'BookingController@destroy');
    Route::resource('', 'BookingController');
});

Route::group(['prefix' => 'insurance', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'InsuranceController@update');
    Route::get('{id}', 'InsuranceController@show');
    Route::delete('{id}', 'InsuranceController@destroy');
    Route::resource('', 'InsuranceController');
});

Route::group(['prefix' => 'post'], function () {
    Route::get('', 'PostController@index');
    Route::get('{id}', 'PostController@show');
    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('', 'PostController@store');
        Route::post('{id}', 'PostController@update');
        Route::delete('{id}', 'PostController@destroy');
    });
});

Route::group(['prefix' => 'contact-us', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'ContactUsController@update');
    Route::get('{id}', 'ContactUsController@show');
    Route::delete('{id}', 'ContactUsController@destroy');
    Route::resource('', 'ContactUsController');
});

Route::group(['prefix' => 'custom-package', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'CustomPackageController@update');
    Route::get('{id}', 'CustomPackageController@show');
    Route::delete('{id}', 'CustomPackageController@destroy');
    Route::resource('', 'CustomPackageController');
});

Route::post('custom-package', 'CustomPackageController@store');

Route::group(['prefix' => 'customer', 'middleware' => 'auth:api'], function () {
    Route::group(['prefix' => 'like'], function () {
        Route::get('', 'UserLikesController@index');
        Route::post('', 'UserLikesController@store');
        Route::delete('{id}', 'UserLikesController@destroy');
    });
    Route::post('{id}', 'EmployeeController@update');
    Route::get('{id}', 'EmployeeController@show');
    Route::delete('{id}', 'EmployeeController@destroy');
});

Route::group(['prefix' => 'question', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'QuestionController@update');
    Route::get('{id}', 'QuestionController@show');
    Route::delete('{id}', 'QuestionController@destroy');
    Route::resource('', 'QuestionController');
});

Route::group(['prefix' => 'reply', 'middleware' => 'auth:api'], function () {
    Route::get('{id}', 'ReplyController@show');
    Route::delete('{id}', 'ReplyController@destroy');
    Route::resource('', 'ReplyController');
});

Route::group(['prefix' => 'renewal', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'RenewalController@update');
    Route::get('{id}', 'RenewalController@show');
    Route::delete('{id}', 'RenewalController@destroy');
    Route::resource('', 'RenewalController');
});

Route::group(['prefix' => 'notification', 'middleware' => 'auth:api'], function () {
    Route::get('', 'NotificationController@index');
    Route::post('mark-as-read', 'NotificationController@markAsRead');
});

Route::group(['prefix' => 'review', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'ReviewController@update');
    Route::get('{id}', 'ReviewController@show');
    Route::delete('{id}', 'ReviewController@destroy');
    Route::resource('', 'ReviewController');
});

Route::group(['prefix' => 'password'], function () {
    Route::post('reset', 'ApiPasswordResetController@sendVerificationEmail');
    Route::post('reset/confirm', 'ApiPasswordResetController@verifyCode');
    Route::post('set', 'ApiPasswordResetController@changePassword');
});


Route::middleware('auth:api')->get('food', 'FoodController@index');

Route::group(['prefix' => 'user', 'middleware' => 'auth:api'], function () {
    Route::get('', 'UserController@show');
    Route::put('', 'UserController@update');
});

Route::middleware('client')->get('city', 'CityController@index');

Route::middleware('client')->get('agency', 'AgencyController@index');

Route::middleware('client')->get('package', 'PackageController@index');

Route::middleware('client')->get('question', 'QuestionController@index');

Route::middleware('client')->get('review', 'ReviewController@index');
