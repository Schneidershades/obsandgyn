<?php

namespace App;

use App\Patient;
use Illuminate\Database\Eloquent\Model;

class MedicalHistory extends Model
{
    public function patient() {
        return $this->belongsTo(Patient::class);
    }
}
