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
            'name' => 'Mehedi Jaman',
            'email' => 'mail4mjaman@gmail.com',
            'password' => bcrypt('mehedi!@#'),
            'email_verified_at' => date('Y-m-d H:i'),
        ]);
        $superadmin->assignRole('superadmin');

        $admin = User::create([
            'name' => 'Enamul sheikh',
            'email' => 'enamulhqenam50607210@gmail.com',
            'password' => bcrypt('enamul!@#'),
            'email_verified_at' => date('Y-m-d H:i'),
        ]);
        $admin->assignRole('admin');

        $operator = User::create([
            'name' => 'Operator',
            'email' => 'operator@operator.com',
            'password' => bcrypt('operator'),
            'email_verified_at' => date('Y-m-d H:i'),
        ]);
        $operator->assignRole('operator');
    }
}
