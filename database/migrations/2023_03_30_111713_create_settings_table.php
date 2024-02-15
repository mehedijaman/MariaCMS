<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();

            /** General Settings */
            $table->string('logo')->nullable();
            $table->string('favicon')->nullable();
            $table->string('banner')->nullable();
            $table->string('name');
            $table->string('short_name');
            $table->string('tagline')->nullable();
            $table->longText('description')->nullable();
            $table->longText('header_message')->nullable();
            $table->longText('footer_message')->nullable();

            /** Home Page Settings */
            $table->boolean('is_topbar')->default(true);
            $table->boolean('is_header_message')->default(false);
            $table->boolean('is_footer_message')->default(false);
            $table->boolean('is_search')->default(true);
            $table->boolean('is_language')->default(false);
            $table->boolean('is_dark_mode')->default(true);
            $table->boolean('is_banner')->default(false);
            $table->boolean('is_logo')->default(true);
            $table->boolean('is_name')->default(true);
            $table->boolean('is_tagline')->default(true);
            $table->boolean('is_phone')->default(true);
            $table->boolean('is_email')->default(true);
            $table->boolean('is_slider')->default(false);
            $table->boolean('is_hero')->default(false);
            $table->boolean('is_homepage')->default(false);
            $table->boolean('is_news')->default(false);
            $table->boolean('is_event')->default(false);
            $table->boolean('is_faq')->default(false);
            $table->boolean('is_feature')->default(false);
            $table->boolean('is_cta')->default(false);
            $table->boolean('is_blog')->default(false);
            $table->boolean('is_testimonial')->default(false);
            $table->boolean('is_product')->default(false);
            $table->boolean('is_product_category')->default(false);
            $table->boolean('is_clients')->default(false);
            $table->boolean('is_chat')->default(true);
            $table->boolean('is_video')->default(false);

            $table->string('homepage')->nullable();
            $table->string('home_slider')->nullable();
            $table->string('news_category')->nullable();
            $table->string('event_category')->nullable();

            $table->longText('additional_css')->nullable();

            $table->string('topbar_background_color')->nullable();
            $table->string('topbar_text_color')->nullable();
            $table->string('banner_background_color')->nullable();
            $table->string('banner_text_color')->nullable();
            $table->string('navbar_background_color')->nullable();
            $table->string('navbar_text_color')->nullable();
            $table->string('body_background_color')->nullable();
            $table->string('body_text_color')->nullable();
            $table->string('footer_background_color')->nullable();
            $table->string('footer_text_color')->nullable();

            /** Contact Settings */
            $table->text('address')->nullable();
            $table->text('google_map')->nullable();
            $table->string('contact_no')->nullable();
            $table->string('email')->nullable();
            $table->string('facebook')->nullable();
            $table->string('twitter')->nullable();
            $table->string('instagram')->nullable();
            $table->string('youtube')->nullable();
            $table->string('whatsapp')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
