<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\ImportantLink;
use Illuminate\Support\Facades\Request;
use App\Http\Requests\ImportantLink\IndexImportantLinkRequest;
use App\Http\Requests\ImportantLink\StoreImportantLinkRequest;
use App\Http\Requests\ImportantLink\UpdateImportantLinkRequest;

class ImportantLinkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexImportantLinkRequest $request)
    {
        $important_links = ImportantLink::all();

        return Inertia::render('ImportantLink/Index', [
            'title' => __('app.label.important_links'),
            'important_links' => $important_links,
            'breadcrumbs' => [['label' => __('app.label.important_link'), 'href' => route('important-links.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $important_links = ImportantLink::all();

        return Inertia::render('ImportantLink/Create', [
            'important_links' => $important_links,
            'title' => __('app.label.important_link'),
            'breadcrumbs' => [['label' => __('app.label.important_link'), 'href' => route('important-links.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreImportantLinkRequest $request)
    {
        try {
            $important_link = ImportantLink::create([
                'title' => $request->title,
                'url' => $request->url,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            return back()
                ->with('important_link', $important_link)
                ->with('success', __('app.label.created_successfully', ['name' => $important_link->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.important_link')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(ImportantLink $important_link)
    {
        return Inertia::render('ImportantLink/Show', [
            'title' => __('app.label.important_link'),
            'important_link' => $important_link,
            'breadcrumbs' => [['label' => __('app.label.important_link'), 'href' => route('important-links.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ImportantLink $important_link)
    {
        return Inertia::render('ImportantLink/Edit', [
            'title' => __('app.label.important_link'),
            'important_link' => $important_link,
            'breadcrumbs' => [['label' => __('app.label.important_link'), 'href' => route('important-links.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateImportantLinkRequest $request, ImportantLink $important_link)
    {
        try {
            $important_link->update([
                'title' => $request->title,
                'url' => $request->url,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            return back()->with('success', __('app.label.updated_successfully', ['name' => $important_link->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();

            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.important_link')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $important_links = ImportantLink::onlyTrashed()->get();

        return Inertia::render('ImportantLink/Trash', [
            'title' => __('app.label.important_links'),
            'important_links' => $important_links,
            'breadcrumbs' => [['label' => __('app.label.important_link'), 'href' => route('important-links.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ImportantLink $important_link)
    {
        $important_link->delete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $important_link->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($important_link)
    {
        $important_link = ImportantLink::where('id', $important_link)->onlyTrashed()->first();
        $important_link->forceDelete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $important_link->name]));
    }

    /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $important_links = ImportantLink::whereIn('id', $request->id);
            $important_links->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.important_links')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.important_links')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $important_links = ImportantLink::whereIn('id', $request->id)->onlyTrashed();
            $important_links->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.important_link')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.important_link')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $important_links = ImportantLink::onlyTrashed()->get();
            $count = count($important_links);
            $important_links->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.important_links')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.important_links')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($important_link)
    {
        $important_link = ImportantLink::where('id', $important_link)->onlyTrashed()->first();
        $important_link->restore();

        return back()->with('success', __('app.label.restored_successfully', ['name' => $important_link->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $important_links = ImportantLink::whereIn('id', $request->id)->onlyTrashed();
            $important_links->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.important_link')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.important_link')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $important_links = ImportantLink::onlyTrashed();
            $important_links->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.important_link')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.important_link')]).$th->getMessage());
        }
    }
}
