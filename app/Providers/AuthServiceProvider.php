<?php

namespace App\Providers;

use App\Order;
use App\Policies\OrderPolicy;
use App\Policies\PriceCombinationPolicy;
use App\Policies\PrintCriteriaPolicy;
use App\Policies\ProductPolicy;
use App\Policies\ShippingMethodPolicy;
use App\Policies\StatusPolicy;
use App\Policies\UserPolicy;
use App\Policies\PermissionPolicy;
use App\Policies\RolePolicy;
use App\Policies\UserProductPolicy;
use App\PriceCombination;
use App\PrintCriteria;
use App\Product;
use App\ShippingMethod;
use App\Status;
use App\User;
use App\UserProduct;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        User::class => UserPolicy::class,
        Role::class => RolePolicy::class,
        Permission::class => PermissionPolicy::class,
        PriceCombination::class => PriceCombinationPolicy::class,
        PrintCriteria::class => PrintCriteriaPolicy::class,
        Product::class => ProductPolicy::class,
        UserProduct::class => UserProductPolicy::class,
        ShippingMethod::class => ShippingMethodPolicy::class,
        Status::class => StatusPolicy::class,
        Order::class => OrderPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
    }
}
