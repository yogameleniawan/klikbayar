import { BiWallet } from "react-icons/bi";
import { FiGrid, FiServer, FiSettings, FiUser, FiImage } from "react-icons/fi";

const menuItems = [
    {
        name: 'Dashboard',
        icon: <FiGrid size={20} />,
        path: `/admin/dashboard`,
        count: 3,
    },
    {
        name: 'Banners',
        icon: <FiImage size={20} />,
        path: `/admin/banners`,
    },
    {
        name: 'Payment Methods',
        icon: <BiWallet size={20} />,
        path: `/admin/payment-methods`,
    },
    {
        name: 'Users',
        icon: <FiUser size={20} />,
        path: `/admin/users`,
    },
    {
        name: 'Products',
        icon: <FiServer size={20} />,
        path: '/admin/products',
        submenu: [
            { name: 'Categories', path: `/admin/products/categories` },
            { name: 'Digiflazz', path: `/admin/products/digi` },
            { name: 'Catalog', path: `/admin/products/catalog` },
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
