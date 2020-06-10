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
          path: '/dashboard/employee',
          name: 'employee',
          component: () => import('./views/employee/browse.vue'),
          beforeEnter: guard,
          meta: {
            breadcrumb: [
              {title: 'Home', url: '/dashboard', i18n: 'Home'},
              {title: 'Employee', active: true, i18n: 'Employee'},
            ],
            pageTitle: 'Employee',
            pageTitle_i18n: 'Employee',
            // permission: 'browse-employee'
          }
        },
        {
          path: '/dashboard/employee/create',
          name: 'add-employee',
          component: () => import('./views/employee/create.vue'),
          beforeEnter: guard,
          meta: {
            breadcrumb: [
              {title: 'Home', url: '/dashboard', i18n: 'Home'},
              {title: 'Employee', url: '/dashboard/employee', i18n: 'Employee'},
              {title: 'Add Employee', active: true, i18n: 'AddEmployee'},
            ],
            pageTitle: 'Add Employee',
            pageTitle_i18n: 'AddEmployee',
            // permission: 'create-employee'
          }
        },
        {
          path: '/dashboard/employee/:id',
          name: 'view-employee',
          component: () => import('./views/employee/view.vue'),
          beforeEnter: guard,
          meta: {
            breadcrumb: [
              {title: 'Home', url: '/dashboard', i18n: 'Home'},
              {title: 'Employee', url: '/dashboard/employee', i18n: 'Employee'},
              {title: 'Profile', active: true, i18n: 'EmployeeProfile'},
            ],
            pageTitle: 'Edit Employee',
            pageTitle_i18n: 'editEmployee',
            // permission: 'view-employee'
          }
        },
        {
          path: '/dashboard/employee/:id/edit',
          name: 'edit-employee',
          component: () => import('./views/employee/edit.vue'),
          beforeEnter: guard,
          meta: {
            breadcrumb: [
              {title: 'Home', url: '/dashboard', i18n: 'Home'},
              {title: 'Employee', url: '/dashboard/employee', i18n: 'Employee'},
              {title: 'Edit Employee', active: true, i18n: 'editEmployee'},
            ],
            pageTitle: 'Edit Employee',
            pageTitle_i18n: 'editEmployee',
            // permission: 'edit-employee'
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
            permission: 'browse-category' //temperory
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
            permission: 'create-category' //temperory
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
            permission: 'edit-category' //temperory
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
            // permission: 'browse-category' //temperory
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
            // permission: 'create-category' //temperory
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
            permission: 'view-role'
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
