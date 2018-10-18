<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProceduresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('procedures', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('visit_id');
            $table->unsignedInteger('procedure_type_id');
            $table->string('location')->nullable();
            $table->timestamp('start_date');
            $table->timestamp('end_date')->nullable();
            $table->unsignedInteger('physician');
            $table->unsignedInteger('anesthesiologist');
            $table->unsignedInteger('anesthesiology_type_id');
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->foreign('visit_id')->references('id')->on('visits');
            $table->foreign('procedure_type_id')->references('id')->on('procedure_types');
            $table->foreign('physician')->references('id')->on('users');
            $table->foreign('anesthesiologist')->references('id')->on('users');
            $table->foreign('anesthesiology_type_id')->references('id')->on('anesthesiology_types');

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
        Schema::dropIfExists('procedures');
    }
}
