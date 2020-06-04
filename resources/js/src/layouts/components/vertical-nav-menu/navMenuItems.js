
export default [
  {
    url: "/dashboard",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
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
