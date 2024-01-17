<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use SoftDeletes;

    protected $fillable = [
        'category_id',
        'slug',
        'name',
        'description',
        'status',
        'is_featured',
    ];

    protected $appends = ['placeholder_url'];

    public function getPlaceholderUrlAttribute()
    {
        return $this->attributes['placeholder_url'] = asset('image.png');
    }

    public function category()
    {
        return $this->belongsTo(ProductCategory::class);
    }
}
