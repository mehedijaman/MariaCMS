<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\ProductCategory;
use App\Http\Requests\ProductCategory\IndexProductCategoryRequest;
use App\Http\Requests\ProductCategory\StoreProductCategoryRequest;
use App\Http\Requests\ProductCategory\UpdateProductCategoryRequest;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexProductCategoryRequest $request)
    {
        $product_categories = ProductCategory::with('parent')->get();

        return Inertia::render('ProductCategory/Index', [
            'title' => __('app.label.product_categories'),
            'product_categories' => $product_categories,
            'breadcrumbs' => [['label' => __('app.label.product_category'), 'href' => route('product-categories.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $product_categories = ProductCategory::with('parent')->get();

        return Inertia::render('ProductCategory/Create', [
            'product_categories' => $product_categories,
            'title' => __('app.label.product_category'),
            'breadcrumbs' => [['label' => __('app.label.product_category'), 'href' => route('product-categories.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductCategoryRequest $request)
    {
        try {
            $product_category = ProductCategory::create([
                'parent_id' => $request->parent_id,
                'slug' => $request->slug,
                'name' => $request->name,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            return back()
                ->with('success', __('app.label.created_successfully', ['name' => $product_category->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.product_category')]) . $th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductCategory $category)
    {
        return Inertia::render('ProductCategory/Show', [
            'title' => __('app.label.product_category'),
            'category' => $category,
            'breadcrumbs' => [['label' => __('app.label.product_category'), 'href' => route('product-categories.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProductCategory $category)
    {
        return Inertia::render('ProductCategory/Edit', [
            'title' => __('app.label.product_category'),
            'category' => $category,
            'breadcrumbs' => [['label' => __('app.label.product_category'), 'href' => route('product-categories.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductCategoryRequest $request, ProductCategory $product_category)
    {
        try {
            $product_category->update([
                'parent_id' => $request->parent_id,
                'slug' => $request->slug,
                'name' => $request->name,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            return back()->with('success', __('app.label.updated_successfully', ['name' => $product_category->name]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.product_category')]) . $th->getMessage());
        }
    }

    public function trash()
    {
        $product_categories = ProductCategory::onlyTrashed()->get();

        return Inertia::render('ProductCategory/Trash', [
            'title' => __('app.label.product_categories'),
            'product_categories' => $product_categories,
            'breadcrumbs' => [['label' => __('app.label.product_category'), 'href' => route('product-categories.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProductCategory $product_category)
    {
        $product_category->delete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $product_category->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($category)
    {
        $product_category = ProductCategory::where('id', $category)->onlyTrashed()->first();
        $product_category->forceDelete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $product_category->name]));
    }

    /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $product_categories = ProductCategory::whereIn('id', $request->id);
            $product_categories->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id) . ' ' . __('app.label.product_categories')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id) . ' ' . __('app.label.product_categories')]) . $th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $product_categories = ProductCategory::whereIn('id', $request->id)->onlyTrashed();
            $product_categories->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id) . ' ' . __('app.label.product_category')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id) . ' ' . __('app.label.product_category')]) . $th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $product_categories = ProductCategory::onlyTrashed()->get();
            $count = count($product_categories);
            $product_categories->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count . ' ' . __('app.label.product_categories')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count . ' ' . __('app.label.product_categories')]) . $th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($category)
    {
        $product_category = ProductCategory::where('id', $category)->onlyTrashed()->first();
        $product_category->restore();

        return back()->with('success', __('app.label.restored_successfully', ['name' => $product_category->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $product_categories = ProductCategory::whereIn('id', $request->id)->onlyTrashed();
            $product_categories->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id) . ' ' . __('app.label.product_category')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id) . ' ' . __('app.label.product_category')]) . $th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $product_categories = ProductCategory::onlyTrashed();
            $product_categories->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.product_category')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.product_category')]) . $th->getMessage());
        }
    }
}
