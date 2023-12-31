<?php

namespace App\Http\Controllers;

use App\Http\Requests\Slider\IndexSliderRequest;
use App\Http\Requests\Slider\StoreSliderRequest;
use App\Http\Requests\Slider\UpdateSliderRequest;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexSliderRequest $request)
    {
        $sliders = Slider::all();

        return Inertia::render('Slider/Index', [
            'title' => __('app.label.sliders'),
            'sliders' => $sliders,
            'breadcrumbs' => [['label' => __('app.label.slider'), 'href' => route('sliders.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $sliders = Slider::all();

        return Inertia::render('Slider/Create', [
            'sliders' => $sliders,
            'title' => __('app.label.slider'),
            'breadcrumbs' => [['label' => __('app.label.slider'), 'href' => route('sliders.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSliderRequest $request)
    {
        try {
            $slider = Slider::create([
                'name' => $request->name,
                'slug' => $request->slug,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            return back()
                ->with('slider', $slider)
                ->with('success', __('app.label.created_successfully', ['name' => $slider->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.slider')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Slider $slider)
    {
        return Inertia::render('Slider/Show', [
            'title' => __('app.label.slider'),
            'slider' => $slider,
            'breadcrumbs' => [['label' => __('app.label.slider'), 'href' => route('sliders.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Slider $slider)
    {
        return Inertia::render('Slider/Edit', [
            'title' => __('app.label.slider'),
            'slider' => $slider,
            'breadcrumbs' => [['label' => __('app.label.slider'), 'href' => route('sliders.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSliderRequest $request, Slider $slider)
    {
        try {
            $slider->update([
                'name' => $request->name,
                'slug' => $request->slug,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            return back()->with('success', __('app.label.updated_successfully', ['name' => $slider->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();

            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.slider')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $sliders = Slider::onlyTrashed()->get();

        return Inertia::render('Slider/Trash', [
            'title' => __('app.label.sliders'),
            'sliders' => $sliders,
            'breadcrumbs' => [['label' => __('app.label.slider'), 'href' => route('sliders.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Slider $slider)
    {
        $slider->delete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $slider->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($slider)
    {
        $slider = Slider::where('id', $slider)->onlyTrashed()->first();
        $slider->forceDelete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $slider->name]));
    }

    /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $sliders = Slider::whereIn('id', $request->id);
            $sliders->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.sliders')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.sliders')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $sliders = Slider::whereIn('id', $request->id)->onlyTrashed();
            $sliders->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.slider')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.slider')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $sliders = Slider::onlyTrashed()->get();
            $count = count($sliders);
            $sliders->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.sliders')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.sliders')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($slider)
    {
        $slider = Slider::where('id', $slider)->onlyTrashed()->first();
        $slider->restore();

        return back()->with('success', __('app.label.restored_successfully', ['name' => $slider->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $sliders = Slider::whereIn('id', $request->id)->onlyTrashed();
            $sliders->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.slider')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.slider')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $sliders = Slider::onlyTrashed();
            $sliders->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.slider')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.slider')]).$th->getMessage());
        }
    }
}
