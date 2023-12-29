<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Inertia\Inertia;
use App\Models\MenuItem;
use App\Http\Requests\StoreMenuItemRequest;
use App\Http\Requests\UpdateMenuItemRequest;

class MenuItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Menu $menu)
    {
        $items = MenuItem::where('menu_id', $menu->id)->get();
        return Inertia::render('MenuItem/Index', [
            'title' => __('app.label.menu_items'),
            'menu' => $menu,
            'items' => $items,
            'breadcrumbs' => [
                ['label' => __('app.label.menus'), 'href' => route('menus.index')],
                ['label' => $menu->name, 'href' => route('menu.items.index', ['menu' => $menu->id])],
            ]
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
        //
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
