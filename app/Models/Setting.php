<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'logo',
        'favicon',
        'banner',
        'name',
        'short_name',
        'tagline',
        'description',
        'homepage',
        'home_slider',
        'news_category',
        'event_category',
        'background_color',
        'additional_css',
        'banner_enabled',
        'header',
        'footer',
        'address',
        'google_map',
        'contact_no',
        'email',
        'facebook',
        'twitter',
        'instagram',
        'youtube',
        'whatsapp',
    ];

    protected $appends = ['full_path_logo', 'full_path_favicon', 'full_path_banner'];

    public function getFullPathBannerAttribute()
    {
        return $this->attributes['banner'] == null ? null : asset('storage/image/setting/'.$this->attributes['banner']);
    }

    public function getFullPathLogoAttribute()
    {
        return $this->attributes['logo'] == null ? asset('logo.svg') : asset('storage/image/setting/'.$this->attributes['logo']);
    }

    public function getFullPathFaviconAttribute()
    {
        return $this->attributes['favicon'] == null ? asset('favicon.png') : asset('storage/image/setting/'.$this->attributes['favicon']);
    }

    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->isoFormat('D MMMM Y HH:mm');
    }

    public function getUpdatedAtAttribute()
    {
        return Carbon::parse($this->attributes['updated_at'])->isoFormat('D MMMM Y HH:mm');
    }

    /**
     * Get the user that owns the Setting
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
