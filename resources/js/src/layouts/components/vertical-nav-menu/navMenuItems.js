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
        url: "/dashboard/status",
        name: "Status",
        slug: "status",
        icon: "CheckCircleIcon",
        i18n: "Status",
        permission: 'browse-status'
    },


    {
        url: "/dashboard/design",
        name: "Design",
        slug: "design",
        icon: "GitlabIcon",
        i18n: "Design",
        // permission: 'browse-design'
    },


    {
        name: "Shipping",
        icon: "ShoppingCartIcon",
        i18n: "Shipping",
        permission: 'browse-shipping-method',
        submenu: [
            {
                permission: "browse-shipping-method",
                url: "/dashboard/shipping",
                slug: "shipping",
                name: "Shipping Methods",
                i18n: "Shipping Methods",
            },
            {
                permission: "browse-shipping-price",
                url: "/dashboard/shipping-price",
                slug: "shipping-price",
                name: "Shipping Price",
                i18n: "Shipping Price",
            }
        ]
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
