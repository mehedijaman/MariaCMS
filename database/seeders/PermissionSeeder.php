<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'menu create', 'guard_name' => 'web']);
        Permission::create(['name' => 'menu read', 'guard_name' => 'web']);
        Permission::create(['name' => 'menu update', 'guard_name' => 'web']);
        Permission::create(['name' => 'menu delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'menu item create', 'guard_name' => 'web']);
        Permission::create(['name' => 'menu item read', 'guard_name' => 'web']);
        Permission::create(['name' => 'menu item update', 'guard_name' => 'web']);
        Permission::create(['name' => 'menu item delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'user create', 'guard_name' => 'web']);
        Permission::create(['name' => 'user read', 'guard_name' => 'web']);
        Permission::create(['name' => 'user update', 'guard_name' => 'web']);
        Permission::create(['name' => 'user delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'role create', 'guard_name' => 'web']);
        Permission::create(['name' => 'role read', 'guard_name' => 'web']);
        Permission::create(['name' => 'role update', 'guard_name' => 'web']);
        Permission::create(['name' => 'role delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'permission create', 'guard_name' => 'web']);
        Permission::create(['name' => 'permission read', 'guard_name' => 'web']);
        Permission::create(['name' => 'permission update', 'guard_name' => 'web']);
        Permission::create(['name' => 'permission delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'setting create', 'guard_name' => 'web']);
        Permission::create(['name' => 'setting read', 'guard_name' => 'web']);
        Permission::create(['name' => 'setting update', 'guard_name' => 'web']);
        Permission::create(['name' => 'setting delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'activity create', 'guard_name' => 'web']);
        Permission::create(['name' => 'activity read', 'guard_name' => 'web']);
        Permission::create(['name' => 'activity update', 'guard_name' => 'web']);
        Permission::create(['name' => 'activity delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'logs create', 'guard_name' => 'web']);
        Permission::create(['name' => 'logs read', 'guard_name' => 'web']);
        Permission::create(['name' => 'logs update', 'guard_name' => 'web']);
        Permission::create(['name' => 'logs delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'backup create', 'guard_name' => 'web']);
        Permission::create(['name' => 'backup read', 'guard_name' => 'web']);
        Permission::create(['name' => 'backup update', 'guard_name' => 'web']);
        Permission::create(['name' => 'backup delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'app maintenance create', 'guard_name' => 'web']);
        Permission::create(['name' => 'app maintenance read', 'guard_name' => 'web']);
        Permission::create(['name' => 'app maintenance update', 'guard_name' => 'web']);
        Permission::create(['name' => 'app maintenance delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'category create', 'guard_name' => 'web']);
        Permission::create(['name' => 'category read', 'guard_name' => 'web']);
        Permission::create(['name' => 'category update', 'guard_name' => 'web']);
        Permission::create(['name' => 'category delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'tag create', 'guard_name' => 'web']);
        Permission::create(['name' => 'tag read', 'guard_name' => 'web']);
        Permission::create(['name' => 'tag update', 'guard_name' => 'web']);
        Permission::create(['name' => 'tag delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'gallery create', 'guard_name' => 'web']);
        Permission::create(['name' => 'gallery read', 'guard_name' => 'web']);
        Permission::create(['name' => 'gallery update', 'guard_name' => 'web']);
        Permission::create(['name' => 'gallery delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'gallery item create', 'guard_name' => 'web']);
        Permission::create(['name' => 'gallery item read', 'guard_name' => 'web']);
        Permission::create(['name' => 'gallery item update', 'guard_name' => 'web']);
        Permission::create(['name' => 'gallery item delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'slider create', 'guard_name' => 'web']);
        Permission::create(['name' => 'slider read', 'guard_name' => 'web']);
        Permission::create(['name' => 'slider update', 'guard_name' => 'web']);
        Permission::create(['name' => 'slider delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'slider item create', 'guard_name' => 'web']);
        Permission::create(['name' => 'slider item read', 'guard_name' => 'web']);
        Permission::create(['name' => 'slider item update', 'guard_name' => 'web']);
        Permission::create(['name' => 'slider item delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'faq create', 'guard_name' => 'web']);
        Permission::create(['name' => 'faq read', 'guard_name' => 'web']);
        Permission::create(['name' => 'faq update', 'guard_name' => 'web']);
        Permission::create(['name' => 'faq delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'testimonial create', 'guard_name' => 'web']);
        Permission::create(['name' => 'testimonial read', 'guard_name' => 'web']);
        Permission::create(['name' => 'testimonial update', 'guard_name' => 'web']);
        Permission::create(['name' => 'testimonial delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'page create', 'guard_name' => 'web']);
        Permission::create(['name' => 'page read', 'guard_name' => 'web']);
        Permission::create(['name' => 'page update', 'guard_name' => 'web']);
        Permission::create(['name' => 'page delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'post create', 'guard_name' => 'web']);
        Permission::create(['name' => 'post read', 'guard_name' => 'web']);
        Permission::create(['name' => 'post update', 'guard_name' => 'web']);
        Permission::create(['name' => 'post delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'message create', 'guard_name' => 'web']);
        Permission::create(['name' => 'message read', 'guard_name' => 'web']);
        Permission::create(['name' => 'message update', 'guard_name' => 'web']);
        Permission::create(['name' => 'message delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'hero create', 'guard_name' => 'web']);
        Permission::create(['name' => 'hero read', 'guard_name' => 'web']);
        Permission::create(['name' => 'hero update', 'guard_name' => 'web']);
        Permission::create(['name' => 'hero delete', 'guard_name' => 'web']);

        Permission::create(['name' => 'cta create', 'guard_name' => 'web']);
        Permission::create(['name' => 'cta read', 'guard_name' => 'web']);
        Permission::create(['name' => 'cta update', 'guard_name' => 'web']);
        Permission::create(['name' => 'cta delete', 'guard_name' => 'web']);
    }
}
