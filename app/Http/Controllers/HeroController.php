<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Hero\UpdateHeroRequest;

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
            if ($request->image != null) {
                Storage::delete('public/image/hero/' . $hero->image);
                $image = time() . '.' . $request->image->extension();
                Storage::put('public/image/hero/' . $image, File::get($request->image), 'public');
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

            return back();
        } catch (\Throwable $th) {
            return back();
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
