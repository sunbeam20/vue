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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->json('images')->nullable(); //json for storing muliple images
            $table->string('details');
            $table->integer('quantity')->default(0);
            $table->float('price')->default(0.0);
            $table->float('sell_price')->default(0.0);
            $table->json('sizes')->nullable(); 
            $table->json('available_sizes')->nullable();
            $table->json('colors')->nullable();
            $table->json('available_colors')->nullable();
            $table->float('weight')->default(0.0);
            $table->string('keywords')->nullable();
            $table->boolean('completed')->default(false);
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
