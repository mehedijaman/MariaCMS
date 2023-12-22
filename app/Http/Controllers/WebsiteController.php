<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Page;
use App\Models\Menu;

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
        return Inertia::render('Website/Blog', [
            'title' => 'Blog',
        ]);
    }
}
