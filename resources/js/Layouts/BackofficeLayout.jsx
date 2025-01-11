import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from '@inertiajs/react';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FiGrid, FiPlusCircle, FiMinusCircle, FiUser, FiSettings, FiServer, FiLogOut } from "react-icons/fi";
import { Button, Image, Tooltip } from '@nextui-org/react';

export default function BackofficeLayout({ children }) {
    const [isOpen, setIsOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState(null);
    const [darkMode, setDarkMode] = useState(() => {
        const storedPreference = localStorage.getItem('darkMode');
        return storedPreference ? JSON.parse(storedPreference) : true;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubMenu = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

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

    return (
        <div className="flex h-screen">
            <div
                className={`relative text-small bg-default-100 dark:text-default-500 ${isOpen ? 'w-64' : 'w-20'
                    } duration-300 flex flex-col p-4 items-center justify-between`}
            >
                <div className="flex flex-col gap-4">
                    <div className='absolute -right-3'>
                        <button
                            className="mb-4 text-default-500 hover:text-default-400 transition-all"
                            onClick={toggleSidebar}
                        >
                            {isOpen ? <IoIosArrowDropleftCircle size={30} /> : <IoIosArrowDroprightCircle size={30} />}
                        </button>
                    </div>

                    <div className="flex items-center gap-3 px-3">
                        <span tabindex="-1" className="flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 w-8 h-8 text-tiny bg-default text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default">
                            <Image className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100" alt="avatar" src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg" data-loaded="true" />
                        </span>
                        {
                            isOpen && (
                                <div className="flex max-w-full flex-col">
                                    <p className="text-small font-medium text-foreground">Kate Moore</p>
                                    <p className="text-tiny font-medium text-default-400">Customer Support</p>
                                </div>
                            )
                        }
                    </div>

                    <ul className="flex flex-col gap-2">
                        {menuItems.map((item, index) => (
                            <li key={index} className="flex flex-col">
                                <div
                                    className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-default/40 dark:hover:text-white cursor-pointer transition-all"
                                    onClick={() => item.submenu && toggleSubMenu(index)}
                                >
                                    {item.icon}
                                    {isOpen && <span className="flex-1">{item.name}</span>}
                                    {item.count && isOpen && (
                                        <div className="relative max-w-fit inline-flex items-center box-border whitespace-nowrap text-tiny rounded-full text-default-700 w-5 h-5 min-w-5 min-h-5 px-0 justify-center bg-default-500">
                                            <span className="font-normal px-0 flex-none text-default-50">{item.count}</span>
                                        </div>
                                    )}

                                    {item.badge && isOpen && (
                                        <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-1 h-6 text-tiny rounded-full text-default-700 bg-default-500">
                                            <span className="flex-1 font-normal px-1 text-default-50">{item.badge}</span>
                                        </div>
                                    )}

                                    {item.submenu && isOpen && (
                                        activeMenu === index ? <FiMinusCircle size={20} /> : <FiPlusCircle size={20} />
                                    )}
                                </div>

                                {item.submenu && (
                                    isOpen ?
                                        <ul
                                            className={`ml-8 mt-2 space-y-2 overflow-hidden ${activeMenu === index ? 'max-h-screen transition-all duration-300' : 'max-h-0'
                                                }`}
                                        >
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link href={subItem.path}>
                                                        <a className="flex items-center hover:text-default-500 gap-4 px-4 py-2 rounded-xl hover:bg-default/40 transition-all">
                                                            {isOpen && <span>{subItem.name}</span>}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul> :
                                        <ul
                                            className={`ml-8 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${activeMenu === index ? 'absolute z-10 max-h-screen p-4 translate-x-10 bg-default-100 w-52 rounded-xl transition-all' : '-z-10 absolute p-4 max-h-0 w-52 rounded-xl animate-pulse transition-all'
                                                }`}
                                        >
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link href={subItem.path}>
                                                        <a className="flex items-center hover:text-default-500 gap-4 px-4 py-2 rounded-xl hover:bg-default/40 transition-all">
                                                            <span>{subItem.name}</span>
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`flex ${isOpen ? 'flex-row' : 'flex-col'} gap-4`}>
                    <Tooltip content={darkMode ? "Dark" : "Light"}>
                        <Button isIconOnly onPress={toggleDarkMode} >
                            {darkMode ?
                                <MdLightMode size={20} className='cursor-pointer' /> : <MdDarkMode size={20} className='cursor-pointer text-default-500' />
                            }
                        </Button>
                    </Tooltip>
                    <Tooltip content="Logout">
                        <Button isIconOnly >
                            <FiLogOut size={20} className='text-default-500' />
                        </Button>
                    </Tooltip>
                </div>

            </div>

            <div className="flex-1 bg-white dark:bg-default-200 p-4 overflow-auto">
                {children}
            </div>
        </div>
    );
}
