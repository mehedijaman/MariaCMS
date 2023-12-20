<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://github.com/erikwibowo/Laravel-Jarvis/blob/master/Laravel_Jarvis.png" width="800" alt="Laravel Jarvis"></a></p>

## About Jarvis
Laravel Jarvis is a starter project made with Laravel Jetstream Inertia Vue and add more additional feature like User, Role & Permission management, Responsive design, Light/Dark Mode, Rich Table with many features. Check the documentation for more details.

## Features
- User Authentication.
- Role and Permission Management.
- Localization (Currently, English, Bahasa Indonesia and Bangla).
- Dark/Light Mode Support.
- Appliation Settings.
- Acitivity Log
- Backup Manager
- Error Logs
- Responsive Design
- Modal Form
- Bulk Action
- Toast Notification
- Toooltip
- SSR (Server Side Rendering)
- Rich Feature Server Side Datatable

# Requirements
- Php 8
- Composer
- Mysql
- Apache

## Installation and Usage
Clone the git repository
``` bash
git clone https://github.com/erikwibowo/Laravel-Brive.git
```
Go to the folder
``` bash
cd Laravel-Jarvis
```
Install and Update composer dependencies
``` bash
composer update
```
Install npm dependencies
``` bash
npm install
```
Copy .env.example and raname it to .env
``` bash
cp .env.example .env
```
Generate application key
``` bash
php artisan key:generate
```

SETTING UP DB CONNECTION IN .env
``` bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=brive
DB_USERNAME=root
DB_PASSWORD=
```
Migrate Database with fresh seed
``` bash
php artisan migrate:fresh --seed
```

Start the NPM server
``` bash
npm run dev
```
Start the Laravel Developement Server
``` bash
php artisan serve
```
## Login With
### Superadmin
``` bash
email : superadmin@superadmin.com
password : superadmin
```
### Admin
``` bash
email : admin@admin.com
password : admin
```
### Operator
``` bash
email : operator@operator.com
password : operator
```

# Packages
- [Vue](https://vuejs.org/)
- [Inertia](https://inertiajs.com/)
- [Tailwind](https://tailwindcss.com/)
- [Spatie](https://spatie.be/docs/laravel-permission/v5/introduction)
- [Floating Vue](https://floating-vue.starpad.dev/)
- [VueUse](https://vueuse.org/)
- [Hero Icons](https://heroicons.com/)
- [HeadlessUI](https://headlessui.com/)

## Contributors
- **[Erik Wiboww](https://erikwibowo.com/)**
- **[Mehedi Jaman](https://me.mehedipata.com/)**

## License
Laravel Jarvis is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

# Built With
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

