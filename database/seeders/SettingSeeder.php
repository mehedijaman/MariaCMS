<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Setting::create([
            'favicon' => null,
            'logo' => null,
            'name' => 'MariaCMS',
            'short_name' => 'mCMS',
            'Description' => 'Introducing MariaCMS, a cutting-edge content management system meticulously crafted with the power of Laravel, Vue.js, Inertia, and Tailwind CSS. Born from the vision of seamlessly blending robust functionality with an intuitive user experience, MariaCMS stands as a formidable alternative to traditional content management solutions.',
        ]);
    }
}
