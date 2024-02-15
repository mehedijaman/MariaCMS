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
        'header_message',
        'footer_message',

        'is_topbar',
        'is_header_message',
        'is_footer_message',
        'is_search',
        'is_language',
        'is_dark_mode',
        'is_banner',
        'is_logo',
        'is_name',
        'is_tagline',
        'is_phone',
        'is_email',
        'is_slider',
        'is_hero',
        'is_fascility',
        'is_homepage',
        'is_news',
        'is_event',
        'is_faq',
        'is_feature',
        'is_cta',
        'is_blog',
        'is_testimonial',
        'is_product',
        'is_product_category',
        'is_clients',
        'is_chat',
        'is_video',

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

        return asset('storage/image/setting/'.$this->attributes['banner']);
    }

    public function getFullPathLogoAttribute()
    {
        if ($this->attributes['logo'] === null) {
            return asset('logo.svg');
        }

        return asset('storage/image/setting/'.$this->attributes['logo']);
    }

    public function getFullPathFaviconAttribute()
    {
        if ($this->attributes['favicon'] === null) {
            return asset('favicon.png');
        }

        return asset('storage/image/setting/'.$this->attributes['favicon']);
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
