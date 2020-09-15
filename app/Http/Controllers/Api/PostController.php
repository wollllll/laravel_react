<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class PostController extends Controller
{
    public function getAll()
    {
        $posts = Post::get();

        return response()->json([
            'posts' => $posts
        ]);
    }

    public function findPost(Request $request)
    {
        $post = Post::find(Arr::get($request->all(), 'id'));

        return response()->json([
            'post' => $post
        ]);
    }
}
