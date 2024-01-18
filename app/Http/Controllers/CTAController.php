<?php

namespace App\Http\Controllers;

use App\Models\CTA;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

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
    public function update(Request $request, $cta)
    {
        $cta = CTA::find($cta);
        try {
            if ($request->hasFile('image')) {
                $oldImagePath = asset('uploads/image/cta/' . $cta->image);

                // Delete the old image
                if (file_exists($oldImagePath)) {
                    unlink($oldImagePath);
                }

                // Save the new image
                $image = time() . '.' . $request->image->extension();
                $request->image->move(public_path('uploads/image/cta'), $image);
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

            return back()->with('success', __('app.label.updated_successfully', ['name' => __('app.label.cta')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.cta')]).$th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CTA $cta)
    {
        //
    }
}
