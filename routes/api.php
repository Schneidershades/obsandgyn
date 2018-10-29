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

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
        /**
         * Patient Routes
         */
        Route::get('/patients', 'PatientController@index');
        Route::get('/patient/{id}', 'PatientController@show');
        Route::post('/patient', 'PatientController@store');
        Route::put('/patient', 'PatientController@update');
        Route::delete('/patient', 'PatientController@destroy');

        /**
         * User Routes
         */
        Route::get('/user', 'UserController@authenticatedUser');
        Route::get('/users', 'UserController@index');
        Route::get('/user/{id}', 'UserController@show');
        Route::post('/user', 'UserController@store');
        Route::put('/user', 'UserController@update');
        Route::put('/user/{id}/changePassword', 'UserController@changeUserPassword');
        Route::delete('/user', 'UserController@destroy');
        /**
         * End User Routes
         */
});

Route::group(['prefix'=> 'v1'], function() {
    /**
     * User and Roles routes
     */
    Route::get(
      '/roles',
      'RoleController@index'
    );
    /**
     * end User x Roles routes
     */
});
