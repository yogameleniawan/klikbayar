import { FiGrid, FiServer, FiSettings, FiUser, FiImage } from "react-icons/fi";

const menuItems = [
    {
        name: 'Dashboard',
        icon: <FiGrid size={20} />,
        path: '/admin/dashboard',
        count: 3,
    },
    {
        name: 'Banners',
        icon: <FiImage size={20} />,
        path: '/admin/banners',
    },
    {
        name: 'Users',
        icon: <FiUser size={20} />,
        path: '/admin/users',
    },
    {
        name: 'Product',
        icon: <FiServer size={20} />,
        path: '/products',
        submenu: [
            { name: 'Master Product', path: '/products/master' },
            { name: 'Digi Product', path: '/products/digi' },
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
