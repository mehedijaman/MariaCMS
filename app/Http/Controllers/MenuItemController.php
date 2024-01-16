<?php

namespace App\Http\Controllers;

use App\Http\Requests\MenuItem\StoreMenuItemRequest;
use App\Http\Requests\MenuItem\UpdateMenuItemRequest;
use App\Models\Category;
use App\Models\Menu;
use App\Models\MenuItem;
use App\Models\Page;
use Inertia\Inertia;

class MenuItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Menu $menu)
    {
        $pages = Page::all();
        $categories = Category::all();
        $items = MenuItem::where('menu_id', $menu->id)->get();

        return Inertia::render('MenuItem/Index', [
            'title' => __('app.label.menu_items'),
            'menu' => $menu,
            'items' => $items,
            'pages' => $pages,
            'categories' => $categories,
            'breadcrumbs' => [
                ['label' => __('app.label.menus'), 'href' => route('menus.index')],
                ['label' => $menu->name, 'href' => route('menu.items.index', ['menu' => $menu->id])],
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMenuItemRequest $request)
    {
        try {
            $item = MenuItem::create([
                'name' => $request->name,
                'menu_id' => $request->menu_id,
                'parent_id' => $request->parent_id,
                'order' => $request->order,
                'url' => $request->url,
                'target' => $request->target,
                'status' => $request->status,
            ]);

            return back()
                ->with('success', __('app.label.created_successfully', ['name' => $item->name]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.menu')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuItem $menuItem)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MenuItem $menuItem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMenuItemRequest $request, Menu $menu, MenuItem $item)
    {
        try {
            $item->update([
                'name' => $request->name,
                'menu_id' => $request->menu_id,
                'parent_id' => $request->parent_id,
                'order' => $request->order,
                'url' => $request->url,
                'target' => $request->target,
                'status' => $request->status,
            ]);

            return back()->with('success', __('app.label.updated_successfully', ['name' => $item->title]));
        } catch (\Throwable $th) {
            return $th->getMessage();

            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.gallery_item')]).$th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuItem $menuItem)
    {
        //
    }

    public function destroyForce(Menu $menu, $menu_item)
    {
        $menu_item = MenuItem::where('id', $menu_item)->withTrashed()->first();
        $menu_item->forceDelete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $menu_item->name]));
    }
}
