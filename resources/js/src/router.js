import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store';
import axios from "./http/axios/index.js"

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/dashboard',
                    name: 'home',
                    component: () => import('./views/Home.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home', active: true},
                        ],
                        pageTitle: 'Home',
                        pageTitle_i18n: 'Home'
                    },
                },
                {
                    path: '/dashboard/package',
                    name: 'package',
                    component: () => import('./views/package/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'Package', active: true, i18n: 'Package'},
                        ],
                        pageTitle: 'Package',
                        pageTitle_i18n: 'Package',
                        permission: 'browse-package'
                    }
                },
                {
                    path: '/dashboard/package/create',
                    name: 'create-package',
                    component: () => import('./views/package/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'Package', i18n: 'Package'},
                            {title: 'Create', active: true},
                        ],
                        pageTitle: 'Create Package',
                        pageTitle_i18n: 'Package',
                        permission: 'create-package'
                    }
                },
                {
                    path: '/dashboard/user',
                    name: 'user',
                    component: () => import('./views/user/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'User', active: true, i18n: 'User'},
                        ],
                        pageTitle: 'User',
                        pageTitle_i18n: 'User',
                        permission: 'browse-user'
                    }
                },
                {
                    path: '/dashboard/user/create',
                    name: 'add-user',
                    component: () => import('./views/user/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'User', url: '/dashboard/user', i18n: 'User'},
                            {title: 'Add Employee', active: true, i18n: 'AddUser'},
                        ],
                        pageTitle: 'Add User',
                        pageTitle_i18n: 'AddUser',
                        permission: 'create-user'
                    }
                },
                {
                    path: '/dashboard/user/:id',
                    name: 'view-user',
                    component: () => import('./views/user/view.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'User', url: '/dashboard/user', i18n: 'User'},
                            {title: 'Profile', active: true, i18n: 'UserProfile'},
                        ],
                        pageTitle: 'Edit User',
                        pageTitle_i18n: 'editUser',
                        permission: 'view-user'
                    }
                },
                {
                    path: '/dashboard/user/:id/edit',
                    name: 'edit-user',
                    component: () => import('./views/user/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'User', url: '/dashboard/user', i18n: 'User'},
                            {title: 'Edit User', active: true, i18n: 'editUser'},
                        ],
                        pageTitle: 'Edit User',
                        pageTitle_i18n: 'editUser',
                        permission: 'edit-user'
                    }
                },



                {
                    path: '/dashboard/user/:id/products',
                    name: 'edit-user-product',
                    component: () => import('./views/user_product/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'User', url: '/dashboard/user', i18n: 'User'},
                            {title: 'user product', active: true, i18n: 'user product'},
                        ],
                        pageTitle: 'User Products',
                        pageTitle_i18n: 'User Products',
                        permission: 'edit-seller-product'
                    }
                },






                {
                    path: '/dashboard/category',
                    name: 'category',
                    component: () => import('./views/category/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'Category', active: true, i18n: 'Category'},
                        ],
                        pageTitle: 'Category',
                        pageTitle_i18n: 'Category',
                        permission: 'browse-category'
                    }
                },
                {
                    path: '/dashboard/category/create',
                    name: 'create-category',
                    component: () => import('./views/category/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'Category', url: '/dashboard/category', i18n: 'Category'},
                            {title: 'Create', active: true, i18n: 'Create'},
                        ],
                        pageTitle: 'Create Category',
                        pageTitle_i18n: 'Create Category',
                        permission: 'create-category'
                    }
                },
                {
                    path: '/dashboard/category/edit/:id',
                    name: 'edit-category',
                    component: () => import('./views/category/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'Category', url: '/dashboard/category', i18n: 'Category'},
                            {title: 'Edit', active: true, i18n: 'Edit'},
                        ],
                        pageTitle: 'Edit Category',
                        pageTitle_i18n: 'Edit Category',
                        permission: 'edit-category'
                    }
                },
                {
                    path: '/dashboard/category/view/:id',
                    name: 'view-category',
                    component: () => import('./views/category/view.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'Category', url: '/dashboard/category', i18n: 'Category'},
                            {title: 'View', active: true, i18n: 'View'},
                        ],
                        pageTitle: 'View Category',
                        pageTitle_i18n: 'View Category',
                        permission: 'view-category'
                    }
                },


                {
                    path: '/dashboard/product',
                    name: 'product',
                    component: () => import('./views/product/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'Product', active: true, i18n: 'Product'},
                        ],
                        pageTitle: 'Product',
                        pageTitle_i18n: 'Product',
                        permission: 'browse-product' //temperory
                    }
                },
                {
                    path: '/dashboard/product/create',
                    name: 'create-product',
                    component: () => import('./views/product/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'Product', url: '/dashboard/product', i18n: 'Product'},
                            {title: 'Create', active: true, i18n: 'Create'},
                        ],
                        pageTitle: 'Create Product',
                        pageTitle_i18n: 'Create Product',
                        permission: 'create-product' //temperory
                    }
                },
                {
                    path: '/dashboard/product/edit/:id',
                    name: 'edit-product',
                    component: () => import('./views/product/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'Product', url: '/dashboard/product', i18n: 'Product'},
                            {title: 'Edit', active: true, i18n: 'Edit'},
                        ],
                        pageTitle: 'Edit Product',
                        pageTitle_i18n: 'Edit Product',
                        permission: 'edit-product'
                    }
                },
                {
                    path: '/dashboard/product/view/:id',
                    name: 'view-product',
                    component: () => import('./views/product/view.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'Product', url: '/dashboard/product', i18n: 'Product'},
                            {title: 'View', active: true, i18n: 'View'},
                        ],
                        pageTitle: 'View Product',
                        pageTitle_i18n: 'View Product',
                        permission: 'view-product'
                    }
                },



                {
                    path: '/dashboard/shipping',
                    name: 'shipping',
                    component: () => import('./views/shipping/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'Shipping', active: true, i18n: 'Shipping'},
                        ],
                        pageTitle: 'Shipping',
                        pageTitle_i18n: 'Shipping',
                        permission: 'browse-shipping-method'
                    }
                },
                {
                    path: '/dashboard/shipping/create',
                    name: 'create-shipping',
                    component: () => import('./views/shipping/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard', i18n: 'Home'},
                            {title: 'Shipping', url: '/dashboard/shipping', i18n: 'Shipping'},
                            {title: 'Create', active: true, i18n: 'Create'},
                        ],
                        pageTitle: 'Create Shipping',
                        pageTitle_i18n: 'Create Shipping',
                        permission: 'create-shipping-method'
                    }
                },




                {
                    path: '/dashboard/settings/role',
                    name: 'role',
                    component: () => import('./views/settings/Role/Roles.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard'},
                            {title: 'Settings'},
                            {title: 'Roles', active: true}
                        ],
                        pageTitle: "Roles",
                        permission: 'browse-role'
                    }
                },
                {
                    path: '/dashboard/settings/role/create',
                    name: 'create-role',
                    component: () => import('./views/settings/Role/Create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard'},
                            {title: 'Settings'},
                            {title: 'Roles', url: '/dashboard/settings/role'},
                            {title: 'Create Role', active: true}
                        ],
                        pageTitle: "Create Role",
                        permission: 'create-role'
                    }
                },
                {
                    path: '/dashboard/settings/role/:id',
                    name: 'view-role',
                    component: () => import('./views/settings/Role/View.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard'},
                            {title: 'Settings'},
                            {title: 'Roles', url: '/dashboard/settings/role'},
                            {title: 'Role Information', active: true}
                        ],
                        pageTitle: "Role Information",
                        permission: 'view-role'
                    }
                },
                {
                    path: '/dashboard/settings/role/edit/:id',
                    name: 'edit-role',
                    component: () => import('./views/settings/Role/Edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard'},
                            {title: 'Settings'},
                            {title: 'Roles', url: '/dashboard/settings/role'},
                            {title: 'Edit Role', active: true}
                        ],
                        pageTitle: "Edit Role",
                        permission: 'edit-role'
                    }
                },
                {
                    path: '/dashboard/profile',
                    name: 'profile',
                    component: () => import('./views/profile/profile'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/dashboard'},
                            {title: 'Profile', active: true}
                        ],
                        pageTitle: "Profile"
                    }
                },


            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/dashboard/login',
                    name: 'pageLogin',
                    component: () => import('./views/pages/Login.vue')
                },
                {
                    path: '/dashboard/error-403',
                    name: 'pageError403',
                    component: () => import('./views/pages/NotAuthorized.vue')
                },
                {
                    path: '/dashboard/error-404',
                    name: 'pageError404',
                    component: () => import('./views/pages/Error404.vue')
                },
                {
                    path: '/verified',
                    name: 'verified',
                    component: () => import('./views/pages/verified.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
});

function can(permission) {
    let hasPermission = false;
    if (store.state.auth.AppActiveUser) {
        store.state.auth.AppActiveUser.roles[0].permissions.forEach((userPermission) => {
            if (userPermission.name === permission) {
                hasPermission = true;
            }
        });
    }
    return hasPermission;
}

function guard(to, from, next) {
    if (store.state.auth.accessToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.accessToken.accessToken}`;
        if (new Date(Date.now()) < new Date(store.state.auth.accessToken.token.expires_at)) {
            to.meta.permission === undefined || can(to.meta.permission) ? next() : next({name: 'pageError403'});
        } else {
            next({name: 'pageLogin'});
        }
    } else {
        next({name: 'pageLogin'});
    }
}


router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
});


export default router
