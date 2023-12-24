<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\Category\IndexCategoryRequest;
use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexCategoryRequest $request)
    {
        $categories = Category::all();

        return Inertia::render('Category/Index', [
            'title' => __('app.label.categories'),
            'categories' => $categories,
            'breadcrumbs' => [['label' => __('app.label.category'), 'href' => route('categories.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Category/Create', [
            'categories' => $categories,
            'title' => __('app.label.category'),
            'breadcrumbs' => [['label' => __('app.label.category'), 'href' => route('categories.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        try {
            $category = Category::create([
                'name' => $request->name,
                'slug' => $request->slug,
                'parent' => $request->parent,
                'description' => $request->description,
                'status' => $request->status,
            ]);
            return back()
                ->with('category', $category)
                ->with('success', __('app.label.created_successfully', ['name' => $category->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.category')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return Inertia::render('Category/Show', [
            'title' => __('app.label.category'),
            'category' => $category,
            'breadcrumbs' => [['label' => __('app.label.category'), 'href' => route('categories.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        return Inertia::render('Category/Edit', [
            'title' => __('app.label.category'),
            'category' => $category,
            'breadcrumbs' => [['label' => __('app.label.category'), 'href' => route('categories.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        try {
            $category->update([
                'name' => $request->name,
                'slug' => $request->slug,
                'parent' => $request->parent,
                'description' => $request->description,
                'status' => $request->status,
            ]);
            return back()->with('success', __('app.label.updated_successfully', ['name' => $category->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();
            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.category')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $categories = Category::onlyTrashed()->get();

        return Inertia::render('Category/Trash', [
            'title' => __('app.label.categories'),
            'categories' => $categories,
            'breadcrumbs' => [['label' => __('app.label.category'), 'href' => route('categories.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $category->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($category)
    {
        $category = Category::where('id', $category)->onlyTrashed()->first();
        $category->forceDelete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $category->name]));
    }

     /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $categories = Category::whereIn('id', $request->id);
            $categories->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.categories')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.categories')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $categories = Category::whereIn('id', $request->id)->onlyTrashed();
            $categories->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.category')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.category')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $categories = Category::onlyTrashed()->get();
            $count = count($categories);
            $categories->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.categories')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.categories')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($category)
    {
        $category = Category::where('id', $category)->onlyTrashed()->first();
        $category->restore();
        return back()->with('success', __('app.label.restored_successfully', ['name' => $category->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $categories = Category::whereIn('id', $request->id)->onlyTrashed();
            $categories->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.category')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.category')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $categories = Category::onlyTrashed();
            $categories->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.category')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.category')]).$th->getMessage());
        }
    }
}
