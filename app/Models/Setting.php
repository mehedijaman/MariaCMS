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
        'header',
        'footer',
        'topbar_enabled',
        'banner_enabled',
        'slider_enabled',
        'hero_enabled',
        'homepage_enabled',
        'news_enabled',
        'event_enabled',
        'faq_enabled',
        'cta_enabled',
        'feature_enabled',
        'blog_enabled',
        'testimonial_enabled',
        'featured_product_enabled',
        'homepage',
        'home_slider',
        'news_category',
        'event_category',
        'additional_css',

        'topbar_background_color',
        'topbar_text_color',
        'banner_background_color',
        'banner_text_color',
        'navbar_background_color',
        'navbar_text_color',
        'body_background_color',
        'body_text_color',
        'footer_background_color',
        'footer_text_color',

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
        if ($this->attributes['banner'] === null) {
            return null;
        }

        return asset('uploads/image/setting/' . $this->attributes['banner']);
    }


    public function getFullPathLogoAttribute()
    {
        if ($this->attributes['logo'] === null) {
            return asset('logo.svg');
        }

        return asset('uploads/image/setting/' . $this->attributes['logo']);
    }


    public function getFullPathFaviconAttribute()
    {
        if ($this->attributes['favicon'] === null) {
            return asset('favicon.png');
        }

        return asset('uploads/image/setting/' . $this->attributes['favicon']);
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
