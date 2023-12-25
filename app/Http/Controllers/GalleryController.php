<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Gallery;
use Illuminate\Http\Request;
use App\Http\Requests\Gallery\IndexGalleryRequest;
use App\Http\Requests\Gallery\StoreGalleryRequest;
use App\Http\Requests\Gallery\UpdateGalleryRequest;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexGalleryRequest $request)
    {
        $galleries = Gallery::all();

        return Inertia::render('Gallery/Index', [
            'title' => __('app.label.galleries'),
            'galleries' => $galleries,
            'breadcrumbs' => [['label' => __('app.label.gallery'), 'href' => route('galleries.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $galleries = Gallery::all();
        return Inertia::render('Gallery/Create', [
            'galleries' => $galleries,
            'title' => __('app.label.gallery'),
            'breadcrumbs' => [['label' => __('app.label.gallery'), 'href' => route('galleries.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGalleryRequest $request)
    {
        try {
            $gallery = Gallery::create([
                'name' => $request->name,
                'slug' => $request->slug,
                'description' => $request->description,
                'status' => $request->status,
            ]);
            return back()
                ->with('gallery', $gallery)
                ->with('success', __('app.label.created_successfully', ['name' => $gallery->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.gallery')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        return Inertia::render('Gallery/Show', [
            'title' => __('app.label.gallery'),
            'gallery' => $gallery,
            'breadcrumbs' => [['label' => __('app.label.gallery'), 'href' => route('galleries.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        return Inertia::render('Gallery/Edit', [
            'title' => __('app.label.gallery'),
            'gallery' => $gallery,
            'breadcrumbs' => [['label' => __('app.label.gallery'), 'href' => route('galleries.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGalleryRequest $request, Gallery $gallery)
    {
        try {
            $gallery->update([
                'name' => $request->name,
                'slug' => $request->slug,
                'description' => $request->description,
                'status' => $request->status,
            ]);
            return back()->with('success', __('app.label.updated_successfully', ['name' => $gallery->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();
            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.gallery')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $galleries = Gallery::onlyTrashed()->get();

        return Inertia::render('Gallery/Trash', [
            'title' => __('app.label.galleries'),
            'galleries' => $galleries,
            'breadcrumbs' => [['label' => __('app.label.gallery'), 'href' => route('galleries.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        $gallery->delete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $gallery->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($gallery)
    {
        $gallery = Gallery::where('id', $gallery)->onlyTrashed()->first();
        $gallery->forceDelete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $gallery->name]));
    }

     /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $galleries = Gallery::whereIn('id', $request->id);
            $galleries->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.galleries')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.galleries')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $galleries = Gallery::whereIn('id', $request->id)->onlyTrashed();
            $galleries->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.gallery')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.gallery')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $galleries = Gallery::onlyTrashed()->get();
            $count = count($galleries);
            $galleries->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.galleries')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.galleries')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($gallery)
    {
        $gallery = Gallery::where('id', $gallery)->onlyTrashed()->first();
        $gallery->restore();
        return back()->with('success', __('app.label.restored_successfully', ['name' => $gallery->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $galleries = Gallery::whereIn('id', $request->id)->onlyTrashed();
            $galleries->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.gallery')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.gallery')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $galleries = Gallery::onlyTrashed();
            $galleries->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.gallery')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.gallery')]).$th->getMessage());
        }
    }
}
