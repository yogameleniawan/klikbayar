<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index() {
        $banners = Banner::with('file')->get();

        return Inertia::render('Customer/Beranda', [
            'banners' => $banners
        ]);
    }

    public function detail($slug) {
        return Inertia::render('Customer/Detail/Index');
    }
}
