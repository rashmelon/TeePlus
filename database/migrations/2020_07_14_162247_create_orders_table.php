<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('customer_name')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('additional_number')->nullable();
            $table->text('address')->nullable();
            $table->string('shipping_note')->nullable();
            $table->string('internal_tracking')->nullable();
            $table->string('external_tracking')->nullable();
            $table->double('discount')->nullable();
            $table->double('additional_fees')->nullable();
            $table->string('additional_fees_details')->nullable();
            $table->unsignedBigInteger('status_id')->nullable();
            $table->unsignedBigInteger('payment_type_id')->nullable();
            $table->unsignedBigInteger('shipping_price_id')->nullable();
            $table->foreign('status_id')->references('id')->on('statuses')->onDelete('set null');
            $table->foreign('payment_type_id')->references('id')->on('payment_types')->onDelete('set null');
            $table->foreign('shipping_price_id')->references('id')->on('shipping_prices')->onDelete('set null');
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
        Schema::dropIfExists('orders');
    }
}
