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
