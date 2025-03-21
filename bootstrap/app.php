<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;
use Illuminate\Http\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        channels: __DIR__ . '/../routes/channels.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);

        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->respond(function (Response $response, Throwable $exception, Request $request) {
            if (! app()->environment(['local', 'testing']) && in_array($response->getStatusCode(), [500, 503, 404, 403])) {
                if ($response->getStatusCode() === 404) {
                    return Inertia::render('Error', [
                        "statusCode" => $response->getStatusCode(),
                        "title" => "Ups! Halaman Tidak Ditemukan",
                        "description" => "Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin alamat URL salah, halaman telah dipindahkan, atau halaman tidak lagi tersedia.",
                    ])
                        ->toResponse($request)
                        ->setStatusCode($response->getStatusCode());
                }

                if ($response->getStatusCode() === 500) {
                    return Inertia::render('Error', [
                        "statusCode" => $response->getStatusCode(),
                        "title" => "Terjadi Kesalahan di Sisi Server",
                        "description" => "Maaf, sepertinya terjadi kesalahan dari sisi server aplikasi kami.",
                    ])
                        ->toResponse($request)
                        ->setStatusCode($response->getStatusCode());
                }

                if ($response->getStatusCode() === 503) {
                    return Inertia::render('Maintenance')
                        ->toResponse($request)
                        ->setStatusCode($response->getStatusCode());
                }
            } elseif ($response->getStatusCode() === 419) {
                return back()->with([
                    'message' => 'The page expired, please try again.',
                ]);
            }

            return $response;
        });
    })
    ->create();
