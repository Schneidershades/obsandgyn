<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePreviousPregnanciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('previous_pregnancies', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('patient_id');
            $table->year('year');
            $table->string('duration');
            $table->string('antenatal_complications');
            $table->string('labour');
            $table->unsignedInteger('age_if_alive')->nullable();
            $table->unsignedInteger('age_if_dead')->nullable();
            $table->string('cause_of_death')->nullable();
            $table->timestamps();

            $table->foreign('patient_id')->references('id')->on('patients');

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
        Schema::dropIfExists('previous_pregnancies');
    }
}
