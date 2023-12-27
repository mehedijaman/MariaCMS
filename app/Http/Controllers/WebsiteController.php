<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Page;
use App\Models\Post;
use Inertia\Inertia;

class WebsiteController extends Controller
{
    public function index($slug = null)
    {
        $menus = Menu::where('status', true)->get();

        if(is_null($slug))
        {
            return Inertia::render('Website/Index', [
                'title' => 'Home',
            ]);
        }

        $page = Page::where('slug', $slug)->where('status', true)->firstOrFail();
        return Inertia::render('Website/Page', [
            'page' => $page,
        ]);

    }

    public function contact()
    {
        return Inertia::render('Website/Contact', [
            'title' => 'Contact',
        ]);
    }

    public function blog($slug = null)
    {
        if(is_null($slug))
        {
            $posts = Post::where('status', true)->orderBy('created_at', 'desc')->paginate(10);
            return Inertia::render('Website/Blog/Posts', [
                'title' => 'Blog',
                'posts' => $posts
            ]);
        }

        $post = Post::where('slug', $slug)->where('status', true)->firstOrFail();
        return Inertia::render('Website/Blog/Post', [
            'post' => $post,
        ]);
    }
}
