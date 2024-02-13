<?php

namespace App\Http\Controllers;

use App\Http\Requests\Post\IndexPostRequest;
use App\Http\Requests\Post\StorePostRequest;
use App\Http\Requests\Post\UpdatePostRequest;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexPostRequest $request)
    {
        $posts = Post::with('media')->get();

        return Inertia::render('Post/Index', [
            'title' => __('app.label.posts'),
            'posts' => $posts,
            'breadcrumbs' => [['label' => __('app.label.posts'), 'href' => route('posts.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();

        return Inertia::render('Post/Create', [
            'title' => __('app.label.posts'),
            'categories' => $categories,
            'breadcrumbs' => [
                ['label' => __('app.label.posts'), 'href' => route('posts.index')],
                ['label' => __('app.label.create'), 'href' => route('posts.create')],
            ],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        DB::beginTransaction();
        try {
            if ($request->excerpt) {
                $excerpt = $this->generateExcerpt($request->excerpt);
            } else {
                $excerpt = $this->generateExcerpt($request->content);
            }

            $post = Post::create([
                'name' => $request->name,
                'slug' => $request->slug,
                'content' => $request->content,
                'excerpt' => $excerpt,
                'password' => $request->password,
                'allow_comment' => $request->allow_comment,
                'is_featured' => $request->is_featured,
                'status' => $request->status,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keywords,
            ]);

            if ($request->hasFile('featured_image')) {
                $post->addMediaFromRequest('featured_image')->toMediaCollection('featured_image');
            }

            $post->save();

            $post->categories()->sync($request->categories);

            DB::commit();

            return redirect()->route('posts.edit', ['post' => $post->id])
                ->with('success', __('app.label.created_successfully', ['name' => $post->name]));
        } catch (\Throwable $th) {
            DB::rollBack();

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.post')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        $post->getMedia();

        return Inertia::render('Post/Show', [
            'title' => __('app.label.posts'),
            'page' => $post,
            'breadcrumbs' => [['label' => __('app.label.posts'), 'href' => route('posts.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        $categories = Category::all();
        $post->getMedia();

        $postCategories = $post->categories->pluck('id')->toArray();

        return Inertia::render('Post/Edit', [
            'title' => __('app.label.posts'),
            'post' => $post,
            'categories' => $categories,
            'postCategories' => $postCategories,
            'breadcrumbs' => [
                ['label' => __('app.label.posts'), 'href' => route('posts.index')],
                ['label' => __('app.label.edit'), 'href' => route('posts.edit', ['post' => $post->id])],
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        DB::beginTransaction();
        try {
            if ($request->excerpt) {
                $excerpt = $this->generateExcerpt($request->excerpt);
            } else {
                $excerpt = $this->generateExcerpt($request->content);
            }

            $post->update([
                'name' => $request->name,
                'slug' => $request->slug,
                'content' => $request->content,
                'excerpt' => $excerpt,
                'password' => $request->password,
                'allow_comment' => $request->allow_comment,
                'is_featured' => $request->is_featured,
                'status' => $request->status,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keywords,
            ]);

            if ($request->hasFile('featured_image')) {
                $post->clearMediaCollection('featured_image');
                $post->addMediaFromRequest('featured_image')->toMediaCollection('featured_image');
            }

            $post->categories()->sync($request->categories);
            DB::commit();

            return back()->with('success', __('app.label.updated_successfully', ['name' => $post->name]));
        } catch (\Throwable $th) {
            DB::rollBack();

            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.post')]).$th->getMessage());
        }
    }

    private function generateExcerpt($text)
    {
        // If $text is not null, use it; otherwise, use $request->content
        $textToUse = $text ?? '';

        // Strip HTML tags and get plain text
        $plainText = strip_tags($textToUse);

        // Extract the first 30 words
        $excerpt = Str::words($plainText, 100, '');

        return $excerpt;
    }

    public function trash()
    {
        $posts = Post::onlyTrashed()->get();

        return Inertia::render('Post/Trash', [
            'title' => __('app.label.posts'),
            'posts' => $posts,
            'breadcrumbs' => [['label' => __('app.label.posts'), 'href' => route('posts.index')]],
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
