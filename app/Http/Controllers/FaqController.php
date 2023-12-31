<?php

namespace App\Http\Controllers;

use App\Http\Requests\Faq\IndexFaqRequest;
use App\Http\Requests\Faq\StoreFaqRequest;
use App\Http\Requests\Faq\UpdateFaqRequest;
use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexFaqRequest $request)
    {
        $faqs = Faq::all();

        return Inertia::render('Faq/Index', [
            'title' => __('app.label.faqs'),
            'faqs' => $faqs,
            'breadcrumbs' => [['label' => __('app.label.faq'), 'href' => route('faqs.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $faqs = Faq::all();

        return Inertia::render('Faq/Create', [
            'faqs' => $faqs,
            'title' => __('app.label.faq'),
            'breadcrumbs' => [['label' => __('app.label.faq'), 'href' => route('faqs.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFaqRequest $request)
    {
        try {
            $faq = Faq::create([
                'question' => $request->question,
                'answer' => $request->answer,
                'status' => $request->status,
            ]);

            return back()
                ->with('faq', $faq)
                ->with('success', __('app.label.created_successfully', ['name' => $faq->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.faq')]).$th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Faq $faq)
    {
        return Inertia::render('Faq/Show', [
            'title' => __('app.label.faq'),
            'faq' => $faq,
            'breadcrumbs' => [['label' => __('app.label.faq'), 'href' => route('faqs.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Faq $faq)
    {
        return Inertia::render('Faq/Edit', [
            'title' => __('app.label.faq'),
            'faq' => $faq,
            'breadcrumbs' => [['label' => __('app.label.faq'), 'href' => route('faqs.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFaqRequest $request, Faq $faq)
    {
        try {
            $faq->update([
                'question' => $request->question,
                'answer' => $request->answer,
                'status' => $request->status,
            ]);

            return back()->with('success', __('app.label.updated_successfully', ['name' => $faq->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();

            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.faq')]).$th->getMessage());
        }
    }

    public function trash()
    {
        $faqs = Faq::onlyTrashed()->get();

        return Inertia::render('Faq/Trash', [
            'title' => __('app.label.faqs'),
            'faqs' => $faqs,
            'breadcrumbs' => [['label' => __('app.label.faq'), 'href' => route('faqs.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Faq $faq)
    {
        $faq->delete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $faq->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($faq)
    {
        $faq = Faq::where('id', $faq)->onlyTrashed()->first();
        $faq->forceDelete();

        return back()->with('success', __('app.label.deleted_successfully', ['name' => $faq->name]));
    }

    /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $faqs = Faq::whereIn('id', $request->id);
            $faqs->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id).' '.__('app.label.faqs')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id).' '.__('app.label.faqs')]).$th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $faqs = Faq::whereIn('id', $request->id)->onlyTrashed();
            $faqs->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.faq')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.faq')]).$th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $faqs = Faq::onlyTrashed()->get();
            $count = count($faqs);
            $faqs->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count.' '.__('app.label.faqs')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count.' '.__('app.label.faqs')]).$th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($faq)
    {
        $faq = Faq::where('id', $faq)->onlyTrashed()->first();
        $faq->restore();

        return back()->with('success', __('app.label.restored_successfully', ['name' => $faq->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $faqs = Faq::whereIn('id', $request->id)->onlyTrashed();
            $faqs->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id).' '.__('app.label.faq')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id).' '.__('app.label.faq')]).$th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $faqs = Faq::onlyTrashed();
            $faqs->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.faq')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.faq')]).$th->getMessage());
        }
    }
}
