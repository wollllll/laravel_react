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

    public function findBySlug(Request $request)
    {
        $post = Post::firstWhere('slug', Arr::get($request->all(), 'slug'));

        return response()->json([
            'post' => $post
        ]);
    }

    public function search(Request $request)
    {
        $posts = Post::where('title', 'LIKE', '%' . Arr::get($request->all(), 'search') . '%')->get();

        return response()->json([
            'posts' => $posts
        ]);
    }
}
