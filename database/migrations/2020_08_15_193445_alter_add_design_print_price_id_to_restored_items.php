<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterAddDesignPrintPriceIdToRestoredItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('restored_items', function (Blueprint $table) {
            $table->dropForeign('restored_items_design_id_foreign');
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
        Schema::table('restored_items', function (Blueprint $table) {
            $table->dropForeign('restored_items_design_print_price_id_foreign');
            $table->dropColumn('design_print_price_id');

            $table->unsignedBigInteger('design_id');
            $table->foreign('design_id')->references('id')->on('designs')->onDelete('set null');
        });
    }
}
