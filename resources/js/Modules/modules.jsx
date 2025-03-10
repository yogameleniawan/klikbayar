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
            { name: 'Master', path: `${route('backoffice.products.master.index')}` },
            { name: 'Categories', path: `${route('backoffice.products.categories.index')}` },
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
