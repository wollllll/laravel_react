<?php

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

Route::get('/posts/getAll', 'Api\PostController@getAll');
Route::get('/posts/findBySlug', 'Api\PostController@findBySlug');
Route::get('/posts/search', 'Api\PostController@search');

