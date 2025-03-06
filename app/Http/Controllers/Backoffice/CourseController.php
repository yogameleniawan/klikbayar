<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $courses = Course::search(
            keyword: $request->search,
            columns: ["id", "title"],
        )
        ->sort(
            sort_by: $request->sort_by ?? 'title',
            sort_order: $request->sort_order == 'ascending' ? 'ASC' : 'DESC'
        )
        ->paginate($request->length ?? 10);

        return Inertia::render("Backoffice/Courses/Index", [
            'courses' => $courses
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Backoffice/Courses/Add");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        dd($request->all());
        $request->validate([
            'title' => 'required|min:2',
            'thumbnail' => 'required',
        ]);

        try {
            Course::create($request->all());

            return back()->with('message', 'Data added successfuly');
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $course = Course::find($id);

        return Inertia::render("Backoffice/Courses/Edit", [
            'course' => $course
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required|min:2',
        ]);

        $course = Course::find($id);

        try {
            $course->update($request->all());

            return back()->with('message', 'Course updated successfuly');
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $course = Course::find($id);

        try {
            $course->delete();

            return back()->with('message', 'Course deleted successfuly');
        } catch (\Throwable $th) {
            return back()->withErrors(['message' =>  $th->getMessage()]);
        }
    }
}
