<?php

namespace App;

use App\Patient;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    public function patient() {
        return $this->belongsTo(Patient::class);
    }

    public function examiner() {
        return $this->belongsTo(User::class, 'examiner');
    }
}
