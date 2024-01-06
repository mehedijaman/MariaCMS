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
            $table->string('logo')->nullable();
            $table->string('favicon')->nullable();
            $table->string('banner')->nullable();
            $table->string('name');
            $table->string('short_name');
            $table->string('tagline')->nullable();
            $table->text('description')->nullable();
            $table->string('homepage')->nullable();
            $table->boolean('banner_enabled')->default(false);
            $table->string('home_slider')->nullable();
            $table->string('news_category')->nullable();
            $table->string('event_category')->nullable();
            $table->string('background_color')->nullable();
            $table->longText('additional_css')->nullable();
            $table->longText('header')->nullable();
            $table->longText('footer')->nullable();
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
