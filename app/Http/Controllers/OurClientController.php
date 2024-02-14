<?php

namespace App\Http\Controllers;

use App\Http\Requests\OurClient\IndexOurClientRequest;
use App\Http\Requests\OurClient\StoreOurClientRequest;
use App\Http\Requests\OurClient\UpdateOurClientRequest;
use App\Models\OurClient;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OurClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexOurClientRequest $request)
    {
        $clients = OurClient::with('media')->get();

        return Inertia::render('OurClient/Index', [
            'title' => __('app.label.clients'),
            'clients' => $clients,
            'breadcrumbs' => [['label' => __('app.label.client'), 'href' => route('clients.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $clients = OurClient::all();

        return Inertia::render('OurClient/Create', [
            'clients' => $clients,
            'title' => __('app.label.client'),
            'breadcrumbs' => [['label' => __('app.label.client'), 'href' => route('clients.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOurClientRequest $request)
    {
        try {
            $client = OurClient::create([
                'name' => $request->name,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            if ($request->hasFile('thumbnail')) {
                $client->addMediaFromRequest('thumbnail')->toMediaCollection('thumbnail');
            }

            return back()
                ->with('client', $client)
                ->with('success', __('app.label.created_successfully', ['name' => $client->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.client')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(OurClient $client)
    {
        $client->getFirstMedia();

        return Inertia::render('OurClient/Show', [
            'title' => __('app.label.client'),
            'client' => $client,
            'breadcrumbs' => [['label' => __('app.label.client'), 'href' => route('clients.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OurClient $client)
    {
        $client->getMedia();

        return Inertia::render('OurClient/Edit', [
            'title' => __('app.label.client'),
            'client' => $client,
            'breadcrumbs' => [['label' => __('app.label.client'), 'href' => route('clients.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOurClientRequest $request, OurClient $client)
    {
        try {
            $client->update([
                'name' => $request->name,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            if ($request->hasFile('thumbnail')) {
                $client->clearMediaCollection('thumbnail');
                $client->addMediaFromRequest('thumbnail')->toMediaCollection('thumbnail');
            }

            return back()->with('success', __('app.label.updated_successfully', ['name' => $client->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();

            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.client')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $clients = OurClient::onlyTrashed()->with('media')->get();

        return Inertia::render('OurClient/Trash', [
            'title' => __('app.label.clients'),
            'clients' => $clients,
            'breadcrumbs' => [['label' => __('app.label.client'), 'href' => route('clients.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OurClient $client)
    {
        $client->delete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $client->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($client)
    {
        $client = OurClient::where('id', $client)->onlyTrashed()->first();
        $client->forceDelete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $client->name]));
    }

    /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $clients = OurClient::whereIn('id', $request->id);
            $clients->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.clients')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.clients')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $clients = OurClient::whereIn('id', $request->id)->onlyTrashed();
            $clients->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.client')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.client')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $clients = OurClient::onlyTrashed()->get();
            $count = count($clients);
            $clients->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.clients')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.clients')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($client)
    {
        $client = OurClient::where('id', $client)->onlyTrashed()->first();
        $client->restore();

        return back()->with('success', __('app.label.restored_successfully', ['name' => $client->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $clients = OurClient::whereIn('id', $request->id)->onlyTrashed();
            $clients->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.client')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.client')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $clients = OurClient::onlyTrashed();
            $clients->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.client')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.client')]).$th->getMessage());
        }
    }
}
