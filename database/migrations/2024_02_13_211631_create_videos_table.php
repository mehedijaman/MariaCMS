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
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('url')->nullable();
            $table->string('description')->nullable();
            $table->boolean('is_featured')->default(false)->nullable();
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
        Schema::dropIfExists('videos');
    }
};
