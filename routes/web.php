<?php

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index');
})->name('home');


Route::get("/blog/{id}", function (string $id) {
    //sample id is b20260101001 wherein "b" is a prefix "2026" is year "01" is month and "001" is unique identifier
    //does the render page will be "/blog/2026/01/b001" from the resources/js/pages/blog/[year]/[month]/[identifier].tsx file?
    //if extraction causes issue, return a 404 page
    // use regex to validate and extract parts
    if (strlen($id) !== 12 || !preg_match('/^b(\d{4})(\d{2})(\d+)$/', $id)) {
        abort(404);
    }

    $year = substr($id, 1, 4);
    $month = substr($id, 5, 2);
    $identifier = substr($id, 9);
    $pagePath = "blog/{$year}/{$month}/b{$identifier}";

    try {
        $exist = resource_path("js/Pages/{$pagePath}.tsx");
        if (!file_exists($exist)) {
            error_log("File does not exist: " . resource_path("js/Pages/{$pagePath}.tsx"));
            abort(404);
        }
        return Inertia::render($pagePath, [
            'id' => $id,
        ]);
    } catch (Exception $e) {
        error_log($e->getMessage());
        abort(404);
    }
})->name('blog.index');
