<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\Post\IndexPostRequest;
use App\Http\Requests\Post\StorePostRequest;
use App\Http\Requests\Post\UpdatePostRequest;

class PostController extends Controller
{
   /**
     * Display a listing of the resource.
     */
    public function index(IndexPostRequest $request)
    {
        $posts = Post::all();

        return Inertia::render('Post/Index', [
            'title' => __('app.label.posts'),
            'posts' => $posts,
            'breadcrumbs' => [['label' => __('app.label.post'), 'href' => route('posts.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $posts = Post::all();
        return Inertia::render('Post/Create', [
            'posts' => $posts,
            'title' => __('app.label.post'),
            'breadcrumbs' => [
                ['label' => __('app.label.post'), 'href' => route('posts.index')],
                ['label' => __('app.label.create'), 'href' => route('posts.create')],
            ],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        try {
            $post = Post::create([
                'name' => $request->name,
                'slug' => $request->slug,
                'content' => $request->content,
                'excerpt' => $request->excerpt,
                'password' => $request->password,
                'allow_comment' => $request->allow_comment,
                'is_featured' => $request->is_featured,
                'status' => $request->status,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keywords,
            ]);
            return back()
                ->with('page', $post)
                ->with('success', __('app.label.created_successfully', ['name' => $post->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.post')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('Post/Show', [
            'title' => __('app.label.post'),
            'page' => $post,
            'breadcrumbs' => [['label' => __('app.label.post'), 'href' => route('posts.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return Inertia::render('Post/Edit', [
            'title' => __('app.label.post'),
            'page' => $post,
            'breadcrumbs' => [['label' => __('app.label.post'), 'href' => route('posts.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        try {
            $post->update([
                'name' => $request->name,
                'slug' => $request->slug,
                'content' => $request->content,
                'excerpt' => $request->excerpt,
                'password' => $request->password,
                'allow_comment' => $request->allow_comment,
                'is_featured' => $request->is_featured,
                'status' => $request->status,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keywords,
            ]);
            return back()->with('success', __('app.label.updated_successfully', ['name' => $post->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();
            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.post')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $posts = Post::onlyTrashed()->get();

        return Inertia::render('Post/Trash', [
            'title' => __('app.label.posts'),
            'posts' => $posts,
            'breadcrumbs' => [['label' => __('app.label.post'), 'href' => route('posts.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $post->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($post)
    {
        $post = Post::where('id', $post)->onlyTrashed()->first();
        $post->forceDelete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $post->name]));
    }

     /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $posts = Post::whereIn('id', $request->id);
            $posts->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.posts')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.posts')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $posts = Post::whereIn('id', $request->id)->onlyTrashed();
            $posts->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.post')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.post')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $posts = Post::onlyTrashed()->get();
            $count = count($posts);
            $posts->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.posts')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.posts')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($post)
    {
        $post = Post::where('id', $post)->onlyTrashed()->first();
        $post->restore();
        return back()->with('success', __('app.label.restored_successfully', ['name' => $post->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $posts = Post::whereIn('id', $request->id)->onlyTrashed();
            $posts->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.post')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.post')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $posts = Post::onlyTrashed();
            $posts->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.post')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.post')]).$th->getMessage());
        }
    }
}
