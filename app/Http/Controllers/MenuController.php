<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Inertia\Inertia;
use App\Http\Requests\Menu\StoreMenuRequest;
use App\Http\Requests\Menu\UpdateMenuRequest;
use App\Http\Requests\Menu\IndexMenuRequest;
use App\Constants\Menu as MenuConstant;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexMenuRequest $request)
    {
        $menus = Menu::query();
        if ($request->has('search')) {
            $menus->where('name', 'LIKE', '%'.$request->search.'%');
        }
        if ($request->has(['field', 'order'])) {
            $menus->orderBy($request->field, $request->order);
        }
        $perPage = $request->has('perPage') ? $request->perPage : 10;
        // return $menus->with('items')->paginate($perPage);
        return Inertia::render('Menu/Index', [
            'title' => __('app.label.menus'),
            'filters' => $request->all(['search', 'field', 'order']),
            'perPage' => (int) $perPage,
            'menus' => $menus->with('items')->paginate($perPage)->onEachSide(0),
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
            return back()->with('success', __('app.label.created_successfully', ['name' => $menu->name]));
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
    public function destroyForce(Menu $menu)
    {
        $menu->forceDelete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $menu->name]));
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore(Menu $menu)
    {
        $menu->restore();
        return back()->with('success', __('app.label.restored_successfully', ['name' => $menu->name]));
    }
}
