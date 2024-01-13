<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Hero extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'image',
        'title',
        'description',
        'button_text',
        'button_url',
        'button_target'
    ];

    protected $appends = ['full_path_image'];
    public function getFullPathImageAttribute()
    {
        return $this->attributes['image'] == null ? asset('image.png') : asset('storage/image/hero/'.$this->attributes['image']);
    }

    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->isoFormat('D MMMM Y HH:mm');
    }

    public function getUpdatedAtAttribute()
    {
        return Carbon::parse($this->attributes['updated_at'])->isoFormat('D MMMM Y HH:mm');
    }
}
