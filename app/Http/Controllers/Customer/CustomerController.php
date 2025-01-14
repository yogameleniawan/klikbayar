<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index() {
        return Inertia::render('Customer/Beranda');
    }

    public function detail($slug) {
        return Inertia::render('Customer/Detail/Index');
    }
}
