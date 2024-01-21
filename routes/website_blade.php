<?php
use App\Http\Controllers\WebBladeController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Spatie\Honeypot\ProtectAgainstSpam;

/*
|--------------------------------------------------------------------------
| Website Routes
|--------------------------------------------------------------------------
*/

/** Website Contact Routes */
Route::get('contact', [WebBladeController::class, 'contact'])->name('contact');
Route::post('contact', [WebBladeController::class, 'contactPost'])->name('contact.post')->middleware(ProtectAgainstSpam::class);

/** Website Testimonial Routes */
Route::get('testimonials', [WebBladeController::class, 'testimonials'])->name('testimonials.view');

/** Website Gallery Routes */
Route::get('gallery/{slug?}', [WebBladeController::class, 'gallery'])->name('gallery');

/** Website Blog Routes */
Route::get('blog/{slug?}', [WebBladeController::class, 'blogPosts'])->name('blog.posts');
Route::get('blog/category/{slug?}', [WebBladeController::class, 'blogCategoryPosts'])->name('blog.category.posts');

/** Website Product Routes */
Route::get('products/{slug?}', [WebBladeController::class, 'products'])->name('products');
Route::get('products/category/{slug?}', [WebBladeController::class, 'categoryProducts'])->name('category.products');

/** Website Index Routes */
Route::get('/{slug?}', [WebBladeController::class, 'index'])->name('index');
