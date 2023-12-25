<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use App\Http\Requests\Testimonial\IndexTestimonialRequest;
use App\Http\Requests\Testimonial\StoreTestimonialRequest;
use App\Http\Requests\Testimonial\UpdateTestimonialRequest;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexTestimonialRequest $request)
    {
        $testimonials = Testimonial::all();

        return Inertia::render('Testimonial/Index', [
            'title' => __('app.label.testimonials'),
            'testimonials' => $testimonials,
            'breadcrumbs' => [['label' => __('app.label.testimonial'), 'href' => route('testimonials.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $testimonials = Testimonial::all();
        return Inertia::render('Testimonial/Create', [
            'testimonials' => $testimonials,
            'title' => __('app.label.testimonial'),
            'breadcrumbs' => [['label' => __('app.label.testimonial'), 'href' => route('testimonials.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTestimonialRequest $request)
    {
        try {
            $testimonial = Testimonial::create([
                'name' => $request->name,
                'designation' => $request->designation,
                'company' => $request->company,
                'rating' => $request->rating,
                'description' => $request->description,
                'status' => $request->status,
            ]);
            return back()
                ->with('testimonial', $testimonial)
                ->with('success', __('app.label.created_successfully', ['name' => $testimonial->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.testimonial')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Testimonial $testimonial)
    {
        return Inertia::render('Testimonial/Show', [
            'title' => __('app.label.testimonial'),
            'testimonial' => $testimonial,
            'breadcrumbs' => [['label' => __('app.label.testimonial'), 'href' => route('testimonials.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Testimonial $testimonial)
    {
        return Inertia::render('Testimonial/Edit', [
            'title' => __('app.label.testimonial'),
            'testimonial' => $testimonial,
            'breadcrumbs' => [['label' => __('app.label.testimonial'), 'href' => route('testimonials.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTestimonialRequest $request, Testimonial $testimonial)
    {
        try {
            $testimonial->update([
                'name' => $request->name,
                'designation' => $request->designation,
                'company' => $request->company,
                'rating' => $request->rating,
                'description' => $request->description,
                'status' => $request->status,
            ]);
            return back()->with('success', __('app.label.updated_successfully', ['name' => $testimonial->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();
            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.testimonial')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $testimonials = Testimonial::onlyTrashed()->get();

        return Inertia::render('Testimonial/Trash', [
            'title' => __('app.label.testimonials'),
            'testimonials' => $testimonials,
            'breadcrumbs' => [['label' => __('app.label.testimonial'), 'href' => route('testimonials.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $testimonial->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($testimonial)
    {
        $testimonial = Testimonial::where('id', $testimonial)->onlyTrashed()->first();
        $testimonial->forceDelete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $testimonial->name]));
    }

     /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $testimonials = Testimonial::whereIn('id', $request->id);
            $testimonials->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.testimonials')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.testimonials')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $testimonials = Testimonial::whereIn('id', $request->id)->onlyTrashed();
            $testimonials->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.testimonial')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.testimonial')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $testimonials = Testimonial::onlyTrashed()->get();
            $count = count($testimonials);
            $testimonials->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.testimonials')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.testimonials')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($testimonial)
    {
        $testimonial = Testimonial::where('id', $testimonial)->onlyTrashed()->first();
        $testimonial->restore();
        return back()->with('success', __('app.label.restored_successfully', ['name' => $testimonial->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $testimonials = Testimonial::whereIn('id', $request->id)->onlyTrashed();
            $testimonials->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.testimonial')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.testimonial')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $testimonials = Testimonial::onlyTrashed();
            $testimonials->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.testimonial')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.testimonial')]).$th->getMessage());
        }
    }
}
