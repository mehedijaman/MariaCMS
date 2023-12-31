<?php

namespace App\Http\Controllers;

use App\Http\Requests\Page\IndexPageRequest;
use App\Http\Requests\Page\StorePageRequest;
use App\Http\Requests\Page\UpdatePageRequest;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexPageRequest $request)
    {
        $pages = Page::all();

        return Inertia::render('Page/Index', [
            'title' => __('app.label.pages'),
            'pages' => $pages,
            'breadcrumbs' => [['label' => __('app.label.pages'), 'href' => route('pages.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $pages = Page::all();

        return Inertia::render('Page/Create', [
            'pages' => $pages,
            'title' => __('app.label.page'),
            'breadcrumbs' => [
                ['label' => __('app.label.pages'), 'href' => route('pages.index')],
                ['label' => __('app.label.create'), 'href' => route('pages.create')],
            ],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePageRequest $request)
    {
        try {
            $page = Page::create([
                'name' => $request->name,
                'slug' => $request->slug,
                'content' => $request->content,
                'excerpt' => $request->excerpt,
                'parent' => $request->parent,
                'password' => $request->password,
                'status' => $request->status,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keywords,
            ]);

            return redirect()->route('pages.edit', ['page' => $page->id])
                ->with('success', __('app.label.created_successfully', ['name' => $page->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.page')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        return Inertia::render('Page/Show', [
            'title' => __('app.label.page'),
            'page' => $page,
            'breadcrumbs' => [['label' => __('app.label.page'), 'href' => route('pages.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Page $page)
    {
        $pages = Page::all();

        return Inertia::render('Page/Edit', [
            'title' => __('app.label.page'),
            'page' => $page,
            'pages' => $pages,
            'breadcrumbs' => [
                ['label' => __('app.label.page'), 'href' => route('pages.index')],
                ['label' => __('app.label.edit'), 'href' => route('pages.edit', ['page' => $page->id])],
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePageRequest $request, Page $page)
    {
        try {
            $page->update([
                'name' => $request->name,
                'slug' => $request->slug,
                'content' => $request->content,
                'excerpt' => $request->excerpt,
                'parent' => $request->parent,
                'password' => $request->password,
                'status' => $request->status,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keywords,
            ]);

            return back()->with('success', __('app.label.updated_successfully', ['name' => $page->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();

            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.page')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $pages = Page::onlyTrashed()->get();

        return Inertia::render('Page/Trash', [
            'title' => __('app.label.pages'),
            'pages' => $pages,
            'breadcrumbs' => [
                ['label' => __('app.label.pages'), 'href' => route('pages.index')],
                ['label' => __('app.label.trash'), 'href' => route('pages.trash')],
            ],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {
        $page->delete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $page->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($page)
    {
        $page = Page::where('id', $page)->onlyTrashed()->first();
        $page->forceDelete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $page->name]));
    }

    /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $pages = Page::whereIn('id', $request->id);
            $pages->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.pages')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.pages')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $pages = Page::whereIn('id', $request->id)->onlyTrashed();
            $pages->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.page')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.page')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $pages = Page::onlyTrashed()->get();
            $count = count($pages);
            $pages->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.pages')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.pages')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($page)
    {
        $page = Page::where('id', $page)->onlyTrashed()->first();
        $page->restore();

        return back()->with('success', __('app.label.restored_successfully', ['name' => $page->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $pages = Page::whereIn('id', $request->id)->onlyTrashed();
            $pages->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.page')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.page')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $pages = Page::onlyTrashed();
            $pages->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.page')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.page')]).$th->getMessage());
        }
    }
}
