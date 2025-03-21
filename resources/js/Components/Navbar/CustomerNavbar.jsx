import React from "react";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Link,
    Button,
    Divider,
    Tooltip,
    Input,
    Dropdown,
    DropdownTrigger,
    Avatar,
    DropdownMenu,
    DropdownItem
} from "@heroui/react";
import { cn } from "@heroui/react";
import { router, usePage } from "@inertiajs/react";
import SearchModal from "../Modal/SearchModal";
import { ClipboardList, GroupChat, Home, Moon, Sun } from "../Icons/Icon";

const AcmeIcon = ({ size = 32, width, height, ...props }) => (
    <svg fill="none" height={size || height} viewBox="0 0 32 32" width={size || width} {...props}>
        <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);

const menuItems = [
    {
        title: "Beranda",
        path: "/",
        icon: <Home />
    },
    {
        title: "Cek Transaksi",
        path: "/check-transaction",
        icon: <ClipboardList />
    },
    {
        title: "Tentang Kami",
        path: "/about-us",
        icon: <GroupChat />
    },
];

const CustomerNavbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const user = usePage().props?.auth?.user;

    const [darkMode, setDarkMode] = React.useState(() => {
        const storedPreference = localStorage.getItem('darkMode');
        return storedPreference ? JSON.parse(storedPreference) : true;
    });

    React.useEffect(() => {
        if (darkMode) {
            localStorage.setItem('darkMode', true)
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('darkMode', false)
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Navbar
            {...props}
            classNames={{
                base: cn("border-default-100", {
                    "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
                }),
                wrapper: "w-full justify-center",
                item: "hidden md:flex",
            }}
            height="60px"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarBrand>
                <div className="rounded-full bg-foreground text-background">
                    <AcmeIcon size={34} />
                </div>
                <span className="ml-2 text-small font-medium">KlikBayar</span>
            </NavbarBrand>

            <NavbarContent justify="center" className="flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 hidden h-11 gap-4 rounded-full border-small border-default-200/20 bg-background/60 px-4 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50 md:flex">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item.title}-${index}`}>
                        <Link className={`w-full ${item.path.includes(usePage().url.split("?")[0]) ? 'text-foreground' : 'text-default-500'}`} href={item.path} size="md">
                            <div className="flex items-center gap-2">
                                {item.icon}
                                {item.title}
                            </div>
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent className="hidden md:flex" justify="end">
                <NavbarItem className="ml-2 !flex gap-2">
                    <Tooltip content={"Search Product"}>
                        <SearchModal />
                    </Tooltip>
                    <Tooltip content={darkMode ? "Light" : "Dark"}>
                        <Button isIconOnly onPress={toggleDarkMode} className="rounded-full bg-default-200 dark:bg-default-100" >
                            {darkMode ?
                                <Sun size={20} className='cursor-pointer' /> : <Moon size={20} className='cursor-pointer text-default-500' />
                            }
                        </Button>
                    </Tooltip>
                    {
                        user ? <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-thin">Signed in as</p>
                                    <p className="font-semibold">{user.email}</p>
                                </DropdownItem>
                                <DropdownItem key="logout" color="danger" onPress={() => {
                                    router.post(route(`logout`))
                                }}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown> : <Link href={route('login')} >
                            <Button className="bg-default-200 hover:bg-default-100 dark:bg-default-100 dark:hover:bg-default-300 text-default-500" radius="full" variant="light">
                                Sign In
                            </Button>
                        </Link>
                    }

                </NavbarItem>
            </NavbarContent>

            <NavbarMenuToggle className="text-default-400 md:hidden" />

            <NavbarMenu className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
                <NavbarMenuItem className="mb-4 self-center flex gap-2">
                    <Tooltip content={darkMode ? "Light" : "Dark"}>
                        <Button isIconOnly onPress={toggleDarkMode} className="rounded-full bg-default-200 dark:bg-default-100" >
                            {darkMode ?
                                <Sun size={20} className='cursor-pointer' /> : <Moon size={20} className='cursor-pointer text-default-500' />
                            }
                        </Button>
                    </Tooltip>
                    <SearchModal />
                </NavbarMenuItem>
                <NavbarMenuItem>
                    {
                        user ? <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-thin">Signed in as</p>
                                    <p className="font-semibold">{user.email}</p>
                                </DropdownItem>
                                <DropdownItem key="logout" color="danger" onPress={() => {
                                    router.post(route(`logout`))
                                }}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown> :
                            <Button fullWidth as={Link} href={route('login')} variant="faded">
                                Sign In
                            </Button>
                    }

                </NavbarMenuItem>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.title}-${index}`}>
                        <Link className="mb-2 w-full text-default-500" href={item.path} size="md">
                            {item.title}
                        </Link>
                        {index < menuItems.length - 1 && <Divider className="opacity-50" />}
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default CustomerNavbar
