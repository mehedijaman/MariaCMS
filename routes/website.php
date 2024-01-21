<?php
use App\Http\Controllers\WebsiteController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Spatie\Honeypot\ProtectAgainstSpam;

/*
|--------------------------------------------------------------------------
| Website Routes
|--------------------------------------------------------------------------
*/

/** Website Contact Routes */
Route::get('contact', [WebsiteController::class, 'contact'])->name('contact');
Route::post('contact', [WebsiteController::class, 'contactPost'])->name('contact.post')->middleware(ProtectAgainstSpam::class);

/** Website Testimonial Routes */
Route::get('testimonials', [WebsiteController::class, 'testimonials'])->name('testimonials.view');

/** Website Gallery Routes */
Route::get('gallery/{slug?}', [WebsiteController::class, 'gallery'])->name('gallery');

/** Website Blog Routes */
Route::get('blog/{slug?}', [WebsiteController::class, 'blogPosts'])->name('blog.posts');
Route::get('blog/category/{slug?}', [WebsiteController::class, 'blogCategoryPosts'])->name('blog.category.posts');

/** Website Product Routes */
Route::get('products/{slug?}', [WebsiteController::class, 'products'])->name('products');
Route::get('products/category/{slug?}', [WebsiteController::class, 'categoryProducts'])->name('category.products');

/** Website Index Routes */
Route::get('/{slug?}', [WebsiteController::class, 'index'])->name('index');
