<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Page;
use App\Models\Setting;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pages = Page::all();
        $categories = Category::all();
        $sliders = Slider::all();

        return Inertia::render('Setting', [
            'title' => __('app.label.setting'),
            'pages' => $pages,
            'categories' => $categories,
            'sliders' => $sliders,
            'setting' => Setting::first(),
            'breadcrumbs' => [
                ['label' => __('app.label.setting'), 'href' => route('setting.index')],
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Setting $setting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Setting $setting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Setting $setting)
    {
        try {
            if ($request->favicon != null) {
                Storage::delete('public/image/setting/' . $setting->favicon);
                $favicon = time() . '.' . $request->favicon->extension();
                Storage::put('public/image/setting/' . $favicon, File::get($request->favicon), 'public');
            } else {
                $favicon = $setting->favicon;
            }

            if ($request->logo != null) {
                Storage::delete('public/image/setting/' . $setting->logo);
                $logo = time() . '.' . $request->logo->extension();
                Storage::put('public/image/setting/' . $logo, File::get($request->logo), 'public');
            } else {
                $logo = $setting->logo;
            }

            if ($request->banner != null) {
                Storage::delete('public/image/setting/' . $setting->banner);
                $banner = time() . '.' . $request->banner->extension();
                Storage::put('public/image/setting/' . $banner, File::get($request->banner), 'public');
            } else {
                $banner = $setting->banner;
            }
            $setting->update([
                'logo' => $logo,
                'favicon' => $favicon,
                'banner' => $banner,
                'name' => $request->name,
                'short_name' => $request->short_name,
                'tagline' => $request->tagline,
                'description' => $request->description,
                'header' => $request->header,
                'footer' => $request->footer,
                'topbar_enabled' => $request->topbar_enabled,
                'banner_enabled' => $request->banner_enabled,
                'slider_enabled' => $request->slider_enabled,
                'hero_enabled' => $request->hero_enabled,
                'news_enabled' => $request->news_enabled,
                'event_enabled' => $request->event_enabled,
                'faq_enabled' => $request->faq_enabled,
                'feature_enabled' => $request->feature_enabled,
                'blog_enabled' => $request->blog_enabled,
                'testimonial_enabled' => $request->testimonial_enabled,
                'homepage' => $request->homepage,
                'home_slider' => $request->home_slider,
                'news_category' => $request->news_category,
                'event_category' => $request->event_category,
                'additional_css' => $request->additional_css,
                'topbar_color' => $request->topbar_color,
                'body_color' => $request->body_color,
                'footer_color' => $request->footer_color,
                'address' => $request->address,
                'google_map' => $request->google_map,
                'contact_no' => $request->contact_no,
                'email' => $request->email,
                'facebook' => $request->facebook,
                'twitter' => $request->twitter,
                'instagram' => $request->instagram,
                'youtube' => $request->youtube,
                'whatsapp' => $request->whatsapp,
            ]);

            return back();
        } catch (\Throwable $th) {
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Setting $setting)
    {
        //
    }
}
