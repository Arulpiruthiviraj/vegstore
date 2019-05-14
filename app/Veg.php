<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Veg extends Model
{
    protected $fillable = [
        'vegetable', 'description','price','Available','supplier'
    ];
}
