<?php

namespace App\Http\Controllers;

use App\Models\CTA;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class CTAController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('CTA/Index', [
            'title' => __('app.label.cta'),
            'cta' => CTA::firstOrCreate(),
            'breadcrumbs' => [
                ['label' => __('app.label.cta'), 'href' => route('cta.index')],
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
    public function show(CTA $cta)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CTA $cta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CTA $cta)
    {

        // try {
            if ($request->image != null) {
                Storage::delete('public/image/cta/' . $cta->image);
                $image = time() . '.' . $request->image->extension();
                Storage::put('public/image/cta/' . $image, File::get($request->image), 'public');
            } else {
                $image = $cta->image;
            }

            $cta->update([
                'image' => $image,
                'title' => $request->title,
                'description' => $request->description,
                'button_text' => $request->buttonText,
                'button_url' => $request->buttonURL,
                'button_target' => $request->buttonTarget,
            ]);

            return back();
        // } catch (\Throwable $th) {
        //     return back();
        // }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CTA $cta)
    {
        //
    }
}
