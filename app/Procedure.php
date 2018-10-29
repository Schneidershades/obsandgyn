<?php

namespace App;

use App\Visit;
use Illuminate\Database\Eloquent\Model;

class Procedure extends Model
{
    public function visit() {
        return $this->belongsTo(Visit::class);
    }
}
