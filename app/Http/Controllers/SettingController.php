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
                Storage::delete('public/image/setting/'.$setting->favicon);
                $favicon = 'favicon.'.$request->favicon->extension();
                Storage::put('public/image/setting/'.$favicon, File::get($request->favicon), 'public');
            } else {
                $favicon = $setting->favicon;
            }

            if ($request->logo != null) {
                Storage::delete('public/image/setting/'.$setting->logo);
                $logo = 'logo.'.$request->logo->extension();
                Storage::put('public/image/setting/'.$logo, File::get($request->logo), 'public');
            } else {
                $logo = $setting->logo;
            }

            if ($request->banner != null) {
                Storage::delete('public/image/setting/'.$setting->banner);
                $banner = 'banner.'.$request->banner->extension();
                Storage::put('public/image/setting/'.$banner, File::get($request->banner), 'public');
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
                'header_message' => $request->header_message,
                'footer_message' => $request->footer_message,

                'is_topbar' => $request->is_topbar,
                'is_header_message' => $request->is_header_message,
                'is_footer_message' => $request->is_footer_message,
                'is_search' => $request->is_search,
                'is_language' => $request->is_language,
                'is_dark_mode' => $request->is_dark_mode,
                'is_banner' => $request->is_banner,
                'is_logo' => $request->is_logo,
                'is_name' => $request->is_name,
                'is_tagline' => $request->is_tagline,
                'is_phone' => $request->is_phone,
                'is_email' => $request->is_email,
                'is_slider' => $request->is_slider,
                'is_hero' => $request->is_hero,
                'is_homepage' => $request->is_homepage,
                'is_news' => $request->is_news,
                'is_event' => $request->is_event,
                'is_faq' => $request->is_faq,
                'is_feature' => $request->is_feature,
                'is_cta' => $request->is_cta,
                'is_blog' => $request->is_blog,
                'is_testimonial' => $request->is_testimonial,
                'is_product' => $request->is_product,
                'is_product_category' => $request->is_product_category,
                'is_clients' => $request->is_clients,
                'is_chat' => $request->is_chat,
                'is_video' => $request->is_video,

                'homepage' => $request->homepage,
                'home_slider' => $request->home_slider,
                'news_category' => $request->news_category,
                'event_category' => $request->event_category,
                'additional_css' => $request->additional_css,

                'topbar_background_color' => $request->topbar_background_color,
                'topbar_text_color' => $request->topbar_text_color,
                'banner_background_color' => $request->banner_background_color,
                'banner_text_color' => $request->banner_text_color,
                'navbar_background_color' => $request->navbar_background_color,
                'navbar_text_color' => $request->navbar_text_color,
                'body_background_color' => $request->body_background_color,
                'body_text_color' => $request->body_text_color,
                'footer_background_color' => $request->footer_background_color,
                'footer_text_color' => $request->footer_text_color,

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
            return back()->with('error', $th->getMessage());
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
