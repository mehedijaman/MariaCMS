<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Post extends Model implements HasMedia
{
    use HasFactory;
    use SoftDeletes;
    use InteractsWithMedia;

    protected $fillable = [
        'name',
        'slug',
        'content',
        'excerpt',
        'password',
        'hit_count',
        'is_featured',
        'allow_comment',
        'is_featured',
        'status',
        'meta_title',
        'meta_description',
        'meta_keywords',
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
