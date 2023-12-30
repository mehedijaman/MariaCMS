<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Page;
use App\Models\Post;
use Inertia\Inertia;
use App\Models\Setting;
use App\Models\Category;

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
        // $setting = Setting::first();
        return Inertia::render('Website/Contact', [
            'title' => __('app.label.contact'),
        ]);
    }

    public function blogPosts($slug = null)
    {
        $categories = Category::where('status', true)->get();
        if(is_null($slug))
        {
            $posts = Post::where('status', true)->orderBy('created_at', 'desc')->paginate(1);
            return Inertia::render('Website/Blog/Posts', [
                'title' => 'Blog',
                'categories' => $categories,
                'posts' => $posts
            ]);
        }

        $post = Post::where('slug', $slug)->where('status', true)->firstOrFail();
        return Inertia::render('Website/Blog/Post', [
            'post' => $post,
        ]);
    }

    public function blogCategoryPosts($slug)
    {
        $categories = Category::where('status', true)->get();
        $category = Category::where('slug', $slug)->where('status', true)->firstOrFail();
        $posts = Post::where('category_id', $category->id)->where('status', true)->orderBy('created_at', 'desc')->paginate(1);
        return Inertia::render('Website/Blog/Posts', [
            'title' => $category->name,
            'category' => $category,
            'categories' => $categories,
            'posts' => $posts
        ]);
    }

}
