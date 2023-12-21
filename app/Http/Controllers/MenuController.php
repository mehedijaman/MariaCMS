<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Inertia\Inertia;
use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;
use App\Http\Requests\Menu\IndexMenuRequest;

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

        return Inertia::render('Menu/Index', [
            'title' => __('app.label.menus'),
            'filters' => $request->all(['search', 'field', 'order']),
            'perPage' => (int) $perPage,
            'menus' => $menus->paginate($perPage)->onEachSide(0),
            'breadcrumbs' => [['label' => __('app.label.menu'), 'href' => route('menus.index')]],
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
    public function store(StoreMenuRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMenuRequest $request, Menu $menu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        //
    }
}
