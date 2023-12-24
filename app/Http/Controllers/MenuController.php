<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Constants\Menu as MenuConstant;
use App\Http\Requests\Menu\IndexMenuRequest;
use App\Http\Requests\Menu\StoreMenuRequest;
use App\Http\Requests\Menu\UpdateMenuRequest;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexMenuRequest $request)
    {
        $menus = Menu::with('items')->get();

        return Inertia::render('Menu/Index', [
            'title' => __('app.label.menus'),
            'menus' => $menus,
            'positions' => MenuConstant::POSITIONS,
            'breadcrumbs' => [['label' => __('app.label.menu'), 'href' => route('menus.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Menu/Create', [
            'title' => __('app.label.menu'),
            'positions' => MenuConstant::POSITIONS,
            'breadcrumbs' => [['label' => __('app.label.menu'), 'href' => route('menus.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMenuRequest $request)
    {
        try {
            $menu = Menu::create([
                'name' => $request->name,
                'position' => $request->position,
                'status' => $request->status,
            ]);
            return back()
                ->with('menu', $menu)
                ->with('success', __('app.label.created_successfully', ['name' => $menu->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.menu')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        return Inertia::render('Menu/Show', [
            'title' => __('app.label.menu'),
            'menu' => $menu,
            'breadcrumbs' => [['label' => __('app.label.menu'), 'href' => route('menus.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        return Inertia::render('Menu/Edit', [
            'title' => __('app.label.menu'),
            'menu' => $menu,
            'positions' => MenuConstant::POSITIONS,
            'breadcrumbs' => [['label' => __('app.label.menu'), 'href' => route('menus.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMenuRequest $request, Menu $menu)
    {
        try {
            $menu->update([
                'name' => $request->name,
                'position' => $request->position,
                'status' => $request->status,
            ]);
            return back()->with('success', __('app.label.updated_successfully', ['name' => $menu->name]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.menu')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $menus = Menu::with('items')->onlyTrashed()->get();

        return Inertia::render('Menu/Trash', [
            'title' => __('app.label.menus'),
            'menus' => $menus,
            'breadcrumbs' => [['label' => __('app.label.menu'), 'href' => route('menus.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        $menu->delete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $menu->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($menu)
    {
        $menu = Menu::where('id', $menu)->withTrashed()->first();
        $menu->forceDelete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $menu->name]));
    }

     /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $menus = Menu::whereIn('id', $request->id);
            $menus->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.menus')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.menus')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $menus = Menu::whereIn('id', $request->id)->withTrashed();
            $menus->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.menu')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.menu')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $menus = Menu::withTrashed()->get();
            $count = count($menus);
            $menus->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.menus')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.menus')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($menu)
    {
        $menu = Menu::where('id', $menu)->withTrashed()->first();
        $menu->restore();
        return back()->with('success', __('app.label.restored_successfully', ['name' => $menu->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $menus = Menu::whereIn('id', $request->id)->withTrashed();
            $menus->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.menu')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.menu')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $menus = Menu::withTrashed();
            $menus->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.menu')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.menu')]).$th->getMessage());
        }
    }
}
