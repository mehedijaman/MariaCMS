<?php

namespace App\Http\Controllers;

use App\Http\Requests\SliderItem\IndexSliderItemRequest;
use App\Http\Requests\SliderItem\StoreSliderItemRequest;
use App\Http\Requests\SliderItem\UpdateSliderItemRequest;
use App\Models\Slider;
use App\Models\SliderItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SliderItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexSliderItemRequest $request, Slider $slider)
    {
        $slider_items = SliderItem::where('slider_id', $slider->id)->with('media')->get();

        return Inertia::render('SliderItem/Index', [
            'title' => __('app.label.slider_items'),
            'slider' => $slider,
            'slider_items' => $slider_items,
            'breadcrumbs' => [
                ['label' => __('app.label.sliders'), 'href' => route('sliders.index')],
                ['label' => __('app.label.slider_item'), 'href' => route('slider.items.index', ['slider' => $slider->id])],
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Slider $slider)
    {
        $slider_items = SliderItem::all();

        return Inertia::render('SliderItem/Create', [
            'slider_items' => $slider_items,
            'title' => __('app.label.slider_item'),
            'breadcrumbs' => [['label' => __('app.label.slider_item'), 'href' => route('slider.items.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSliderItemRequest $request, Slider $slider)
    {
        try {
            $slider_item = SliderItem::create([
                'slider_id' => $slider->id,
                'title' => $request->title,
                'description' => $request->description,
                'order' => $request->order,
                'link' => $request->link,
                'target' => $request->target,
                'status' => $request->status,
            ]);

            if ($request->hasFile('image')) {
                $slider_item->addMediaFromRequest('image')->toMediaCollection('slider_item');
            }

            return back()
                ->with('slider_item', $slider_item)
                ->with('success', __('app.label.created_successfully', ['name' => $slider_item->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.slider_item')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(SliderItem $slider_item)
    {
        return Inertia::render('SliderItem/Show', [
            'title' => __('app.label.slider_item'),
            'slider_item' => $slider_item,
            'breadcrumbs' => [['label' => __('app.label.slider_item'), 'href' => route('slider.items.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SliderItem $slider_item)
    {
        return Inertia::render('SliderItem/Edit', [
            'title' => __('app.label.slider_item'),
            'slider_item' => $slider_item,
            'breadcrumbs' => [['label' => __('app.label.slider_item'), 'href' => route('slider.items.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSliderItemRequest $request, Slider $slider, SliderItem $item)
    {
        try {
            $item->update([
                'slider_id' => $slider->id,
                'title' => $request->title,
                'description' => $request->description,
                'order' => $request->order,
                'link' => $request->link,
                'target' => $request->target,
                'status' => $request->status,
            ]);

            if ($request->hasFile('image')) {
                return 'File received';
                $item->clearMediaCollection('slider_item');
                $item->addMediaFromRequest('image')->toMediaCollection('slider_item');
            }

            return back()->with('success', __('app.label.updated_successfully', ['name' => $item->title]));
        } catch (\Throwable $th) {
            return $th->getMessage();

            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.slider_item')]).$th->getMessage());
        }
    }

    public function trash(Slider $slider)
    {
        $slider_items = SliderItem::where('slider_id', $slider->id)->onlyTrashed()->get();

        return Inertia::render('SliderItem/Trash', [
            'title' => __('app.label.slider_items'),
            'slider' => $slider,
            'slider_items' => $slider_items,
            'breadcrumbs' => [['label' => __('app.label.slider_item'), 'href' => route('slider.items.index', ['slider' => $slider->id])]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Slider $slider, SliderItem $item)
    {
        $item->delete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $item->title]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce(Slider $slider, $slider_item)
    {
        $slider_item = SliderItem::where('id', $slider_item)->onlyTrashed()->first();
        $slider_item->forceDelete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $slider_item->name]));
    }

    /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Slider $slider, Request $request)
    {
        try {
            $items = SliderItem::whereIn('id', $request->id);
            $items->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.slider_items')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.slider_items')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $slider_items = SliderItem::whereIn('id', $request->id)->onlyTrashed();
            $slider_items->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.slider_item')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.slider_item')]).$th->getMessage());
        }
    }

    public function destroyForceAll(Slider $slider)
    {
        try {
            $slider_items = SliderItem::where('slider_id', $slider->id)->onlyTrashed()->get();
            $count = count($slider_items);
            $slider_items->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.slider_items')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.slider_items')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($slider_item)
    {
        $slider_item = SliderItem::where('id', $slider_item)->onlyTrashed()->first();
        $slider_item->restore();

        return back()->with('success', __('app.label.restored_successfully', ['name' => $slider_item->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $slider_items = SliderItem::whereIn('id', $request->id)->onlyTrashed();
            $slider_items->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.slider_item')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.slider_item')]).$th->getMessage());
        }
    }

    public function restoreAll(Slider $slider)
    {
        try {
            $slider_items = SliderItem::where('slider_id', $slider->id)->onlyTrashed();
            $slider_items->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.slider_item')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.slider_item')]).$th->getMessage());
        }
    }
}
