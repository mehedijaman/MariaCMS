<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CTA extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'cta';

    protected $fillable = [
        'image',
        'title',
        'description',
        'button_text',
        'button_url',
        'button_target',
    ];

    protected $appends = ['full_path_image'];

    public function getFullPathImageAttribute()
    {
        $image = $this->attributes['image'] ?? null;

        return $image ? asset('storage/image/cta/'.$image) : asset('image.png');
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
