<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Message;
use Illuminate\Http\Request;
use App\Http\Requests\Message\IndexMessageRequest;
use App\Http\Requests\Message\StoreMessageRequest;
use App\Http\Requests\Message\UpdateMessageRequest;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(IndexMessageRequest $request)
    {
        $messages = Message::all();

        return Inertia::render('Message/Index', [
            'title' => __('app.label.messages'),
            'messages' => $messages,
            'breadcrumbs' => [['label' => __('app.label.messages'), 'href' => route('messages.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $messages = Message::all();
        return Inertia::render('Message/Create', [
            'messages' => $messages,
            'title' => __('app.label.message'),
            'breadcrumbs' => [['label' => __('app.label.message'), 'href' => route('messages.index')]],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMessageRequest $request)
    {
        try {
            $message = Message::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'subject' => $request->subject,
                'message' => $request->message,
                'ip' => $request->ip,
            ]);
            return back()
                ->with('testimonial', $message)
                ->with('success', __('app.label.created_successfully', ['name' => $message->name]));
        } catch (\Throwable $th) {

            return back()->with('error', __('app.label.created_error', ['name' => __('app.label.message')]) . $th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Message $message)
    {
        return Inertia::render('Message/Show', [
            'title' => __('app.label.message'),
            'testimonial' => $message,
            'breadcrumbs' => [['label' => __('app.label.message'), 'href' => route('messages.index')]],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Message $message)
    {
        return Inertia::render('Message/Edit', [
            'title' => __('app.label.message'),
            'testimonial' => $message,
            'breadcrumbs' => [['label' => __('app.label.message'), 'href' => route('messages.index')]],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMessageRequest $request, Message $message)
    {
        try {
            $message->update([
                'status' => $request->status,
            ]);
            return back()->with('success', __('app.label.updated_successfully', ['name' => $message->name]));
        } catch (\Throwable $th) {
            return $th->getMessage();
            return back()->with('error', __('app.label.updated_error', ['name' => __('app.label.message')]) . $th->getMessage());
        }
    }

    public function trash()
    {
        $messages = Message::onlyTrashed()->get();

        return Inertia::render('Message/Trash', [
            'title' => __('app.label.messages'),
            'messages' => $messages,
            'breadcrumbs' => [['label' => __('app.label.message'), 'href' => route('messages.index')]],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        $message->delete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $message->name]));
    }

    /**
     * Parmanently delete the specified resource from storage.
     */
    public function destroyForce($message)
    {
        $message = Message::where('id', $message)->onlyTrashed()->first();
        $message->forceDelete();
        return back()->with('success', __('app.label.deleted_successfully', ['name' => $message->name]));
    }

    /**
     * Remove the specified resources from storage.
     */
    public function destroyBulk(Request $request)
    {
        try {
            $messages = Message::whereIn('id', $request->id);
            $messages->delete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => count($request->id) . ' ' . __('app.label.messages')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => count($request->id) . ' ' . __('app.label.messages')]) . $th->getMessage());
        }
    }

    public function destroyForceBulk(Request $request)
    {
        try {
            $messages = Message::whereIn('id', $request->id)->onlyTrashed();
            $messages->forceDelete();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id) . ' ' . __('app.label.message')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id) . ' ' . __('app.label.message')]) . $th->getMessage());
        }
    }

    public function destroyForceAll()
    {
        try {
            $messages = Message::onlyTrashed()->get();
            $count = count($messages);
            $messages->each->forceDelete();

            return back()->with('success', __('app.label.deleted_successfully', ['name' => $count . ' ' . __('app.label.messages')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.deleted_error', ['name' => $count . ' ' . __('app.label.messages')]) . $th->getMessage());
        }
    }

    /**
     * Restore the specified resource from storage.
     */
    public function restore($message)
    {
        $message = Message::where('id', $message)->onlyTrashed()->first();
        $message->restore();
        return back()->with('success', __('app.label.restored_successfully', ['name' => $message->name]));
    }

    public function restoreBulk(Request $request)
    {
        try {
            $messages = Message::whereIn('id', $request->id)->onlyTrashed();
            $messages->restore();

            return back()->with('success', __('app.label.restored_successfully', ['name' => count($request->id) . ' ' . __('app.label.message')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', ['name' => count($request->id) . ' ' . __('app.label.message')]) . $th->getMessage());
        }
    }

    public function restoreAll()
    {
        try {
            $messages = Message::onlyTrashed();
            $messages->restore();

            return back()->with('success', __('app.label.restored_successfully', [__('app.label.message')]));
        } catch (\Throwable $th) {
            return back()->with('error', __('app.label.restore_error', [__('app.label.message')]) . $th->getMessage());
        }
    }
}
