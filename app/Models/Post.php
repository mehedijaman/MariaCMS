<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'content',
        'excerpt',
        'password',
        'hit_count',
        'is_featured',
        'is_featured',
        'status',
        'meta_title',
        'meta_description',
        'meta_keywords',
    ];
}
