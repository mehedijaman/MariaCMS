<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\ProductCategory;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\Product\IndexProductRequest;
use App\Http\Requests\Product\StoreProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;

class ProductController extends Controller
{
   /**
     * Display a listing of the resource.
     */
    public function index(IndexProductRequest $request)
    {
        $products = Product::with('category')->get();

        return Inertia::render('Product/Index', [
            'title' => __('app.label.products'),
            'products' => $products,
            'breadcrumbs' => [['label' => __('app.label.products'), 'href' => route('products.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = ProductCategory::all();

        return Inertia::render('Product/Create', [
            'title' => __('app.label.products'),
            'categories' => $categories,
            'breadcrumbs' => [
                ['label' => __('app.label.products'), 'href' => route('products.index')],
                ['label' => __('app.label.create'), 'href' => route('products.create')],
            ],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        DB::beginTransaction();
        try {
            $product = Product::create([
                'category_id' => $request->category_id,
                'slug' => $request->slug,
                'name' => $request->name,
                'description' => $request->description,
                'is_featured' => $request->is_featured,
                'status' => $request->status,
            ]);

            if ($request->hasFile('featured_image')) {
                $product->addMediaFromRequest('featured_image')->toMediaCollection('featured_image');
            }

            $product->save();

            DB::commit();

            return redirect()->route('products.edit', ['product' => $product->id])
                ->with('success', __('app.label.created_successfully', ['name' => $product->name]));
        } catch (\Throwable $th) {
            DB::rollBack();

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.post')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Product/Show', [
            'title' => __('app.label.products'),
            'page' => $product,
            'breadcrumbs' => [['label' => __('app.label.products'), 'href' => route('products.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $categories = ProductCategory::all();

        return Inertia::render('Product/Edit', [
            'title' => __('app.label.products'),
            'categories' => $categories,
            'breadcrumbs' => [
                ['label' => __('app.label.products'), 'href' => route('products.index')],
                ['label' => __('app.label.edit'), 'href' => route('products.edit', ['product' => $product->id])],
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        DB::beginTransaction();
        try {
            $product = Product::create([
                'category_id' => $request->category_id,
                'slug' => $request->slug,
                'name' => $request->name,
                'description' => $request->description,
                'is_featured' => $request->is_featured,
                'status' => $request->status,
            ]);

            DB::commit();

            return back()->with('success', __('app.label.updated_successfully', ['name' => $product->name]));
        } catch (\Throwable $th) {
            DB::rollBack();

            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.post')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $products = Product::onlyTrashed()->get();

        return Inertia::render('Product/Trash', [
            'title' => __('app.label.products'),
            'products' => $products,
            'breadcrumbs' => [['label' => __('app.label.products'), 'href' => route('products.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $product->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($product)
    {
        $product = Product::where('id', $product)->onlyTrashed()->first();
        $product->forceDelete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $product->name]));
    }

    /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $products = Product::whereIn('id', $request->id);
            $products->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.products')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.products')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $products = Product::whereIn('id', $request->id)->onlyTrashed();
            $products->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.post')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.post')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $products = Product::onlyTrashed()->get();
            $count = count($products);
            $products->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.products')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.products')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($product)
    {
        $product = Product::where('id', $product)->onlyTrashed()->first();
        $product->restore();

        return back()->with('success', __('app.label.restored_successfully', ['name' => $product->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $products = Product::whereIn('id', $request->id)->onlyTrashed();
            $products->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.post')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.post')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $products = Product::onlyTrashed();
            $products->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.post')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.post')]).$th->getMessage());
        }
    }
}
