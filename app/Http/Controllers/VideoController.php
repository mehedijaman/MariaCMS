<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Video;
use Illuminate\Http\Request;
use App\Http\Requests\Video\IndexVideoRequest;
use App\Http\Requests\Video\StoreVideoRequest;
use App\Http\Requests\Video\UpdateVideoRequest;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexVideoRequest $request)
    {
        $videos = Video::with('media')->get();

        return Inertia::render('Video/Index', [
            'title' => __('app.label.videos'),
            'videos' => $videos,
            'breadcrumbs' => [['label' => __('app.label.video'), 'href' => route('videos.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $videos = Video::all();

        return Inertia::render('Video/Create', [
            'videos' => $videos,
            'title' => __('app.label.video'),
            'breadcrumbs' => [['label' => __('app.label.video'), 'href' => route('videos.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVideoRequest $request)
    {
        try {
            $video = Video::create([
                'name' => $request->name,
                'url' => $request->url,
                'description' => $request->description,
                'is_featured' => $request->is_featured,
                'status' => $request->status,
            ]);

            if ($request->hasFile('thumbnail')) {
                $video->addMediaFromRequest('thumbnail')->toMediaCollection('thumbnail');
            }

            return back()->with('success', __('app.label.created_successfully', ['name' => $video->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.video')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Video $video)
    {
        $video->getFirstMedia();

        return Inertia::render('Video/Show', [
            'title' => __('app.label.video'),
            'video' => $video,
            'breadcrumbs' => [['label' => __('app.label.video'), 'href' => route('videos.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Video $video)
    {
        $video->getMedia();

        return Inertia::render('Video/Edit', [
            'title' => __('app.label.video'),
            'video' => $video,
            'breadcrumbs' => [['label' => __('app.label.video'), 'href' => route('videos.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVideoRequest $request, Video $video)
    {
        try {
            $video->update([
                'name' => $request->name,
                'url' => $request->url,
                'description' => $request->description,
                'is_featured' => $request->is_featured,
                'status' => $request->status,
            ]);

            if ($request->hasFile('thumbnail')) {
                $video->clearMediaCollection('thumbnail');
                $video->addMediaFromRequest('thumbnail')->toMediaCollection('thumbnail');
            }

            return back()->with('success', __('app.label.updated_successfully', ['name' => $video->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();

            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.video')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $videos = Video::onlyTrashed()->with('media')->get();

        return Inertia::render('Video/Trash', [
            'title' => __('app.label.videos'),
            'videos' => $videos,
            'breadcrumbs' => [['label' => __('app.label.video'), 'href' => route('videos.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Video $video)
    {
        $video->delete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $video->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($video)
    {
        $video = Video::where('id', $video)->onlyTrashed()->first();
        $video->forceDelete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $video->name]));
    }

    /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $videos = Video::whereIn('id', $request->id);
            $videos->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.videos')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.videos')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $videos = Video::whereIn('id', $request->id)->onlyTrashed();
            $videos->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.video')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.video')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $videos = Video::onlyTrashed()->get();
            $count = count($videos);
            $videos->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.videos')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.videos')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($video)
    {
        $video = Video::where('id', $video)->onlyTrashed()->first();
        $video->restore();

        return back()->with('success', __('app.label.restored_successfully', ['name' => $video->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $videos = Video::whereIn('id', $request->id)->onlyTrashed();
            $videos->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.video')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.video')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $videos = Video::onlyTrashed();
            $videos->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.video')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.video')]).$th->getMessage());
        }
    }
}
