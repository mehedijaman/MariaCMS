<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Page;
use App\Models\Permission;
use App\Models\Post;
use App\Models\Role;
use App\Models\Tag;
use App\Models\Testimonial;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'userCount' => User::count(),
            'roleCount' => Role::count(),
            'permissionCount' => Permission::count(),
            'pageCount' => Page::count(),
            'postCount' => Post::count(),
            'categoryCount' => Category::count(),
            'tagCount' => Tag::count(),
            'testimonialCount' => Testimonial::count(),
        ]);
    }
}
