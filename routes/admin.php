<?php


use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\OptionController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\Role\RolesController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SpecialFeatureController;
use App\Http\Controllers\LanguageStoreController;
use App\Http\Controllers\User\AddressController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard/Index');
    })->name('dashboard');

    /**
     * Profile Route
     */
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::post('/profile', [ProfileController::class, 'avatarUpdate'])->name('profile.image');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::resource('address', AddressController::class, ['except' => ['update', 'index', 'edit']]);
    Route::post('/address/update/{address}', [AddressController::class, 'update'])->name('address.update');
});

Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    Route::middleware(['auth', 'verified'])->group(function () {
        /**
         * Role Route
         */
        Route::resource('role', RolesController::class, ['except' => ['update']]);
        Route::post('/role/update/{role}', [RolesController::class, 'update'])->name('role.update');

        /**
         * User Route
         */
        Route::resource('user', UserController::class, ['except' => ['update']]);
        Route::post('/user/update/{user}', [UserController::class, 'update'])->name('user.update');
        Route::post('/user/image/{user}', [UserController::class, 'avatarUpdate'])->name('user.image.update');
        Route::delete('/user/image/{user}', [UserController::class, 'avatarDelete'])->name('user.image.destroy');

        /**
         * Product Route
         */
        Route::resource('product', ProductController::class, ['except' => ['update']]);
        Route::post('/product/update/{product}', [ProductController::class, 'update'])->name('product.update');

        /**
         * Category Route
         */
        Route::resource('category', CategoryController::class, ['except' => ['update']]);
        Route::post('/category/update/{category}', [CategoryController::class, 'update'])->name('category.update');

        /**
         * Blog Route
         */
        Route::resource('blog', BlogController::class, ['except' => ['update']]);
        Route::post('/blog/update/{blog}', [BlogController::class, 'update'])->name('blog.update');

        /**
         * Contact Route
         */
        Route::resource('contact', ContactController::class, ['except' => ['update', 'store']]);
 

        /**
         * Special Feature Controller route
         */
        Route::resource('special-feature', SpecialFeatureController::class, ['except' => ['update']]);
        Route::post('/special-feature/update/{specialFeature}', [SpecialFeatureController::class, 'update'])->name('special-feature.update');

        /**
         * Options Route
         */
        Route::resource('option', OptionController::class, ['except' => ['update', 'show', 'edit']]);
        Route::post('/settings/update/{option:option_key}', [OptionController::class, 'update'])->name('option.update');
        Route::patch('/settings/update', [OptionController::class, 'bulkUpdate'])->name('option.bulk.update');


        Route::get('/general/settings', [OptionController::class, 'generalSettings'])->name('option.general');

        Route::get('/social/settings', [OptionController::class, 'socialSettings'])->name('option.social');

        Route::get('/model/settings', [OptionController::class, 'modelControll'])->name('option.model');

        Route::get('/pages', [PageController::class, 'index'])->name('pages.index');

        Route::post('mark-read', [NotificationController::class, 'markNotification'])
        ->name('notification.mark.read');
    });

    Route::post('mark-read', [NotificationController::class, 'markNotification'])
    ->name('notification.mark.read');

    Route::post('/language', LanguageStoreController::class)->name('language.store');

});
