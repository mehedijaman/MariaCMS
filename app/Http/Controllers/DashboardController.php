<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\Page;
use App\Models\Post;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\Permission;
use App\Models\Testimonial;

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
