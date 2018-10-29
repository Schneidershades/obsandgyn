<?php

namespace App;

use App\Visit;
use Illuminate\Database\Eloquent\Model;

class VisitNote extends Model
{
    public function visit() {
        return $this->belongsTo(Visit::class);
    }
}
