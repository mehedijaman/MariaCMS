<?php

use App\Http\Controllers\WebsiteController;
use Illuminate\Support\Facades\Route;
use Spatie\Honeypot\ProtectAgainstSpam;

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

/** Contact Routes */
Route::get('contact', [WebsiteController::class, 'contact'])->name('contact');
Route::post('contact', [WebsiteController::class, 'contactPost'])->name('contact.post')->middleware(ProtectAgainstSpam::class);

/** Testimonial Routes */
Route::get('testimonials', [WebsiteController::class, 'testimonials'])->name('testimonials.view');

/** Gallery Routes */
Route::get('gallery/{slug?}', [WebsiteController::class, 'gallery'])->name('gallery');

/** Blog Routes */
Route::get('blog/{slug?}', [WebsiteController::class, 'blogPosts'])->name('blog.posts');
Route::get('blog/category/{slug?}', [WebsiteController::class, 'blogCategoryPosts'])->name('blog.category.posts');

/** Product Routes */
Route::get('products/{slug?}', [WebsiteController::class, 'products'])->name('products');
Route::get('products/category/{slug?}', [WebsiteController::class, 'categoryProducts'])->name('category.products');
Route::get('/cart', [WebsiteController::class, 'cart'])->name('cart');
Route::post('/checkout', [WebsiteController::class, 'checkout'])->name('checkout');

/** Index Routes */
Route::get('/{slug?}', [WebsiteController::class, 'index'])->name('index');
