
export default [
  {
    url: "/dashboard",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
  },

  {
    name: "Category",
    icon: "ArchiveIcon",
    i18n: "Category",
    submenu: [
      {
        url: "/dashboard/category",
        name: "Browse",
        slug: "category",
        i18n: "Browse",
        permission: 'browse-employee'
      },
      {
        url: "/dashboard/category/create",
        name: "Create",
        slug: "category/create",
        i18n: "Create",
        permission: 'create-employee'
      },
    ]
  },



  {
    name: "Product",
    icon: "CoffeeIcon",
    i18n: "Product",
    submenu: [
      {
        url: "/dashboard/product",
        name: "Browse",
        slug: "product",
        i18n: "Browse",
        permission: 'browse-employee'
      },
      {
        url: "/dashboard/product/create",
        name: "Create",
        slug: "product/create",
        i18n: "Create",
        permission: 'browse-employee'
      },
    ]
  },


  {
      url: "/dashboard/employee",
      name: "Employee",
      slug: "employee",
      icon: "UserIcon",
      i18n: "Employee",
      permission: 'browse-employee'
  },



  {
      name: "Settings",
      icon: "SettingsIcon",
      i18n: "Settings",
      submenu: [
          {
              url: '/dashboard/settings/role',
              name: "Roles & Permissions",
              slug: "role",
              i18n: "Roles",
              permission: "browse-role"
          }
      ]
  },
]
