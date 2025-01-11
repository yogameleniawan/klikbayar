import { FiGrid, FiServer, FiSettings, FiUser } from "react-icons/fi";

const menuItems = [
    {
        name: 'Dashboard',
        icon: <FiGrid size={20} />,
        path: '/',
        count: 3,
    },
    {
        name: 'Profile',
        icon: <FiUser size={20} />,
        path: '/profile',
        submenu: [
            { name: 'View Profile', path: '/profile/view' },
            { name: 'Edit Profile', path: '/profile/edit' },
        ],
    },
    {
        name: 'Product',
        icon: <FiServer size={20} />,
        path: '/profile',
        submenu: [
            { name: 'View Profile', path: '/profile/view' },
            { name: 'Edit Profile', path: '/profile/edit' },
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
