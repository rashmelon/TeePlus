<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'image', 'email_verified_at', 'agency_id', 'birth_date', 'gender', 'phone', 'phone_verified_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'pivot'
    ];

    protected $with = ['roles'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function agency()
    {
        return $this->belongsTo(Agency::class, 'agency_id');
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function apiPasswordReset()
    {
        return $this->hasMany(ApiPasswordReset::class);
    }

    public function scopeEmployees($query)
    {
        return $query->whereHas('roles', function ($query) {
            $query->where('is_core', 0)->where('name', '!=', 'Customer');
        });
    }

    public function likedPackages()
    {
        return $this->belongsToMany(Package::class, 'user_package');
    }

    public function upcomingLikedPackages()
    {
        return $this->likedPackages()
            ->where('date', '>', Carbon::today()->addDays(5))
            ->where('date', '<=', Carbon::today()->addDays(6));
    }

}
