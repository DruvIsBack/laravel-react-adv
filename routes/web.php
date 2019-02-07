<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


use Illuminate\Support\Facades\Route;

Route::get('/{all}', function () {
    return view('welcome');
})->where('all','.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


//APIS....
Route::prefix('api')->name("api-")->group(function () {

    //Check auth and get data...
    Route::post('auth-check', 'AccountController@AuthCheck')->name("auth-check");

    //Logout
    Route::post('logout', 'AccountController@logout')->name("logout");

    Route::middleware('has_role:guest')->prefix('account')->name("account-")->group(function () {

            //Registration...
            Route::post('registration', 'AccountController@createAccount')->name("register");

            //Login
            Route::post('login', 'AccountController@login')->name("login");

            //Recovery
            Route::post('recovery', 'AccountController@recovery')->name("recovery");
    });
});
