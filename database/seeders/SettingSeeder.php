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
            'name' => 'HAMKO Group',
            'short_name' => 'HAMKO',
            'Description' => 'HAMKO Group, a household name in Bangladesh, is a diversified conglomerate that began its journey in 1978 with a spark - Abdullah Battery Company Limited. Founded on the principles of quality and customer focus, HAMKO quickly rose to become a leading manufacturer of lead-acid batteries, holding a significant market share in the automotive and solar sectors.',
        ]);
    }
}
