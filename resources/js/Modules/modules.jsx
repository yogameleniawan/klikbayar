import { FiGrid, FiServer, FiSettings, FiUser, FiImage } from "react-icons/fi";

const menuItems = [
    {
        name: 'Dashboard',
        icon: <FiGrid size={20} />,
        path: `${route('backoffice.dashboard.index')}`,
        count: 3,
    },
    {
        name: 'Banners',
        icon: <FiImage size={20} />,
        path: `${route('backoffice.banners.index')}`,
    },
    {
        name: 'Users',
        icon: <FiUser size={20} />,
        path: `${route('backoffice.users.index')}`,
    },
    {
        name: 'Products',
        icon: <FiServer size={20} />,
        path: '/products',
        submenu: [
            { name: 'Categories', path: `${route('backoffice.products.categories.index')}` },
            { name: 'Digiflazz', path: `${route('backoffice.products.digi.index')}` },
            { name: 'Catalog', path: `${route('backoffice.products.catalog.index')}` },
        ],
    },
    {
        name: 'Settings',
        icon: <FiSettings size={20} />,
        path: '/settings',
        badge: "News",
    },
];

export { menuItems };
