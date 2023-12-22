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
    }
}
