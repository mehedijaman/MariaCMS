<?php

namespace App\Http\Controllers;

use App\Http\Requests\Message\StoreMessageRequest;
use App\Models\Category;
use App\Models\Menu;
use App\Models\Message;
use App\Models\Page;
use App\Models\Post;
use App\Models\Setting;
use Inertia\Inertia;
use Spatie\Honeypot\Honeypot;

class WebsiteController extends Controller
{
    public function index($slug = null)
    {
        $menus = Menu::where('status', true)->get();

        if (is_null($slug)) {
            return Inertia::render('Website/Index', [
                'title' => 'Home',
            ]);
        }

        $page = Page::where('slug', $slug)->where('status', true)->firstOrFail();

        return Inertia::render('Website/Page', [
            'page' => $page,
        ]);

    }

    public function contact(Honeypot $honeypot)
    {
        // $setting = Setting::first();
        return Inertia::render('Website/Contact', [
            'honeypot' => $honeypot,
            'title' => __('app.label.contact'),
        ]);
    }

    public function contactPost(StoreMessageRequest $request)
    {
        try {
            $message = Message::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'subject' => $request->subject,
                'message' => $request->message,
                'ip' => $request->ip,
            ]);

            return back()
                ->with('message', $message)
                ->with('success', __('app.label.sent_successfully'));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.sent_error').$th->getMessage());
        }
    }

    public function blogPosts($slug = null)
    {
        $categories = Category::where('status', true)->get();
        if (is_null($slug)) {
            $posts = Post::where('status', true)->orderBy('created_at', 'desc')->paginate(10);

            return Inertia::render('Website/Blog/Posts', [
                'title' => 'Blog',
                'categories' => $categories,
                'posts' => $posts,
            ]);
        }

        $post = Post::where('slug', $slug)->where('status', true)->firstOrFail();

        return Inertia::render('Website/Blog/Post', [
            'post' => $post,
            'categories' => $categories,
        ]);
    }

    public function blogCategoryPosts($slug)
    {
        $categories = Category::where('status', true)->get();
        $category = Category::where('slug', $slug)->where('status', true)->firstOrFail();
        $posts = $category->posts()->paginate(10);

        return Inertia::render('Website/Blog/Posts', [
            'title' => $category->name,
            'category' => $category,
            'categories' => $categories,
            'posts' => $posts,
        ]);
    }
}
