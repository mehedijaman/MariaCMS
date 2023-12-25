<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FaqController;
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
use App\Http\Controllers\TestimonialController;
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
    Route::delete('categories/{category}/destroy/force', [CategoryController::class, 'destroyForce'])->name('categories.destroy.force');
    Route::delete('categories/destroy/force/bulk', [CategoryController::class, 'destroyForceBulk'])->name('categories.destroy.force.bulk');
    Route::delete('categories/destroy/force/all', [CategoryController::class, 'destroyForceAll'])->name('categories.destroy.force.all');
    Route::post('categories/{category}/restore', [CategoryController::class, 'restore'])->name('categories.restore');
    Route::post('categories/restore/bulk', [CategoryController::class, 'restoreBulk'])->name('categories.restore.bulk');
    Route::post('categories/restore/all', [CategoryController::class, 'restoreAll'])->name('categories.restore.all');

    /** Galleries Routes */
    Route::get('galleries/trash', [GalleryController::class, 'trash'])->name('galleries.trash');
    Route::resource('galleries', GalleryController::class);
    Route::delete('galleries/destroy/bulk', [GalleryController::class, 'destroyBulk'])->name('galleries.destroy.bulk');
    Route::delete('galleries/{gallery}/destroy/force', [GalleryController::class, 'destroyForce'])->name('galleries.destroy.force');
    Route::delete('galleries/destroy/force/bulk', [GalleryController::class, 'destroyForceBulk'])->name('galleries.destroy.force.bulk');
    Route::delete('galleries/destroy/force/all', [GalleryController::class, 'destroyForceAll'])->name('galleries.destroy.force.all');
    Route::post('galleries/{gallery}/restore', [GalleryController::class, 'restore'])->name('galleries.restore');
    Route::post('galleries/restore/bulk', [GalleryController::class, 'restoreBulk'])->name('galleries.restore.bulk');
    Route::post('galleries/restore/all', [GalleryController::class, 'restoreAll'])->name('galleries.restore.all');

    /** Faq Routes */
    Route::get('faqs/trash', [FaqController::class, 'trash'])->name('faqs.trash');
    Route::resource('faqs', FaqController::class);
    Route::delete('faqs/destroy/bulk', [FaqController::class, 'destroyBulk'])->name('faqs.destroy.bulk');
    Route::delete('faqs/{faq}/destroy/force', [FaqController::class, 'destroyForce'])->name('faqs.destroy.force');
    Route::delete('faqs/destroy/force/bulk', [FaqController::class, 'destroyForceBulk'])->name('faqs.destroy.force.bulk');
    Route::delete('faqs/destroy/force/all', [FaqController::class, 'destroyForceAll'])->name('faqs.destroy.force.all');
    Route::post('faqs/{faq}/restore', [FaqController::class, 'restore'])->name('faqs.restore');
    Route::post('faqs/restore/bulk', [FaqController::class, 'restoreBulk'])->name('faqs.restore.bulk');
    Route::post('faqs/restore/all', [FaqController::class, 'restoreAll'])->name('faqs.restore.all');

    /** Slider Routes */
    Route::get('sliders/trash', [SliderController::class, 'trash'])->name('sliders.trash');
    Route::resource('sliders', SliderController::class);
    Route::delete('sliders/destroy/bulk', [SliderController::class, 'destroyBulk'])->name('sliders.destroy.bulk');
    Route::delete('sliders/{slider}/destroy/force', [SliderController::class, 'destroyForce'])->name('sliders.destroy.force');
    Route::delete('sliders/destroy/force/bulk', [SliderController::class, 'destroyForceBulk'])->name('sliders.destroy.force.bulk');
    Route::delete('sliders/destroy/force/all', [SliderController::class, 'destroyForceAll'])->name('sliders.destroy.force.all');
    Route::post('sliders/{slider}/restore', [SliderController::class, 'restore'])->name('sliders.restore');
    Route::post('sliders/restore/bulk', [SliderController::class, 'restoreBulk'])->name('sliders.restore.bulk');
    Route::post('sliders/restore/all', [SliderController::class, 'restoreAll'])->name('sliders.restore.all');

    /** Testimonial Routes */
    Route::get('testimonials/trash', [TestimonialController::class, 'trash'])->name('testimonials.trash');
    Route::resource('testimonials', TestimonialController::class);
    Route::delete('testimonials/destroy/bulk', [TestimonialController::class, 'destroyBulk'])->name('testimonials.destroy.bulk');
    Route::delete('testimonials/{slider}/destroy/force', [TestimonialController::class, 'destroyForce'])->name('testimonials.destroy.force');
    Route::delete('testimonials/destroy/force/bulk', [TestimonialController::class, 'destroyForceBulk'])->name('testimonials.destroy.force.bulk');
    Route::delete('testimonials/destroy/force/all', [TestimonialController::class, 'destroyForceAll'])->name('testimonials.destroy.force.all');
    Route::post('testimonials/{slider}/restore', [TestimonialController::class, 'restore'])->name('testimonials.restore');
    Route::post('testimonials/restore/bulk', [TestimonialController::class, 'restoreBulk'])->name('testimonials.restore.bulk');
    Route::post('testimonials/restore/all', [TestimonialController::class, 'restoreAll'])->name('testimonials.restore.all');


    /** Users Routes */
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
});
