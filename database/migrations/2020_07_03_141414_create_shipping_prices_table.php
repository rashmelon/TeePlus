<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShippingPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipping_prices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->double('price')->nullable();
            $table->integer('days')->nullable();
            $table->unsignedBigInteger('shipping_method_id')->nullable();
            $table->unsignedBigInteger('city_id')->nullable();
            $table->foreign('shipping_method_id')->references('id')->on('shipping_methods')->onDelete('cascade');
            $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sipping_prices');
    }
}
