<?php

namespace App;

use App\Charge;
use App\VisitNote;
use App\Procedure;
use App\Pregnancy;
use Illuminate\Database\Eloquent\Model;

class Visit extends Model
{
    public function charges() {
        return $this->hasMany(Charge::class);
    }

    public function visitNotes() {
        return $this->hasMany(VisitNote::class);
    }

    public function procedures() {
        return $this->hasMany(Procedure::class);
    }

    public function pregnancy() {
        return $this->belongsTo(Pregnancy::class);
    }
}
