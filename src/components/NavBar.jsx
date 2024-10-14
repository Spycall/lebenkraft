import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo2 from "../assets/logo2.svg";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const user = {
    name: "Jay Mendy Bahago",
    email: "mendybahago@gmail.com",
    imageUrl:
        "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-1/316122864_6248783271818285_516707927033389484_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=VCcEvuamCu4Q7kNvgFqwINn&_nc_ht=scontent.fabv3-2.fna&_nc_gid=AyBqM-xlN6Tc6lPcVqMV3Bt&oh=00_AYD6IaZyEC9ClE9OEH9pzEcWaSK0jpqJGDVXf-Bbia5NhQ&oe=670E3DD3",
};
const navigation = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact us", path: "/contact" },
    { name: "Career", path: "/career" },
    { name: "Imprints", path: "/imprints" },
    { name: "Privacy policy", path: "/private" },
];
path: "/about";
const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
    return (
        <Disclosure as="header" className="bg-white shadow">
            <div className="mx-auto ">
                <div className="relative h-10 px-2 bg-[#5E2866] text-white flex justify-end ">
                    <div className="overflow-hidden whitespace-nowrap w-full flex items-center">
                        <div className="flex items-center gap-6 animate-marquee">
                            <div className="flex items-center gap-1">
                                <IoLocationOutline />
                                <p>
                                    Friedrich Wilhelm Street 3, 47051 Duisburg
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FiPhone />
                                <p>017620937596</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <CiMail />
                                <p>Intensivpflegedienst-lebenskraft@web.de</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[3rem] right-2 z-10 flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon
                            aria-hidden="true"
                            className="block h-8 w-8 group-data-[open]:hidden"
                        />
                        <XMarkIcon
                            aria-hidden="true"
                            className="hidden h-6 w-6 group-data-[open]:block"
                        />
                    </DisclosureButton>
                </div>

                <div className="flex w-full h-full pl-4 gap-7 items-center">
                    <img
                        src={logo2}
                        alt=""
                        className="w-[100px] md:w-[150px]"
                    />
                    <nav
                        aria-label="Global"
                        className="hidden lg:flex lg:space-x-8 w-full h-full "
                    >
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                aria-current={item.current ? "page" : undefined}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-[#5E2866] text-white h-full inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"
                                        : "text-gray-900 hover:bg-[#5E2866] hover:text-white h-full inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>

            <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? "page" : undefined}
                            className={classNames(
                                item.current
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                                "block rounded-md px-3 py-2 text-base font-medium"
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                    <div className="flex items-center px-4">
                        <div className="flex-shrink-0">
                            <img
                                alt=""
                                src={user.imageUrl}
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>
                        <button
                            type="button"
                            className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
