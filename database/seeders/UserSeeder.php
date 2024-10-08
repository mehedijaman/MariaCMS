<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superadmin = User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@gmail.com',
            'password' => bcrypt('superadmin123'),
            'email_verified_at' => date('Y-m-d H:i'),
        ]);
        $superadmin->assignRole('superadmin');

        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin123'),
            'email_verified_at' => date('Y-m-d H:i'),
        ]);
        $admin->assignRole('admin');

        $operator = User::create([
            'name' => 'Operator',
            'email' => 'operator@operator.com',
            'password' => bcrypt('operator123'),
            'email_verified_at' => date('Y-m-d H:i'),
        ]);
        $operator->assignRole('operator');
    }
}
