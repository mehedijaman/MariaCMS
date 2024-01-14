<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superadmin = Role::create([
            'name' => 'superadmin',
            'guard_name' => 'web',
        ]);

        $superadmin->givePermissionTo([
            'menu create',
            'menu read',
            'menu update',
            'menu delete',

            'menu item create',
            'menu item read',
            'menu item update',
            'menu item delete',

            'user create',
            'user read',
            'user update',
            'user delete',

            'role create',
            'role read',
            'role update',
            'role delete',

            'permission create',
            'permission read',
            'permission update',
            'permission delete',

            'setting create',
            'setting read',
            'setting update',
            'setting delete',

            'activity create',
            'activity read',
            'activity update',
            'activity delete',

            'logs create',
            'logs read',
            'logs update',
            'logs delete',

            'backup create',
            'backup read',
            'backup update',
            'backup delete',

            'app maintenance create',
            'app maintenance read',
            'app maintenance update',
            'app maintenance delete',

            'category create',
            'category read',
            'category update',
            'category delete',

            'tag create',
            'tag read',
            'tag update',
            'tag delete',

            'gallery create',
            'gallery read',
            'gallery update',
            'gallery delete',

            'gallery item create',
            'gallery item read',
            'gallery item update',
            'gallery item delete',

            'slider create',
            'slider read',
            'slider update',
            'slider delete',

            'slider item create',
            'slider item read',
            'slider item update',
            'slider item delete',

            'faq create',
            'faq read',
            'faq update',
            'faq delete',

            'testimonial create',
            'testimonial read',
            'testimonial update',
            'testimonial delete',

            'page create',
            'page read',
            'page update',
            'page delete',

            'post create',
            'post read',
            'post update',
            'post delete',

            'message create',
            'message read',
            'message update',
            'message delete',

            'hero create',
            'hero read',
            'hero update',
            'hero delete',

            'cta create',
            'cta read',
            'cta update',
            'cta delete',
        ]);

        $admin = Role::create([
            'name' => 'admin',
            'guard_name' => 'web',
        ]);

        $admin->givePermissionTo([
            'user create',
            'user read',
            'user update',
            'user delete',

            'role create',
            'role read',
            'role update',
            'role delete',

            'permission create',
            'permission read',
            'permission update',
            'permission delete',

            'setting create',
            'setting read',
            'setting update',
            'setting delete',

            'activity create',
            'activity read',
            'activity update',
            'activity delete',
        ]);

        $operator = Role::create([
            'name' => 'operator',
            'guard_name' => 'web',
        ]);

        $operator->givePermissionTo([
            'user read',
            'user update',

            'setting read',
            'setting update',
        ]);
    }
}
