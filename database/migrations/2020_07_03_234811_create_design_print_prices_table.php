<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDesignPrintPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('design_print_prices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->double('price')->nullable();
            $table->unsignedBigInteger('design_id')->nullable();
            $table->unsignedBigInteger('print_criteria_id')->nullable();
            $table->foreign('design_id')->references('id')->on('designs')->onDelete('cascade');
            $table->foreign('print_criteria_id')->references('id')->on('print_criterias')->onDelete('cascade');
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
        Schema::dropIfExists('design_print_prices');
    }
}
