<?php

namespace App;

use App\Pregnancy;
use Illuminate\Database\Eloquent\Model;

class Pregnancy extends Model
{
    public function visits() {
        return $this->hasMany(Pregnancy::class);
    }
}
