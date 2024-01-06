<?php

namespace App\Traits;

use Illuminate\Support\Facades\Auth;

trait UserStamp
{
    protected static function bootUserStamp()
    {
        static::creating(function ($model) {
            $user = Auth::user();

            if ($user) {
                $model->created_by = $user->id;
            }
        });

        static::updating(function ($model) {
            $user = Auth::user();

            if ($user) {
                $model->updated_by = $user->id;
            }
        });

        static::deleting(function ($model) {
            $user = Auth::user();

            if ($user) {
                $model->deleted_by = $user->id;
            }
        });
    }
}
