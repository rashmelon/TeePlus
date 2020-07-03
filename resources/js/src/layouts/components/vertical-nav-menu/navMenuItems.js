
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
    permission: 'browse-product'
  },

  {
      url: "/dashboard/user",
      name: "User",
      slug: "user",
      icon: "UserIcon",
      i18n: "User",
      permission: 'browse-user'
  },


  {
      url: "/dashboard/shipping",
      name: "Shipping",
      slug: "shipping",
      icon: "ShoppingCartIcon",
      i18n: "Shipping",
      permission: 'browse-shipping-method'
  },



  {
      name: "Settings",
      icon: "SettingsIcon",
      i18n: "Settings",
      permission: "browse-role",
      submenu: [
          {
              permission: "browse-role",
              url: '/dashboard/settings/role',
              name: "Roles & Permissions",
              slug: "role",
              i18n: "Roles",
          }
      ]
  },
]
