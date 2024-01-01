<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Page;
use App\Models\Post;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\MenuItem;
use App\Http\Requests\MenuItem\StoreMenuItemRequest;
use App\Http\Requests\MenuItem\UpdateMenuItemRequest;

class MenuItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Menu $menu)
    {
        $pages = Page::all();
        $categories = Category::all();
        $posts = Post::all();
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
                'parent' => $request->parent,
                'order' => $request->order,
                'slug' => $request->slug,
                'url' => $request->url,
                'type' => $request->type,
                'target' => $request->target,
                'status' => $request->status,
            ]);

            return back()
                ->with('item', $item)
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
    public function update(UpdateMenuItemRequest $request, MenuItem $menuItem)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuItem $menuItem)
    {
        //
    }
}
