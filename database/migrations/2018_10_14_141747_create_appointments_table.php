<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('patient_id');
            $table->timestamp('start_date');
            $table->timestamp('end_date')->nullable();
            $table->unsignedInteger('examiner');
            $table->string('location')->nullable();
            $table->unsignedInteger('appointment_type_id');
            $table->unsignedInteger('appointment_status_id');
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->foreign('patient_id')->references('id')->on('patients');
            $table->foreign('examiner')->references('id')->on('users');
            $table->foreign('appointment_type_id')->references('id')->on('appointment_types');
            $table->foreign('appointment_status_id')->references('id')->on('appointment_statuses');

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
        Schema::dropIfExists('appointments');
    }
}
