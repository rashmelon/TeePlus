export default [
    {
        url: "/",
        name: "Home",
        slug: "home",
        icon: "HomeIcon",
    },

    {
        url: "/order",
        name: "Order",
        icon: "CodesandboxIcon",
        i18n: "Order",
        slug: "order",
        permission: 'browse-order'
    },

    {
        url: "/category",
        name: "Category",
        icon: "ArchiveIcon",
        i18n: "Category",
        slug: "category",
        permission: 'browse-category'
    },

    {
        url: "/product",
        name: "Product",
        slug: "Product",
        i18n: "Product",
        icon: "CoffeeIcon",
        permission: 'browse-product'
    },


    {
        url: "/status",
        name: "Status",
        slug: "status",
        icon: "CheckCircleIcon",
        i18n: "Status",
        permission: 'browse-status'
    },


    {
        url: "/design",
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
                url: "/shipping",
                slug: "shipping",
                name: "Shipping Methods",
                i18n: "Shipping Methods",
            },
            {
                permission: "browse-shipping-price",
                url: "/shipping-price",
                slug: "shipping-price",
                name: "Shipping Price",
                i18n: "Shipping Price",
            }
        ]
    },

    {
        url: "/user",
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
                url: '/settings/role',
                name: "Roles & Permissions",
                slug: "role",
                i18n: "Roles",
            }
        ]
    },
]
