<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Veg extends Model
{
    protected $fillable = [
        'vegetable_name', 'vegetable_price','vegetable_description','vegetable_supplier','stock_available'
    ];
    protected $table='vegs';
}
