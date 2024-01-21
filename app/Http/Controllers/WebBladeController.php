<?php

namespace App\Http\Controllers;

use App\Models\CTA;
use App\Models\Faq;
use App\Models\Hero;
use App\Models\Menu;
use App\Models\Page;
use App\Models\Post;
use Inertia\Inertia;
use App\Models\Slider;
use App\Models\Gallery;
use App\Models\Message;
use App\Models\Product;
use App\Models\Setting;
use App\Models\Category;
use App\Models\Testimonial;
use Spatie\Honeypot\Honeypot;
use App\Models\ProductCategory;
use App\Http\Requests\Message\StoreMessageRequest;

class WebBladeController extends Controller
{
    public $menu;
    public $setting;

    public function __construct(){
        $this->menu = Menu::where('status', true)->with('items')->get();
        $this->setting = Setting::first();
    }
    public function index($slug = null)
    {
        $setting = $this->setting;
        $data = [];

        if (is_null($slug)) {
            if ($setting->slider_enabled) {
                $data['slider'] = Slider::where('id', $setting->home_slider)->with('items.media')->first();
            }

            if ($setting->hero_enabled) {
                $data['hero'] = Hero::first();
            }

            if ($setting->cta_enabled) {
                $data['cta'] = CTA::first();
            }

            if ($setting->homepage_enabled) {
                $data['homepage'] = Page::where('id', $setting->homepage)->first();
            }

            if ($setting->news_enabled) {
                //have to filter news_category
                $data['news'] = Post::where('status', true)->with('author', 'categories')->orderBy('created_at', 'desc')->limit(4)->get();
            }

            if ($setting->event_enabled) {
                // need to filter events category
                $data['events'] = Post::where('status', true)->with('author', 'categories')->orderBy('created_at', 'desc')->limit(4)->get();
            }

            if ($setting->faq_enabled) {
                $data['faqs'] = Faq::all();
            }

            if ($setting->featured_product_enabled) {
                $data['featured_products'] = Product::where('is_featured', true)->with('media')->limit(4)->get();
            }

            if ($setting->blog_enabled) {
                $data['latest_posts'] = Post::where('status', true)->with('author', 'categories')->orderBy('created_at', 'desc')->limit(4)->get();
            }

            if ($setting->testimonial_enabled) {
                $data['testimonials'] = Testimonial::with('media')->limit(4)->get();
            }

            // return Inertia::render('Website/Index', [
            //     'title' => 'Home',
            //     'data' => $data,
            // ]);

            return view('frontend.index', compact('data', 'setting'));
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
            return back()->with('error', __('app.label.sent_error').$th->getMessage());
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
        if (! is_null($slug)) {
            $gallery = Gallery::where('slug', $slug)->with('items.media')->firstOrFail();

            return Inertia::render('Website/Gallery', [
                'title' => $gallery->name,
                'gallery' => $gallery,
            ]);
        }

        $galleries = Gallery::with('media')->get();

        return Inertia::render('Website/GalleryList', [
            'title' => 'Gallery',
            'galleries' => $galleries,
        ]);
    }

    public function products($slug = null)
    {
        if (is_null($slug)) {
            $categories = ProductCategory::where('status', true)->withCount('products')->get();
            $products = Product::where('status', true)->with('media', 'category')->orderBy('created_at', 'desc')->paginate(10);

            return Inertia::render('Website/Product/Products', [
                'title' => 'Products',
                'categories' => $categories,
                'products' => $products,
            ]);
        }

        $product = Product::where('slug', $slug)->with('media', 'category')->where('status', true)->firstOrFail();

        return Inertia::render('Website/Product/ProductDetails', [
            'product' => $product
        ]);
    }

    public function categoryProducts($slug)
    {
        $categories = ProductCategory::where('status', true)->get();
        $category = ProductCategory::where('slug', $slug)
            ->where('status', true)
            ->firstOrFail();
        $products = $category->products()->with('media', 'category')->paginate(10);

        return Inertia::render('Website/Product/Products', [
            'title' => $category->name,
            'category' => $category,
            'categories' => $categories,
            'products' => $products,
        ]);
    }
}
