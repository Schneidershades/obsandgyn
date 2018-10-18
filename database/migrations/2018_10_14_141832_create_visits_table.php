<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVisitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visits', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('pregnancy_id');
            $table->timestamp('start_date');
            $table->timestamp('end_date')->nullable();
            $table->text('diagnosis')->nullable();
            $table->unsignedInteger('examiner');
            $table->unsignedInteger('visit_type_id');
            $table->unsignedInteger('visit_status_id');
            $table->timestamps();

            $table->foreign('pregnancy_id')->references('id')->on('pregnancies');
            $table->foreign('examiner')->references('id')->on('users');
            $table->foreign('visit_type_id')->references('id')->on('visit_types');
            $table->foreign('visit_status_id')->references('id')->on('visit_statuses');

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
        Schema::dropIfExists('visits');
    }
}
