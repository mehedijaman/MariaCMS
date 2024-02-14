<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CTAController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\GalleryItemController;
use App\Http\Controllers\HeroController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\MenuItemController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OurClientController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\SliderItemController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoController;
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
require __DIR__.'/website.php';

/** Locale Routes */
Route::get('/set-locale/{locale}', function ($locale) {
    Session::put('locale', $locale);

    return back();
})->name('set-locale');

/** Locale Routes */
Route::get('/set-locale/{locale}', function ($locale) {
    Session::put('locale', $locale);

    return back();
})->name('set-locale');

/** Admin Panel Routes */
Route::prefix('cp')->middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    /** Dashboard Routes */
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    /** Menus Routes */
    Route::get('menus/trash', [MenuController::class, 'trash'])->name('menus.trash');
    Route::delete('menus/destroy/bulk', [MenuController::class, 'destroyBulk'])->name('menus.destroy.bulk');
    Route::delete('menus/{menu}/destroy/force', [MenuController::class, 'destroyForce'])->name('menus.destroy.force');
    Route::delete('menus/destroy/force/bulk', [MenuController::class, 'destroyForceBulk'])->name('menus.destroy.force.bulk');
    Route::delete('menus/destroy/force/all', [MenuController::class, 'destroyForceAll'])->name('menus.destroy.force.all');
    Route::post('menus/{menu}/restore', [MenuController::class, 'restore'])->name('menus.restore');
    Route::post('menus/restore/bulk', [MenuController::class, 'restoreBulk'])->name('menus.restore.bulk');
    Route::post('menus/restore/all', [MenuController::class, 'restoreAll'])->name('menus.restore.all');
    /** Menu Items Routes */
    Route::delete('menus/{menu}/items/{item}/destroy/force', [MenuItemController::class, 'destroyForce'])->name('menu.items.destroy.force');
    Route::delete('menus/{menu}/items/destroy/force/bulk', [MenuItemController::class, 'destroyForceBulk'])->name('menu.items.destroy.force.bulk');
    Route::resource('menus/{menu}/items', MenuItemController::class)
        ->names([
            'index' => 'menu.items.index',
            'create' => 'menu.items.create',
            'store' => 'menu.items.store',
            'show' => 'menu.items.show',
            'edit' => 'menu.items.edit',
            'update' => 'menu.items.update',
        ]);
    Route::resource('menus', MenuController::class);

    /** Categories Routes */
    Route::get('categories/trash', [CategoryController::class, 'trash'])->name('categories.trash');
    Route::delete('categories/destroy/bulk', [CategoryController::class, 'destroyBulk'])->name('categories.destroy.bulk');
    Route::delete('categories/{category}/destroy/force', [CategoryController::class, 'destroyForce'])->name('categories.destroy.force');
    Route::delete('categories/destroy/force/bulk', [CategoryController::class, 'destroyForceBulk'])->name('categories.destroy.force.bulk');
    Route::delete('categories/destroy/force/all', [CategoryController::class, 'destroyForceAll'])->name('categories.destroy.force.all');
    Route::post('categories/{category}/restore', [CategoryController::class, 'restore'])->name('categories.restore');
    Route::post('categories/restore/bulk', [CategoryController::class, 'restoreBulk'])->name('categories.restore.bulk');
    Route::post('categories/restore/all', [CategoryController::class, 'restoreAll'])->name('categories.restore.all');
    Route::resource('categories', CategoryController::class);

    /** Tags Routes */
    Route::get('tags/trash', [TagController::class, 'trash'])->name('tags.trash');
    Route::delete('tags/destroy/bulk', [TagController::class, 'destroyBulk'])->name('tags.destroy.bulk');
    Route::delete('tags/{tag}/destroy/force', [TagController::class, 'destroyForce'])->name('tags.destroy.force');
    Route::delete('tags/destroy/force/bulk', [TagController::class, 'destroyForceBulk'])->name('tags.destroy.force.bulk');
    Route::delete('tags/destroy/force/all', [TagController::class, 'destroyForceAll'])->name('tags.destroy.force.all');
    Route::post('tags/{tag}/restore', [TagController::class, 'restore'])->name('tags.restore');
    Route::post('tags/restore/bulk', [TagController::class, 'restoreBulk'])->name('tags.restore.bulk');
    Route::post('tags/restore/all', [TagController::class, 'restoreAll'])->name('tags.restore.all');
    Route::resource('tags', TagController::class);

    /** Galleries Routes */
    Route::get('galleries/trash', [GalleryController::class, 'trash'])->name('galleries.trash');
    Route::delete('galleries/destroy/bulk', [GalleryController::class, 'destroyBulk'])->name('galleries.destroy.bulk');
    Route::delete('galleries/{gallery}/destroy/force', [GalleryController::class, 'destroyForce'])->name('galleries.destroy.force');
    Route::delete('galleries/destroy/force/bulk', [GalleryController::class, 'destroyForceBulk'])->name('galleries.destroy.force.bulk');
    Route::delete('galleries/destroy/force/all', [GalleryController::class, 'destroyForceAll'])->name('galleries.destroy.force.all');
    Route::post('galleries/{gallery}/restore', [GalleryController::class, 'restore'])->name('galleries.restore');
    Route::post('galleries/restore/bulk', [GalleryController::class, 'restoreBulk'])->name('galleries.restore.bulk');
    Route::post('galleries/restore/all', [GalleryController::class, 'restoreAll'])->name('galleries.restore.all');

    /** Gallery Items Routes */
    Route::get('galleries/{gallery}/items/trash', [GalleryItemController::class, 'trash'])->name('gallery.items.trash');
    Route::delete('galleries/{gallery}/items/destroy/bulk', [GalleryItemController::class, 'destroyBulk'])->name('gallery.items.destroy.bulk');
    Route::delete('galleries/{gallery}/items/{item}/destroy/force', [GalleryItemController::class, 'destroyForce'])->name('gallery.items.destroy.force');
    Route::delete('galleries/{gallery}/items/destroy/force/bulk', [GalleryItemController::class, 'destroyForceBulk'])->name('gallery.items.destroy.force.bulk');
    Route::delete('galleries/{gallery}/items/destroy/force/all', [GalleryItemController::class, 'destroyForceAll'])->name('gallery.items.destroy.force.all');
    Route::post('galleries/{gallery}/items/{item}/restore', [GalleryItemController::class, 'restore'])->name('gallery.items.restore');
    Route::post('galleries/{gallery}/items/restore/bulk', [GalleryItemController::class, 'restoreBulk'])->name('gallery.items.restore.bulk');
    Route::post('galleries/{gallery}/items/restore/all', [GalleryItemController::class, 'restoreAll'])->name('gallery.items.restore.all');
    Route::resource('galleries/{gallery}/items', GalleryItemController::class)
        ->names([
            'index' => 'gallery.items.index',
            'create' => 'gallery.items.create',
            'store' => 'gallery.items.store',
            'show' => 'gallery.items.show',
            'edit' => 'gallery.items.edit',
            'update' => 'gallery.items.update',
            'destroy' => 'gallery.items.destroy',
        ]);
    Route::resource('galleries', GalleryController::class);

    /** Faq Routes */
    Route::get('faqs/trash', [FaqController::class, 'trash'])->name('faqs.trash');
    Route::delete('faqs/destroy/bulk', [FaqController::class, 'destroyBulk'])->name('faqs.destroy.bulk');
    Route::delete('faqs/{faq}/destroy/force', [FaqController::class, 'destroyForce'])->name('faqs.destroy.force');
    Route::delete('faqs/destroy/force/bulk', [FaqController::class, 'destroyForceBulk'])->name('faqs.destroy.force.bulk');
    Route::delete('faqs/destroy/force/all', [FaqController::class, 'destroyForceAll'])->name('faqs.destroy.force.all');
    Route::post('faqs/{faq}/restore', [FaqController::class, 'restore'])->name('faqs.restore');
    Route::post('faqs/restore/bulk', [FaqController::class, 'restoreBulk'])->name('faqs.restore.bulk');
    Route::post('faqs/restore/all', [FaqController::class, 'restoreAll'])->name('faqs.restore.all');
    Route::resource('faqs', FaqController::class);

    /** Slider Routes */
    Route::get('sliders/trash', [SliderController::class, 'trash'])->name('sliders.trash');
    Route::delete('sliders/destroy/bulk', [SliderController::class, 'destroyBulk'])->name('sliders.destroy.bulk');
    Route::delete('sliders/{slider}/destroy/force', [SliderController::class, 'destroyForce'])->name('sliders.destroy.force');
    Route::delete('sliders/destroy/force/bulk', [SliderController::class, 'destroyForceBulk'])->name('sliders.destroy.force.bulk');
    Route::delete('sliders/destroy/force/all', [SliderController::class, 'destroyForceAll'])->name('sliders.destroy.force.all');
    Route::post('sliders/{slider}/restore', [SliderController::class, 'restore'])->name('sliders.restore');
    Route::post('sliders/restore/bulk', [SliderController::class, 'restoreBulk'])->name('sliders.restore.bulk');
    Route::post('sliders/restore/all', [SliderController::class, 'restoreAll'])->name('sliders.restore.all');
    /** Slider Items Routes */
    Route::get('sliders/{slider}/items/trash', [SliderItemController::class, 'trash'])->name('slider.items.trash');
    Route::delete('sliders/{slider}/items/destroy/bulk', [SliderItemController::class, 'destroyBulk'])->name('slider.items.destroy.bulk');
    Route::delete('sliders/{slider}/items/{item}/destroy/force', [SliderItemController::class, 'destroyForce'])->name('slider.items.destroy.force');
    Route::delete('sliders/{slider}/items/destroy/force/bulk', [SliderItemController::class, 'destroyForceBulk'])->name('slider.items.destroy.force.bulk');
    Route::delete('sliders/{slider}/items/destroy/force/all', [SliderItemController::class, 'destroyForceAll'])->name('slider.items.destroy.force.all');
    Route::post('sliders/{slider}/items/{item}/restore', [SliderItemController::class, 'restore'])->name('slider.items.restore');
    Route::post('sliders/{slider}/items/restore/bulk', [SliderItemController::class, 'restoreBulk'])->name('slider.items.restore.bulk');
    Route::post('sliders/{slider}/items/restore/all', [SliderItemController::class, 'restoreAll'])->name('slider.items.restore.all');
    Route::resource('sliders/{slider}/items', SliderItemController::class)
        ->names([
            'index' => 'slider.items.index',
            'create' => 'slider.items.create',
            'store' => 'slider.items.store',
            'show' => 'slider.items.show',
            'edit' => 'slider.items.edit',
            'update' => 'slider.items.update',
            'destroy' => 'slider.items.destroy',
        ]);
    Route::resource('sliders', SliderController::class);

    /** Message Routes */
    Route::get('messages/trash', [MessageController::class, 'trash'])->name('messages.trash');
    Route::delete('messages/destroy/bulk', [MessageController::class, 'destroyBulk'])->name('messages.destroy.bulk');
    Route::delete('messages/{slider}/destroy/force', [MessageController::class, 'destroyForce'])->name('messages.destroy.force');
    Route::delete('messages/destroy/force/bulk', [MessageController::class, 'destroyForceBulk'])->name('messages.destroy.force.bulk');
    Route::delete('messages/destroy/force/all', [MessageController::class, 'destroyForceAll'])->name('messages.destroy.force.all');
    Route::post('messages/{slider}/restore', [MessageController::class, 'restore'])->name('messages.restore');
    Route::post('messages/restore/bulk', [MessageController::class, 'restoreBulk'])->name('messages.restore.bulk');
    Route::post('messages/restore/all', [MessageController::class, 'restoreAll'])->name('messages.restore.all');
    Route::resource('messages', MessageController::class);

    /** Our Clients Routes */
    Route::get('clients/trash', [OurClientController::class, 'trash'])->name('clients.trash');
    Route::delete('clients/destroy/bulk', [OurClientController::class, 'destroyBulk'])->name('clients.destroy.bulk');
    Route::delete('clients/{gallery}/destroy/force', [OurClientController::class, 'destroyForce'])->name('clients.destroy.force');
    Route::delete('clients/destroy/force/bulk', [OurClientController::class, 'destroyForceBulk'])->name('clients.destroy.force.bulk');
    Route::delete('clients/destroy/force/all', [OurClientController::class, 'destroyForceAll'])->name('clients.destroy.force.all');
    Route::post('clients/{gallery}/restore', [OurClientController::class, 'restore'])->name('clients.restore');
    Route::post('clients/restore/bulk', [OurClientController::class, 'restoreBulk'])->name('clients.restore.bulk');
    Route::post('clients/restore/all', [OurClientController::class, 'restoreAll'])->name('clients.restore.all');
    Route::resource('clients', OurClientController::class);

    /** Testimonial Routes */
    Route::get('testimonials/trash', [TestimonialController::class, 'trash'])->name('testimonials.trash');
    Route::delete('testimonials/destroy/bulk', [TestimonialController::class, 'destroyBulk'])->name('testimonials.destroy.bulk');
    Route::delete('testimonials/{slider}/destroy/force', [TestimonialController::class, 'destroyForce'])->name('testimonials.destroy.force');
    Route::delete('testimonials/destroy/force/bulk', [TestimonialController::class, 'destroyForceBulk'])->name('testimonials.destroy.force.bulk');
    Route::delete('testimonials/destroy/force/all', [TestimonialController::class, 'destroyForceAll'])->name('testimonials.destroy.force.all');
    Route::post('testimonials/{slider}/restore', [TestimonialController::class, 'restore'])->name('testimonials.restore');
    Route::post('testimonials/restore/bulk', [TestimonialController::class, 'restoreBulk'])->name('testimonials.restore.bulk');
    Route::post('testimonials/restore/all', [TestimonialController::class, 'restoreAll'])->name('testimonials.restore.all');
    Route::resource('testimonials', TestimonialController::class);

    /** Video Routes */
    Route::get('videos/trash', [VideoController::class, 'trash'])->name('videos.trash');
    Route::delete('videos/destroy/bulk', [VideoController::class, 'destroyBulk'])->name('videos.destroy.bulk');
    Route::delete('videos/{slider}/destroy/force', [VideoController::class, 'destroyForce'])->name('videos.destroy.force');
    Route::delete('videos/destroy/force/bulk', [VideoController::class, 'destroyForceBulk'])->name('videos.destroy.force.bulk');
    Route::delete('videos/destroy/force/all', [VideoController::class, 'destroyForceAll'])->name('videos.destroy.force.all');
    Route::post('videos/{slider}/restore', [VideoController::class, 'restore'])->name('videos.restore');
    Route::post('videos/restore/bulk', [VideoController::class, 'restoreBulk'])->name('videos.restore.bulk');
    Route::post('videos/restore/all', [VideoController::class, 'restoreAll'])->name('videos.restore.all');
    Route::resource('videos', VideoController::class);

    /** Pages Routes */
    Route::get('pages/trash', [PageController::class, 'trash'])->name('pages.trash');
    Route::delete('pages/destroy/bulk', [PageController::class, 'destroyBulk'])->name('pages.destroy.bulk');
    Route::delete('pages/{page}/destroy/force', [PageController::class, 'destroyForce'])->name('pages.destroy.force');
    Route::delete('pages/destroy/force/bulk', [PageController::class, 'destroyForceBulk'])->name('pages.destroy.force.bulk');
    Route::delete('pages/destroy/force/all', [PageController::class, 'destroyForceAll'])->name('pages.destroy.force.all');
    Route::post('pages/{page}/restore', [PageController::class, 'restore'])->name('pages.restore');
    Route::post('pages/restore/bulk', [PageController::class, 'restoreBulk'])->name('pages.restore.bulk');
    Route::post('pages/restore/all', [PageController::class, 'restoreAll'])->name('pages.restore.all');
    Route::resource('pages', PageController::class);

    /** Posts Routes */
    Route::get('posts/trash', [PostController::class, 'trash'])->name('posts.trash');
    Route::delete('posts/destroy/bulk', [PostController::class, 'destroyBulk'])->name('posts.destroy.bulk');
    Route::delete('posts/{post}/destroy/force', [PostController::class, 'destroyForce'])->name('posts.destroy.force');
    Route::delete('posts/destroy/force/bulk', [PostController::class, 'destroyForceBulk'])->name('posts.destroy.force.bulk');
    Route::delete('posts/destroy/force/all', [PostController::class, 'destroyForceAll'])->name('posts.destroy.force.all');
    Route::post('posts/{post}/restore', [PostController::class, 'restore'])->name('posts.restore');
    Route::post('posts/restore/bulk', [PostController::class, 'restoreBulk'])->name('posts.restore.bulk');
    Route::post('posts/restore/all', [PostController::class, 'restoreAll'])->name('posts.restore.all');
    Route::resource('posts', PostController::class);

    /** Comments Routes */
    Route::resource('comments', CommentController::class);

    /** Users Routes */
    Route::group(['prefix' => 'user'], function () {
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

    /** Setting Routes */
    Route::resource('setting', SettingController::class)->except('create', 'store', 'show', 'edit', 'destory');

    /** Hero Routes */
    Route::resource('heroes', HeroController::class)->except('create', 'store', 'show', 'edit', 'destory');

    /** CTA Routes */
    Route::resource('cta', CTAController::class)->except('create', 'store', 'show', 'edit', 'destory');

    /** Categories Routes */
    Route::get('product-categories/trash', [ProductCategoryController::class, 'trash'])->name('product-categories.trash');
    Route::delete('product-categories/destroy/bulk', [ProductCategoryController::class, 'destroyBulk'])->name('product-categories.destroy.bulk');
    Route::delete('product-categories/{category}/destroy/force', [ProductCategoryController::class, 'destroyForce'])->name('product-categories.destroy.force');
    Route::delete('product-categories/destroy/force/bulk', [ProductCategoryController::class, 'destroyForceBulk'])->name('product-categories.destroy.force.bulk');
    Route::delete('product-categories/destroy/force/all', [ProductCategoryController::class, 'destroyForceAll'])->name('product-categories.destroy.force.all');
    Route::post('product-categories/{category}/restore', [ProductCategoryController::class, 'restore'])->name('product-categories.restore');
    Route::post('product-categories/restore/bulk', [ProductCategoryController::class, 'restoreBulk'])->name('product-categories.restore.bulk');
    Route::post('product-categories/restore/all', [ProductCategoryController::class, 'restoreAll'])->name('product-categories.restore.all');
    Route::resource('product-categories', ProductCategoryController::class);

    /** Products Routes */
    Route::get('products/trash', [ProductController::class, 'trash'])->name('products.trash');
    Route::delete('products/destroy/bulk', [ProductController::class, 'destroyBulk'])->name('products.destroy.bulk');
    Route::delete('products/{category}/destroy/force', [ProductController::class, 'destroyForce'])->name('products.destroy.force');
    Route::delete('products/destroy/force/bulk', [ProductController::class, 'destroyForceBulk'])->name('products.destroy.force.bulk');
    Route::delete('products/destroy/force/all', [ProductController::class, 'destroyForceAll'])->name('products.destroy.force.all');
    Route::post('products/{category}/restore', [ProductController::class, 'restore'])->name('products.restore');
    Route::post('products/restore/bulk', [ProductController::class, 'restoreBulk'])->name('products.restore.bulk');
    Route::post('products/restore/all', [ProductController::class, 'restoreAll'])->name('products.restore.all');
    Route::resource('products', ProductController::class);

    /** Order Routes */
    Route::get('orders/trash', [OrderController::class, 'trash'])->name('orders.trash');
    Route::delete('orders/destroy/bulk', [OrderController::class, 'destroyBulk'])->name('orders.destroy.bulk');
    Route::delete('orders/{category}/destroy/force', [OrderController::class, 'destroyForce'])->name('orders.destroy.force');
    Route::delete('orders/destroy/force/bulk', [OrderController::class, 'destroyForceBulk'])->name('orders.destroy.force.bulk');
    Route::delete('orders/destroy/force/all', [OrderController::class, 'destroyForceAll'])->name('orders.destroy.force.all');
    Route::post('orders/{category}/restore', [OrderController::class, 'restore'])->name('orders.restore');
    Route::post('orders/restore/bulk', [OrderController::class, 'restoreBulk'])->name('orders.restore.bulk');
    Route::post('orders/restore/all', [OrderController::class, 'restoreAll'])->name('orders.restore.all');
    Route::resource('orders', OrderController::class);
});
