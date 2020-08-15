<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterAddDesignPrintPriceIdToOrderProducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('order_products', function (Blueprint $table) {
            $table->dropForeign('order_products_design_id_foreign');
            $table->dropColumn('design_id');

            $table->unsignedBigInteger('design_print_price_id')->nullable();
            $table->foreign('design_print_price_id')->references('id')->on('design_print_prices')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('order_products', function (Blueprint $table) {
            $table->dropForeign('order_products_design_print_price_id_foreign');
            $table->dropColumn('design_print_price_id');

            $table->unsignedBigInteger('design_id');
            $table->foreign('design_id')->references('id')->on('designs')->onDelete('set null');
        });
    }
}
