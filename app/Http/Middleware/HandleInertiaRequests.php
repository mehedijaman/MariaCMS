<?php

namespace App\Http\Middleware;

use App\Models\Menu;
use App\Models\ProductCategory;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $menus = Menu::where('status', true)->with('items.children.children.children')->get();
        return array_merge(parent::share($request), [
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'can' => $request->user() ? $request->user()->getPermissionArray() : [],
            'app' => [
                'name' => env('APP_NAME'),
                'version' => env('APP_VERSION'),
                'perpage' => [
                    ['label' => '5', 'value' => 5],
                    ['label' => '10', 'value' => 10],
                    ['label' => '20', 'value' => 20],
                    ['label' => '50', 'value' => 50],
                    ['label' => '100', 'value' => 100],
                ],
                'locale' => function () {
                    if (session()->has('locale')) {
                        app()->setLocale(session('locale'));
                    }

                    return app()->getLocale();
                },
                'language' => function () {
                    $lang = __('app');

                    return response()->json($lang);
                },
                'setting' => function () {
                    return Setting::first();
                },
            ],
            'menus' => function () use($menus) {
                return [
                    'primary' => $menus->where('position', 'primary')->first(),
                    'secondary' => $menus->where('position', 'secondary')->first(),
                    'footer' => $menus->where('position', 'footer')->first()
                ];
            },
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
                'warning' => fn () => $request->session()->get('warning'),
                'info' => fn () => $request->session()->get('info'),
            ],
        ]);
    }
}
