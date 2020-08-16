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

Route::middleware('auth:api')->resource('price-combination', 'PriceCombinationController');
Route::middleware('auth:api')->post('price-combination/{priceCombination}', 'PriceCombinationController@update');

Route::middleware('auth:api')->resource('print-criteria', 'PrintCriteriaController');
Route::middleware('auth:api')->post('print-criteria/{print_criterion}', 'PrintCriteriaController@update');

Route::middleware('auth:api')->resource('product', 'ProductController');
Route::middleware('auth:api')->post('product/{product}', 'ProductController@update');

Route::middleware('auth:api')->post('user-product/{user}', 'UserProductController@update');

Route::middleware('auth:api')->resource('shipping-method', 'ShippingMethodController');
Route::middleware('auth:api')->post('shipping-method/{shipping_method}', 'ShippingMethodController@update');

Route::middleware('auth:api')->resource('city', 'CityController');

Route::middleware('auth:api')->resource('shipping-price', 'ShippingPriceController');
Route::middleware('auth:api')->post('shipping-price/{shipping_price}', 'ShippingPriceController@update');

Route::middleware('auth:api')->resource('status', 'StatusController');
Route::middleware('auth:api')->post('status/{status}', 'StatusController@update');

Route::middleware('auth:api')->resource('design', 'DesignController');
Route::middleware('auth:api')->post('design/{design}', 'DesignController@update');

Route::middleware('auth:api')->resource('design-print-price', 'DesignPrintPriceController');
Route::middleware('auth:api')->post('design-print-price/{design_print_price}', 'DesignPrintPriceController@update');

Route::middleware('auth:api')->resource('order', 'OrderController');
Route::middleware('auth:api')->post('order/{order}', 'OrderController@update');

Route::middleware('auth:api')->resource('order-product', 'OrderProductController');
Route::middleware('auth:api')->post('order-product/{order_product}', 'OrderProductController@update');

Route::middleware('auth:api')->resource('restored-item', 'RestoredItemController');

Route::middleware('auth:api')->resource('invoice', 'InvoiceController');

Route::middleware('auth:api')->resource('transaction', 'TransactionController');
Route::middleware('auth:api')->post('transaction/{transaction}', 'TransactionController@update');

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
