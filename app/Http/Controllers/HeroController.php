<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HeroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Hero/Index', [
            'title' => __('app.label.heroes'),
            'hero' => Hero::firstOrCreate(),
            'breadcrumbs' => [
                ['label' => __('app.label.heroes'), 'href' => route('heroes.index')],
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
    public function show(Hero $hero)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Hero $hero)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Hero $hero)
    {
        try {
            if ($request->hasFile('image')) {
                $oldImagePath = public_path('uploads/image/hero/' . $hero->image);

                // Delete the old image
                if (file_exists($oldImagePath)) {
                    unlink($oldImagePath);
                }

                // Save the new image
                $image = time() . '.' . $request->image->extension();
                $request->image->move(public_path('uploads/image/hero'), $image);
            } else {
                $image = $hero->image;
            }

            $hero->update([
                'image' => $image,
                'title' => $request->title,
                'description' => $request->description,
                'button_text' => $request->buttonText,
                'button_url' => $request->buttonURL,
                'button_target' => $request->buttonTarget,
            ]);

            return back()->with('success', __('app.label.updated_successfully', ['name' => __('app.label.heroes')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.heroes')]).$th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Hero $hero)
    {
        //
    }
}
