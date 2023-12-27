<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://github.com/mehedijaman/MariaCMS/blob/main/MariaCMS.png" width="800" alt="MariaCMS"></a></p>

## MariaCMS: Empowering Digital Experiences with Laravel, Vue, Inertia, and Tailwind CSS
Introducing MariaCMS, a cutting-edge content management system meticulously crafted with the power of Laravel, Vue.js, Inertia, and Tailwind CSS. Born from the vision of seamlessly blending robust functionality with an intuitive user experience, MariaCMS stands as a formidable alternative to traditional content management solutions.

## Key Features:
### Laravel Backbone: 
MariaCMS leverages the strength of Laravel, a PHP framework known for its elegance and efficiency. This forms the solid foundation of the CMS, ensuring scalability, security, and a developer-friendly environment.

### Dynamic User Interfaces with Vue.js: 
Embracing the dynamic capabilities of Vue.js, MariaCMS delivers a responsive and interactive user interface. Vue.js allows for real-time updates, ensuring a smooth and engaging experience for both content creators and website visitors.

### Effortless Single-Page Applications (SPAs) with Inertia: 
MariaCMS takes advantage of Inertia.js, a framework for building modern SPAs using server-side routing. This architecture enhances performance by reducing page reloads and providing a more fluid browsing experience.

### Aesthetic Appeal with Tailwind CSS: 
The visual charm of MariaCMS is powered by Tailwind CSS, a utility-first CSS framework. Tailwind enables a highly customizable and maintainable design, ensuring that every website built with MariaCMS is not just functional but also visually appealing.

### Modular and Extensible: 
MariaCMS is designed with extensibility in mind, allowing developers to create and integrate custom modules seamlessly. This modularity ensures that the CMS can adapt to diverse needs, making it a versatile solution for a range of projects.

### Community-Driven Development: 
MariaCMS thrives on a vibrant community of developers and contributors. Regular updates and improvements are driven by feedback from the community, ensuring that the CMS evolves to meet the ever-changing demands of the digital landscape.

### User-Focused Content Management: 
MariaCMS prioritizes user experience for content creators. The intuitive interface, combined with powerful features, streamlines the content management process, allowing users to focus on creating compelling content rather than wrestling with the platform.

In essence, MariaCMS represents a fusion of technological prowess and user-centric design, bringing together the strengths of Laravel, Vue, Inertia, and Tailwind CSS. Whether you are a developer seeking a robust framework or a content creator aiming for a seamless and enjoyable workflow, MariaCMS stands as a testament to the potential of modern content management systems. Embrace the future of web development with MariaCMS and unlock a world of possibilities for your digital projects.

## Other Features:
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
git clone https://github.com/mehedijaman/MariaCMS.git
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
DB_DATABASE=maria_cms
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
email : mail4mjaman@gmail.com
password : mehedi!@#
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
## Maintainer
- **[Mehedi Jaman](https://me.mehedipata.com/)**

# Built With
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

