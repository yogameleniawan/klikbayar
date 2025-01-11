<?php

namespace App\Http\Controllers\Backoffice;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $users = User::search(
            keyword: $request->search,
            columns: ["id", "name", "email"],
        )
        ->sort(
            sort_by: $request->sort_by ?? 'name',
            sort_order: $request->sort_order == 'ascending' ? 'ASC' : 'DESC'
        )
        ->paginate($request->length ?? 10);

        return Inertia::render("Backoffice/Users/Index", [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Backoffice/Users/Add");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            User::create($request->all());

            return back()->with('message', 'Data berhasil disimpan!');
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
        $user = User::find($id);

        return Inertia::render("Backoffice/Users/Edit", [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);

        $user->update($request->all());

        return back()->with(['code' => 'success','message' => 'User updated.']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);

        if (!$user) {
            return back()->withErrors(['message' => 'User not found.']);
        }

        $user->delete();

        return redirect()->route('users.index')->with('success', 'User deleted successfully.');
    }
}
