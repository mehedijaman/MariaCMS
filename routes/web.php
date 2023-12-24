<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\PostCategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WebsiteController;
use App\Models\PostCategory;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('contact', [WebsiteController::class, 'contact'])->name('contact');
Route::get('blog/{slug?}', [WebsiteController::class, 'blog'])->name('blog');
Route::get('/{slug?}', [WebsiteController::class, 'index'])->name('index');



Route::get('/set-locale/{locale}', function ($locale) {
    Session::put('locale', $locale);

    return back();
})->name('set-locale');

Route::prefix('cp')->middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('pages', PageController::class);
    Route::resource('posts', PostController::class);
    Route::resource('comments', CommentController::class);

    /** Menus Routes */
    Route::get('menus/trash', [MenuController::class, 'trash'])->name('menus.trash');
    Route::resource('menus', MenuController::class);
    Route::delete('menus/destroy/bulk', [MenuController::class, 'destroyBulk'])->name('menus.destroy.bulk');
    Route::delete('menus/{menu}/destroy/force', [MenuController::class, 'destroyForce'])->name('menus.destroy.force');
    Route::delete('menus/destroy/force/bulk', [MenuController::class, 'destroyForceBulk'])->name('menus.destroy.force.bulk');
    Route::delete('menus/destroy/force/all', [MenuController::class, 'destroyForceAll'])->name('menus.destroy.force.all');
    Route::post('menus/{menu}/restore', [MenuController::class, 'restore'])->name('menus.restore');
    Route::post('menus/restore/bulk', [MenuController::class, 'restoreBulk'])->name('menus.restore.bulk');
    Route::post('menus/restore/all', [MenuController::class, 'restoreAll'])->name('menus.restore.all');

    /** Categories Routes */
    Route::get('categories/trash', [CategoryController::class, 'trash'])->name('categories.trash');
    Route::resource('categories', CategoryController::class);
    Route::delete('categories/destroy/bulk', [CategoryController::class, 'destroyBulk'])->name('categories.destroy.bulk');
    Route::delete('categories/{menu}/destroy/force', [CategoryController::class, 'destroyForce'])->name('categories.destroy.force');
    Route::delete('categories/destroy/force/bulk', [CategoryController::class, 'destroyForceBulk'])->name('categories.destroy.force.bulk');
    Route::delete('categories/destroy/force/all', [CategoryController::class, 'destroyForceAll'])->name('categories.destroy.force.all');
    Route::post('categories/{menu}/restore', [CategoryController::class, 'restore'])->name('categories.restore');
    Route::post('categories/restore/bulk', [CategoryController::class, 'restoreBulk'])->name('categories.restore.bulk');
    Route::post('categories/restore/all', [CategoryController::class, 'restoreAll'])->name('categories.restore.all');


    // Route::resource('menu-items', MenuItemController::class);
    Route::resource('galleries', GalleryController::class);
    Route::resource('sliders', SliderController::class);

    Route::group(['prefix' => 'user'], function(){
        Route::resource('/', UserController::class)
            ->except('create', 'show', 'edit')
            ->names([
                'index' => 'user.index',
                'store' => 'user.store',
                'update' => 'user.update',
                'destroy' => 'user.destroy',
            ]);
        Route::post('user/destroy-bulk', [UserController::class, 'destroyBulk'])->name('user.destroy-bulk');

        Route::resource('role', RoleController::class)->except('create', 'show', 'edit');
        Route::post('role/destroy-bulk', [RoleController::class, 'destroyBulk'])->name('role.destroy-bulk');

        Route::resource('permission', PermissionController::class)->except('create', 'show', 'edit');
        Route::post('permission/destroy-bulk', [PermissionController::class, 'destroyBulk'])->name('permission.destroy-bulk');

        Route::resource('activity', ActivityController::class)->except('create', 'show', 'edit', 'store', 'update');
        Route::post('activity/destroy-bulk', [ActivityController::class, 'destroyBulk'])->name('activity.destroy-bulk');
    });



    Route::resource('setting', SettingController::class)->except('create', 'store', 'show', 'edit', 'destory');

    require __DIR__.'/jarvis.php';
});
