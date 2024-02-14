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
            'banner' => null,
            'name' => 'MariaCMS',
            'contact_no' => '01914090747',
            'email' => 'mail4mjaman@gmail.com',
            'short_name' => 'mCMS',
            'tagline' => 'Elevate Your Content Experience with Laravel-Powered Simplicity and Power',
            'Description' => 'Introducing MariaCMS, a cutting-edge content management system meticulously crafted with the power of Laravel, Vue.js, Inertia, and Tailwind CSS. Born from the vision of seamlessly blending robust functionality with an intuitive user experience, MariaCMS stands as a formidable alternative to traditional content management solutions.',

            'topbar_enabled' => 1,
        ]);
    }
}
