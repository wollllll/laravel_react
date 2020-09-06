<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function getAll()
    {
        $posts = Post::get();

        return response()->json([
            'posts' => $posts
        ]);
    }
}
