
export default [
  {
    url: "/dashboard",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
  },

  {
    url: "/dashboard/category",
    name: "Category",
    icon: "ArchiveIcon",
    i18n: "Category",
    slug: "category",
    permission: 'browse-category'
  },

  {
    url: "/dashboard/product",
    name: "Product",
    slug: "Product",
    i18n: "Product",
    icon: "CoffeeIcon",
    // permission: 'browse-product'
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
