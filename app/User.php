<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'pivot'
    ];

    protected $with = ['roles', 'image'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function image()
    {
        return $this->morphOne(Media::class, 'mediable')->where('relation', 'image');
    }

    public function restoredItems()
    {
        return $this->hasMany(RestoredItem::class);
    }

    public function scopeEmployees($query)
    {
        return $query->whereHas('roles', function ($query) {
            $query->where('is_core', 0);
        });
    }

    public function productsToSell()
    {
        return $this->belongsToMany(Product::class, 'user_products');
    }
}
