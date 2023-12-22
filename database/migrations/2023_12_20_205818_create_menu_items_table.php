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
        Schema::create('menu_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('menu_id')->constrained('menus')->cascadeOnDelete();
            $table->unsignedBigInteger('parent')->nullable();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('type')->nullable();
            $table->string('target')->nullable();
            $table->boolean('status')->default(true)->nullable();

            $table->unsignedBigInteger('published_by')->references('id')->on('users')->nullable();
            $table->unsignedBigInteger('created_by')->references('id')->on('users')->nullable();
            $table->unsignedBigInteger('updated_by')->references('id')->on('users')->nullable();
            $table->unsignedBigInteger('deleted_by')->references('id')->on('users')->nullable();
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_items');
    }
};
