<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateTagRequest;
use App\Http\Requests\Tag\IndexTagRequest;
use App\Http\Requests\Tag\StoreTagRequest;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexTagRequest $request)
    {
        $tags = Tag::all();

        return Inertia::render('Tag/Index', [
            'title' => __('app.label.tags'),
            'tags' => $tags,
            'breadcrumbs' => [['label' => __('app.label.tag'), 'href' => route('tags.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tags = Tag::all();
        return Inertia::render('Tag/Create', [
            'tags' => $tags,
            'title' => __('app.label.tag'),
            'breadcrumbs' => [['label' => __('app.label.tag'), 'href' => route('tags.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTagRequest $request)
    {
        try {
            $tag = Tag::create([
                'name' => $request->name,
                'slug' => $request->slug,
                'description' => $request->description,
                'status' => $request->status,
            ]);
            return back()
                ->with('category', $tag)
                ->with('success', __('app.label.created_successfully', ['name' => $tag->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.tag')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Tag $tag)
    {
        return Inertia::render('Tag/Show', [
            'title' => __('app.label.tag'),
            'category' => $tag,
            'breadcrumbs' => [['label' => __('app.label.tag'), 'href' => route('tags.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tag $tag)
    {
        return Inertia::render('Tag/Edit', [
            'title' => __('app.label.tag'),
            'category' => $tag,
            'breadcrumbs' => [['label' => __('app.label.tag'), 'href' => route('tags.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTagRequest $request, Tag $tag)
    {
        try {
            $tag->update([
                'name' => $request->name,
                'slug' => $request->slug,
                'description' => $request->description,
                'status' => $request->status,
            ]);
            return back()->with('success', __('app.label.updated_successfully', ['name' => $tag->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();
            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.tag')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $tags = Tag::onlyTrashed()->get();

        return Inertia::render('Tag/Trash', [
            'title' => __('app.label.tags'),
            'tags' => $tags,
            'breadcrumbs' => [['label' => __('app.label.tag'), 'href' => route('tags.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag $tag)
    {
        $tag->delete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $tag->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($tag)
    {
        $tag = Tag::where('id', $tag)->onlyTrashed()->first();
        $tag->forceDelete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $tag->name]));
    }

     /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $tags = Tag::whereIn('id', $request->id);
            $tags->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.tags')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.tags')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $tags = Tag::whereIn('id', $request->id)->onlyTrashed();
            $tags->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.tag')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.tag')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $tags = Tag::onlyTrashed()->get();
            $count = count($tags);
            $tags->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.tags')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.tags')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($tag)
    {
        $tag = Tag::where('id', $tag)->onlyTrashed()->first();
        $tag->restore();
        return back()->with('success', __('app.label.restored_successfully', ['name' => $tag->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $tags = Tag::whereIn('id', $request->id)->onlyTrashed();
            $tags->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.tag')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.tag')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $tags = Tag::onlyTrashed();
            $tags->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.tag')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.tag')]).$th->getMessage());
        }
    }
}
