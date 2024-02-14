<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Requests\Order\IndexOrderRequest;
use App\Http\Requests\Order\StoreOrderRequest;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexOrderRequest $request)
    {
        $orders = Order::with('parent')->get();

        return Inertia::render('Order/Index', [
            'title' => __('app.label.orders'),
            'orders' => $orders,
            'breadcrumbs' => [['label' => __('app.label.order'), 'href' => route('orders.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $orders = Order::all();

        return Inertia::render('Order/Create', [
            'orders' => $orders,
            'title' => __('app.label.order'),
            'breadcrumbs' => [['label' => __('app.label.order'), 'href' => route('orders.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        try {
            $order = Order::create([
                'name' => $request->name,
                'slug' => $request->slug,
                'parent_id' => $request->parent_id,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            return back()
                ->with('success', __('app.label.created_successfully', ['name' => $order->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.order')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        return Inertia::render('Order/Show', [
            'title' => __('app.label.order'),
            'order' => $order,
            'breadcrumbs' => [['label' => __('app.label.order'), 'href' => route('orders.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        return Inertia::render('Order/Edit', [
            'title' => __('app.label.order'),
            'order' => $order,
            'breadcrumbs' => [['label' => __('app.label.order'), 'href' => route('orders.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        try {
            $order->update([
                'name' => $request->name,
                'slug' => $request->slug,
                'parent_id' => $request->parent_id,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            return back()->with('success', __('app.label.updated_successfully', ['name' => $order->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();

            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.order')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $orders = Order::onlyTrashed()->get();

        return Inertia::render('Order/Trash', [
            'title' => __('app.label.orders'),
            'orders' => $orders,
            'breadcrumbs' => [['label' => __('app.label.order'), 'href' => route('orders.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $order->delete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $order->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($order)
    {
        $order = Order::where('id', $order)->onlyTrashed()->first();
        $order->forceDelete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $order->name]));
    }

    /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $orders = Order::whereIn('id', $request->id);
            $orders->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.orders')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.orders')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $orders = Order::whereIn('id', $request->id)->onlyTrashed();
            $orders->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.order')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.order')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $orders = Order::onlyTrashed()->get();
            $count = count($orders);
            $orders->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.orders')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.orders')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($order)
    {
        $order = Order::where('id', $order)->onlyTrashed()->first();
        $order->restore();

        return back()->with('success', __('app.label.restored_successfully', ['name' => $order->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $orders = Order::whereIn('id', $request->id)->onlyTrashed();
            $orders->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.order')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.order')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $orders = Order::onlyTrashed();
            $orders->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.order')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.order')]).$th->getMessage());
        }
    }
}
