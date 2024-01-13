<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Models\Hero;
use App\Models\Menu;
use App\Models\Page;
use App\Models\Post;
use Inertia\Inertia;
use App\Models\Slider;
use App\Models\Gallery;
use App\Models\Message;
use App\Models\Setting;
use App\Models\Category;
use App\Models\Testimonial;
use Spatie\Honeypot\Honeypot;
use App\Http\Requests\Message\StoreMessageRequest;

class WebsiteController extends Controller
{
    public function index($slug = null)
    {
        $setting = Setting::first();

        $data = [
            'menus' => Menu::where('status', true)->get(),
        ];


        if (is_null($slug)) {
            if ($setting->slider_enabled) {
                $data['slider'] = Slider::where('id', $setting->home_slider)->with('items.media')->first();
            }

            if ($setting->hero_enabled) {
                $data['hero'] = Hero::first();
            }

            if($setting->homepage_enabled){
                $data['homepage'] = Page::where('id', $setting->homepage)->first();
            }

            if($setting->news_enabled){
                //have to filter news_category
                $data['news'] = Post::where('status', true)->with('author', 'categories')->orderBy('created_at', 'desc')->limit(4)->get();
            }

            if($setting->event_enabled){
                // need to filter events category
                $data['events'] = Post::where('status', true)->with('author', 'categories')->orderBy('created_at', 'desc')->limit(4)->get();
            }

            if($setting->faq_enabled){
                $data['faqs'] = Faq::all();
            }

            if($setting->feature_enabled){
                //
            }

            if($setting->blog_enabled){
                $data['latest_posts'] = Post::where('status', true)->with('author', 'categories')->orderBy('created_at', 'desc')->limit(4)->get();
            }

            if($setting->testimonial_enabled){
                $data['testimonials'] = Testimonial::with('media')->limit(4)->get();
            }

            return Inertia::render('Website/Index', [
                'title' => 'Home',
                'data' => $data
            ]);
        }

        $data['page'] = Page::where('slug', $slug)->where('status', true)->firstOrFail();

        return Inertia::render('Website/Page', [
            'data' => $data,
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
            return back()->with('error', __('app.label.sent_error') . $th->getMessage());
        }
    }

    public function blogPosts($slug = null)
    {
        $categories = Category::where('status', true)->get();
        if (is_null($slug)) {
            $posts = Post::where('status', true)->with('author', 'categories')->orderBy('created_at', 'desc')->paginate(10);

            return Inertia::render('Website/Blog/Posts', [
                'title' => 'Blog',
                'categories' => $categories,
                'posts' => $posts,
            ]);
        }

        $post = Post::where('slug', $slug)->with('author', 'categories')->where('status', true)->firstOrFail();

        return Inertia::render('Website/Blog/PostDetails', [
            'post' => $post,
            'categories' => $categories,
        ]);
    }

    public function blogCategoryPosts($slug)
    {
        $categories = Category::where('status', true)->get();
        $category = Category::where('slug', $slug)
            ->where('status', true)
            ->firstOrFail();
        $posts = $category->posts()->with('author', 'categories')->paginate(10);

        return Inertia::render('Website/Blog/Posts', [
            'title' => $category->name,
            'category' => $category,
            'categories' => $categories,
            'posts' => $posts,
        ]);
    }

    public function testimonials()
    {
        $testimonials = Testimonial::with('media')->get();

        return Inertia::render('Website/Testimonials', [
            'title' => 'Testimonials',
            'testimonials' => $testimonials,
        ]);
    }

    public function gallery($slug = null)
    {
        if (!is_null($slug)) {
            $gallery = Gallery::where('slug', $slug)->with('items.media')->firstOrFail();

            return Inertia::render('Website/Gallery', [
                'title' => $gallery->name,
                'gallery' => $gallery,
            ]);
        }

        $galleries = Gallery::all();

        return Inertia::render('Website/GalleryList', [
            'title' => 'Gallery',
            'galleries' => $galleries,
        ]);
    }
}
