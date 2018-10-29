<?php

namespace App;

use App\Appointment;
use App\MedicalHistory;
use App\PreviousPregnancy;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Patient extends Model
{
    use Searchable;
    
    public function appointments() {
        return $this->hasMany(Appointment::class);
    }

    public function medicalHistories() {
        return $this->hasMany(MedicalHistory::class);
    }

    public function previousPregnancies() {
        return $this->hasMany(PreviousPregnancy::class);
    }
}
