<?php

namespace App;

use App\Patient;
use Illuminate\Database\Eloquent\Model;

class PreviousPregnancy extends Model
{
    public function patient() {
        return $this->belongsTo(Patient::class);
    }
}
