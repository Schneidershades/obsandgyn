<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->unsignedInteger('inventory_type_id');
            $table->unsignedInteger('quantity');
            $table->unsignedInteger('unit_id');
            $table->unsignedInteger('price');
            $table->timestamp('expiration');
            $table->timestamps();

            $table->foreign('inventory_type_id')->references('id')->on('inventory_types');
            $table->foreign('unit_id')->references('id')->on('units');

            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_bin';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inventories');
    }
}
