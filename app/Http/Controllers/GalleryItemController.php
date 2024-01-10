<?php

namespace App\Http\Controllers;

use App\Http\Requests\GalleryItem\IndexGalleryItemRequest;
use App\Http\Requests\GalleryItem\StoreGalleryItemRequest;
use App\Http\Requests\GalleryItem\UpdateGalleryItemRequest;
use App\Models\Gallery;
use App\Models\GalleryItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexGalleryItemRequest $request, Gallery $gallery)
    {
        $gallery_items = GalleryItem::where('gallery_id', $gallery->id)->with('media')->get();

        return Inertia::render('GalleryItem/Index', [
            'title' => __('app.label.gallery_items'),
            'gallery' => $gallery,
            'gallery_items' => $gallery_items,
            'breadcrumbs' => [
                ['label' => __('app.label.galleries'), 'href' => route('galleries.index')],
                ['label' => __('app.label.gallery_item'), 'href' => route('gallery.items.index', ['gallery' => $gallery->id])],
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Gallery $gallery)
    {
        $gallery_items = GalleryItem::all();

        return Inertia::render('GalleryItem/Create', [
            'gallery_items' => $gallery_items,
            'title' => __('app.label.gallery_item'),
            'breadcrumbs' => [['label' => __('app.label.gallery_item'), 'href' => route('gallery.items.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGalleryItemRequest $request, Gallery $gallery)
    {
        try {
            $gallery_item = GalleryItem::create([
                'gallery_id' => $gallery->id,
                'title' => $request->title,
                'description' => $request->description,
                'order' => $request->order,
                'status' => $request->status,
            ]);

            if ($request->hasFile('image')) {
                $gallery_item->addMediaFromRequest('image')->toMediaCollection('gallery_item');
            }

            return back()
                ->with('gallery_item', $gallery_item)
                ->with('success', __('app.label.created_successfully', ['name' => $gallery_item->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.gallery_item')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(GalleryItem $gallery_item)
    {
        return Inertia::render('GalleryItem/Show', [
            'title' => __('app.label.gallery_item'),
            'gallery_item' => $gallery_item,
            'breadcrumbs' => [['label' => __('app.label.gallery_item'), 'href' => route('gallery.items.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GalleryItem $gallery_item)
    {
        return Inertia::render('GalleryItem/Edit', [
            'title' => __('app.label.gallery_item'),
            'gallery_item' => $gallery_item,
            'breadcrumbs' => [['label' => __('app.label.gallery_item'), 'href' => route('gallery.items.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGalleryItemRequest $request, Gallery $gallery, GalleryItem $item)
    {
        try {
            $item->update([
                'gallery_id' => $gallery->id,
                'title' => $request->title,
                'description' => $request->description,
                'order' => $request->order,
                'status' => $request->status,
            ]);

            if ($request->hasFile('image')) {
                return 'File received';
                $item->clearMediaCollection('gallery_item');
                $item->addMediaFromRequest('image')->toMediaCollection('gallery_item');
            }

            return back()->with('success', __('app.label.updated_successfully', ['name' => $item->title]));
        } catch (\Throwable $th) {
            return $th->getMessage();

            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.gallery_item')]).$th->getMessage());
        }
    }

    public function trash(Gallery $gallery)
    {
        $gallery_items = GalleryItem::where('gallery_id', $gallery->id)->onlyTrashed()->get();

        return Inertia::render('GalleryItem/Trash', [
            'title' => __('app.label.gallery_items'),
            'gallery' => $gallery,
            'gallery_items' => $gallery_items,
            'breadcrumbs' => [['label' => __('app.label.gallery_item'), 'href' => route('gallery.items.index', ['gallery' => $gallery->id])]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery, GalleryItem $item)
    {
        $item->delete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $item->title]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce(Gallery $gallery, $gallery_item)
    {
        $gallery_item = GalleryItem::where('id', $gallery_item)->onlyTrashed()->first();
        $gallery_item->forceDelete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $gallery_item->name]));
    }

    /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Gallery $gallery, Request $request)
    {
        try {
            $items = GalleryItem::whereIn('id', $request->id);
            $items->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.gallery_items')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.gallery_items')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $gallery_items = GalleryItem::whereIn('id', $request->id)->onlyTrashed();
            $gallery_items->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.gallery_item')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.gallery_item')]).$th->getMessage());
        }
    }

    public function destroyForceAll(Gallery $gallery)
    {
        try {
            $gallery_items = GalleryItem::where('gallery_id', $gallery->id)->onlyTrashed()->get();
            $count = count($gallery_items);
            $gallery_items->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.gallery_items')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.gallery_items')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($gallery_item)
    {
        $gallery_item = GalleryItem::where('id', $gallery_item)->onlyTrashed()->first();
        $gallery_item->restore();

        return back()->with('success', __('app.label.restored_successfully', ['name' => $gallery_item->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $gallery_items = GalleryItem::whereIn('id', $request->id)->onlyTrashed();
            $gallery_items->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.gallery_item')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.gallery_item')]).$th->getMessage());
        }
    }

    public function restoreAll(Gallery $gallery)
    {
        try {
            $gallery_items = GalleryItem::where('gallery_id', $gallery->id)->onlyTrashed();
            $gallery_items->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.gallery_item')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.gallery_item')]).$th->getMessage());
        }
    }
}
