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
                    path: '/',
                    name: 'home',
                    component: () => import('./views/Home.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home', active: true},
                        ],
                        pageTitle: 'Home',
                        pageTitle_i18n: 'Home'
                    },
                },

                {
                    path: '/user',
                    name: 'user',
                    component: () => import('./views/user/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'User', active: true, i18n: 'User'},
                        ],
                        pageTitle: 'User',
                        pageTitle_i18n: 'User',
                        permission: 'browse-user'
                    }
                },
                {
                    path: '/user/create',
                    name: 'add-user',
                    component: () => import('./views/user/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'User', url: '/user', i18n: 'User'},
                            {title: 'Add Employee', active: true, i18n: 'AddUser'},
                        ],
                        pageTitle: 'Add User',
                        pageTitle_i18n: 'AddUser',
                        permission: 'create-user'
                    }
                },
                {
                    path: '/user/:id',
                    name: 'view-user',
                    component: () => import('./views/user/view.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'User', url: '/user', i18n: 'User'},
                            {title: 'Profile', active: true, i18n: 'UserProfile'},
                        ],
                        pageTitle: 'Edit User',
                        pageTitle_i18n: 'editUser',
                        permission: 'view-user'
                    }
                },
                {
                    path: '/user/:id/edit',
                    name: 'edit-user',
                    component: () => import('./views/user/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'User', url: '/user', i18n: 'User'},
                            {title: 'Edit User', active: true, i18n: 'editUser'},
                        ],
                        pageTitle: 'Edit User',
                        pageTitle_i18n: 'editUser',
                        permission: 'edit-user'
                    }
                },
                {
                    path: '/user/:id/products',
                    name: 'edit-user-product',
                    component: () => import('./views/user_product/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'User', url: '/user', i18n: 'User'},
                            {title: 'user product', active: true, i18n: 'user product'},
                        ],
                        pageTitle: 'User Products',
                        pageTitle_i18n: 'User Products',
                        permission: 'edit-seller-product'
                    }
                },





                {
                    path: '/category',
                    name: 'category',
                    component: () => import('./views/category/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Category', active: true, i18n: 'Category'},
                        ],
                        pageTitle: 'Category',
                        pageTitle_i18n: 'Category',
                        permission: 'browse-category'
                    }
                },
                {
                    path: '/category/create',
                    name: 'create-category',
                    component: () => import('./views/category/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Category', url: '/category', i18n: 'Category'},
                            {title: 'Create', active: true, i18n: 'Create'},
                        ],
                        pageTitle: 'Create Category',
                        pageTitle_i18n: 'Create Category',
                        permission: 'create-category'
                    }
                },
                {
                    path: '/category/edit/:id',
                    name: 'edit-category',
                    component: () => import('./views/category/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Category', url: '/category', i18n: 'Category'},
                            {title: 'Edit', active: true, i18n: 'Edit'},
                        ],
                        pageTitle: 'Edit Category',
                        pageTitle_i18n: 'Edit Category',
                        permission: 'edit-category'
                    }
                },
                {
                    path: '/category/view/:id',
                    name: 'view-category',
                    component: () => import('./views/category/view.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Category', url: '/category', i18n: 'Category'},
                            {title: 'View', active: true, i18n: 'View'},
                        ],
                        pageTitle: 'View Category',
                        pageTitle_i18n: 'View Category',
                        permission: 'view-category'
                    }
                },


                {
                    path: '/product',
                    name: 'product',
                    component: () => import('./views/product/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Product', active: true, i18n: 'Product'},
                        ],
                        pageTitle: 'Product',
                        pageTitle_i18n: 'Product',
                        permission: 'browse-product' //temperory
                    }
                },
                {
                    path: '/product/create',
                    name: 'create-product',
                    component: () => import('./views/product/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Product', url: '/product', i18n: 'Product'},
                            {title: 'Create', active: true, i18n: 'Create'},
                        ],
                        pageTitle: 'Create Product',
                        pageTitle_i18n: 'Create Product',
                        permission: 'create-product' //temperory
                    }
                },
                {
                    path: '/product/edit/:id',
                    name: 'edit-product',
                    component: () => import('./views/product/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Product', url: '/product', i18n: 'Product'},
                            {title: 'Edit', active: true, i18n: 'Edit'},
                        ],
                        pageTitle: 'Edit Product',
                        pageTitle_i18n: 'Edit Product',
                        permission: 'edit-product'
                    }
                },
                {
                    path: '/product/view/:id',
                    name: 'view-product',
                    component: () => import('./views/product/view.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Product', url: '/product', i18n: 'Product'},
                            {title: 'View', active: true, i18n: 'View'},
                        ],
                        pageTitle: 'View Product',
                        pageTitle_i18n: 'View Product',
                        permission: 'view-product'
                    }
                },


                {
                    path: '/shipping',
                    name: 'shipping',
                    component: () => import('./views/shipping/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Shipping', active: true, i18n: 'Shipping'},
                        ],
                        pageTitle: 'Shipping',
                        pageTitle_i18n: 'Shipping',
                        permission: 'browse-shipping-method'
                    }
                },
                {
                    path: '/shipping/create',
                    name: 'create-shipping',
                    component: () => import('./views/shipping/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Shipping', url: '/shipping', i18n: 'Shipping'},
                            {title: 'Create', active: true, i18n: 'Create'},
                        ],
                        pageTitle: 'Create Shipping',
                        pageTitle_i18n: 'Create Shipping',
                        permission: 'create-shipping-method'
                    }
                },
                {
                    path: '/shipping/edit/:id',
                    name: 'edit-shipping',
                    component: () => import('./views/shipping/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Shipping', url: '/shipping', i18n: 'Shipping'},
                            {title: 'Edit', active: true, i18n: 'Edit'},
                        ],
                        pageTitle: 'Edit Shipping',
                        pageTitle_i18n: 'Edit Shipping',
                        permission: 'edit-shipping-method'
                    }
                },


                {
                    path: '/shipping-price',
                    name: 'shipping-price',
                    component: () => import('./views/shipping-price/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Shipping Price', active: true, i18n: 'Shipping Price'},
                        ],
                        pageTitle: 'Shipping Price',
                        pageTitle_i18n: 'Shipping Price',
                        permission: 'browse-shipping-method'
                    }
                },
                {
                    path: '/shipping-price/create',
                    name: 'create-shipping-price',
                    component: () => import('./views/shipping-price/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Shipping Price', url: '/shipping-price', i18n: 'Shipping Price'},
                            {title: 'Create', active: true, i18n: 'Create'},
                        ],
                        pageTitle: 'Create Shipping price',
                        pageTitle_i18n: 'Create Shipping price',
                        permission: 'create-shipping-price'
                    }
                },
                {
                    path: '/shipping-price/edit/:id',
                    name: 'edit-shipping-price',
                    component: () => import('./views/shipping-price/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Shipping', url: '/shipping-price', i18n: 'Shipping Price'},
                            {title: 'Edit', active: true, i18n: 'Edit'},
                        ],
                        pageTitle: 'Edit Shipping price',
                        pageTitle_i18n: 'Edit Shipping price',
                        permission: 'edit-shipping-price'
                    }
                },
                {
                    path: '/shipping-price/view/:id',
                    name: 'view-shipping-price',
                    component: () => import('./views/shipping-price/view.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Shipping Price', url: '/shipping-price', i18n: 'Shipping Price'},
                            {title: 'View', active: true, i18n: 'View'},
                        ],
                        pageTitle: 'View Shipping Price',
                        pageTitle_i18n: 'View Shipping Price',
                        permission: 'view-shipping-price'
                    }
                },


                {
                    path: '/status',
                    name: 'status',
                    component: () => import('./views/status/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Status', active: true, i18n: 'Status'},
                        ],
                        pageTitle: 'Status',
                        pageTitle_i18n: 'Status',
                        permission: 'browse-status'
                    }
                },
                {
                    path: '/status/create',
                    name: 'create-status',
                    component: () => import('./views/status/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Status', url: '/status', i18n: 'Status'},
                            {title: 'Create', active: true, i18n: 'Create'},
                        ],
                        pageTitle: 'Create Status',
                        pageTitle_i18n: 'Create Status',
                        permission: 'create-status'
                    }
                },
                {
                    path: '/status/edit/:id',
                    name: 'edit-status',
                    component: () => import('./views/status/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Status', url: '/status', i18n: 'Status'},
                            {title: 'Edit', active: true, i18n: 'Edit'},
                        ],
                        pageTitle: 'Edit Status',
                        pageTitle_i18n: 'Edit Status',
                        permission: 'edit-status'
                    }
                },


                {
                    path: '/design',
                    name: 'design',
                    component: () => import('./views/design/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Design', active: true, i18n: 'Design'},
                        ],
                        pageTitle: 'Design',
                        pageTitle_i18n: 'Design',
                        permission: 'browse-design'
                    }
                },
                {
                    path: '/design/create',
                    name: 'create-design',
                    component: () => import('./views/design/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Design', url: '/design', i18n: 'Design'},
                            {title: 'Create', active: true, i18n: 'Create'},
                        ],
                        pageTitle: 'Create Design',
                        pageTitle_i18n: 'Create Design',
                        permission: 'create-design'
                    }
                },
                {
                    path: '/design/edit/:id',
                    name: 'edit-design',
                    component: () => import('./views/design/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Design', url: '/design', i18n: 'Design'},
                            {title: 'Edit', active: true, i18n: 'Edit'},
                        ],
                        pageTitle: 'Edit Design',
                        pageTitle_i18n: 'Edit Design',
                        permission: 'edit-design'
                    }
                },
                {
                    path: '/design/view/:id',
                    name: 'view-design',
                    component: () => import('./views/design/view.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Design', url: '/design', i18n: 'Design'},
                            {title: 'View', active: true, i18n: 'View'},
                        ],
                        pageTitle: 'View Design',
                        pageTitle_i18n: 'View Design',
                        permission: 'view-design'
                    }
                },



                {
                    path: '/returned',
                    name: 'returned',
                    component: () => import('./views/order/brawse-returned'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Returned', active: true, i18n: 'Returned'},
                        ],
                        pageTitle: 'Browse Returned',
                        pageTitle_i18n: 'Browse Returned',
                        permission: 'browse-order'
                    }
                },


                {
                    path: '/order',
                    name: 'order',
                    component: () => import('./views/order/browse.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Order', active: true, i18n: 'Order'},
                        ],
                        pageTitle: 'Browse Order',
                        pageTitle_i18n: 'Browse Order',
                        permission: 'browse-order'
                    }
                },



                {
                    path: '/order/create',
                    name: 'create-order',
                    component: () => import('./views/order/create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Order', url: '/order', i18n: 'Order'},
                            {title: 'Create', active: true, i18n: 'Create'},
                        ],
                        pageTitle: 'Create Order',
                        pageTitle_i18n: 'Create Order',
                        permission: 'create-order'
                    }
                },




                {
                    path: '/order/view/:id',
                    name: 'view-order',
                    component: () => import('./views/order/view.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Order', url: '/order', i18n: 'Order'},
                            {title: 'View', active: true, i18n: 'View'},
                        ],
                        pageTitle: 'View Order',
                        pageTitle_i18n: 'View Order',
                        permission: 'view-order'
                    }
                },



                {
                    path: '/order/edit/:id',
                    name: 'edit-order',
                    component: () => import('./views/order/edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Order', url: '/order', i18n: 'Order'},
                            {title: 'Edit', active: true, i18n: 'Edit'},
                        ],
                        pageTitle: 'Edit Order',
                        pageTitle_i18n: 'Edit Order',
                        permission: 'edit-order'
                    }
                },


                {
                    path: '/order/return/:id',
                    name: 'return-order',
                    component: () => import('./views/order/return.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '', i18n: 'Home'},
                            {title: 'Order', url: '/order', i18n: 'Order'},
                            {title: 'Return', active: true, i18n: 'Return'},
                        ],
                        pageTitle: 'Return Order',
                        pageTitle_i18n: 'Return Order',
                        // permission: 'return-order'
                    }
                },





                {
                    path: '/settings/role',
                    name: 'role',
                    component: () => import('./views/settings/Role/Roles.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: ''},
                            {title: 'Settings'},
                            {title: 'Roles', active: true}
                        ],
                        pageTitle: "Roles",
                        permission: 'browse-role'
                    }
                },
                {
                    path: '/settings/role/create',
                    name: 'create-role',
                    component: () => import('./views/settings/Role/Create.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: ''},
                            {title: 'Settings'},
                            {title: 'Roles', url: '/settings/role'},
                            {title: 'Create Role', active: true}
                        ],
                        pageTitle: "Create Role",
                        permission: 'create-role'
                    }
                },
                {
                    path: '/settings/role/:id',
                    name: 'view-role',
                    component: () => import('./views/settings/Role/View.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: ''},
                            {title: 'Settings'},
                            {title: 'Roles', url: '/settings/role'},
                            {title: 'Role Information', active: true}
                        ],
                        pageTitle: "Role Information",
                        permission: 'view-role'
                    }
                },
                {
                    path: '/settings/role/edit/:id',
                    name: 'edit-role',
                    component: () => import('./views/settings/Role/Edit.vue'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: ''},
                            {title: 'Settings'},
                            {title: 'Roles', url: '/settings/role'},
                            {title: 'Edit Role', active: true}
                        ],
                        pageTitle: "Edit Role",
                        permission: 'edit-role'
                    }
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: () => import('./views/profile/profile'),
                    beforeEnter: guard,
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: ''},
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
                            path: '/login',
                            name: 'pageLogin',
                            component: () => import('./views/pages/Login.vue')
                        },
                        {
                            path: '/error-403',
                            name: 'pageError403',
                            component: () => import('./views/pages/NotAuthorized.vue')
                        },
                        {
                            path: '/error-404',
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
        }]
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
