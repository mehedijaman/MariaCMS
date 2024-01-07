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
            $table->longText('header')->nullable();
            $table->longText('footer')->nullable();

            /** Home Page Settings */
            $table->boolean('topbar_enabled')->default(false);
            $table->boolean('banner_enabled')->default(false);
            $table->boolean('slider_enabled')->default(false);
            $table->boolean('hero_enabled')->default(false);
            $table->boolean('news_enabled')->default(false);
            $table->boolean('event_enabled')->default(false);
            $table->boolean('faq_enabled')->default(false);
            $table->boolean('feature_enabled')->default(false);
            $table->boolean('blog_enabled')->default(false);
            $table->boolean('testimonial_enabled')->default(false);
            $table->string('homepage')->nullable();
            $table->string('home_slider')->nullable();
            $table->string('news_category')->nullable();
            $table->string('event_category')->nullable();


            $table->longText('additional_css')->nullable();
            $table->string('topbar_color')->nullable();
            $table->string('body_color')->nullable();
            $table->string('footer_color')->nullable();

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
