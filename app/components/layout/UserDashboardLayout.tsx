// components/DashboardLayout.tsx
"use client"
import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation'; // Use next/navigation
import Link from 'next/link';
import { FaCircle, FaHandHoldingDollar, FaListCheck } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp, IoMdSettings } from "react-icons/io";
import Image from 'next/image';
import gmail from '../../../public/images/gmail.png'
import { MdCancel } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { FaAddressCard, FaTruck } from 'react-icons/fa';
import { RiCustomerServiceFill } from 'react-icons/ri';
import logo from '../../../public/images/logo5.svg';

interface UserDashboardLayoutProps {
    children: ReactNode;
}

const UserDashboardLayout = ({ children }: UserDashboardLayoutProps) => {

    const pathname = usePathname(); // Replaces router.pathname

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [openItems, setOpenItems] = useState<number | null>(null); // Track which item is open
    const [rotate, setRotate] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);



    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleNested = (index: number) => {
        setOpenItems(openItems === index ? null : index);
    };

    const toggleDropdownProfile = () => {
        setDropdownOpen(!dropdownOpen);
        setRotate(!rotate);
    };

    const menuItems = [
        {
            id: 1,
            title: 'Email Verification ',
            icon: gmail,
            nestedItems: [
                {
                    id: 1,
                    label: 'Email Verification',
                    href: '#',
                    moment: '20-12-2024',
                    text: 'Dear Bulqer 001 your email hasn&ansbt been verifield yet ensure you verify to enjoy the full package',
                    read: 'Read'
                }
            ],

        },
        {
            id: 2,
            title: 'In Transit',
            icon: gmail,
            nestedItems: [
                {
                    id: 2,
                    label: 'In Transit',
                    href: '#',
                    moment: '20-12-2024',
                    text: 'Dear Bulqer 001 your email hasn&ansbt been verifield yet ensure you verify to enjoy the full package',
                    read: 'Read'
                }
            ],
        },
        {
            id: 3,
            title: 'In Delivery',
            icon: gmail,
            nestedItems: [
                {
                    id: 3,
                    label: 'In Delivery',
                    href: '#',
                    moment: '20-12-2024',
                    text: 'Dear Bulqer 001 your email hasn&ansbt been verifield yet ensure you verify to enjoy the full package',
                    read: 'Read'
                }
            ],
        },
        {
            id: 4,
            title: 'Personal Info',
            icon: gmail,
            nestedItems: [
                {
                    id: 4,
                    label: 'Personal Info',
                    href: '#',
                    moment: '20-12-2024',
                    text: 'Dear Bulqer 001 your email hasn&ansbt been verifield yet ensure you verify to enjoy the full package',
                    read: 'Read'
                }
            ],
        },
        {
            id: 5,
            title: 'Delivery Id',
            icon: gmail,
            nestedItems: [
                {
                    id: 5,
                    label: 'Delivery Id',
                    href: '#',
                    moment: '20-12-2024',
                    text: 'Dear Bulqer 001 your email hasn&ansbt been verifield yet ensure you verify to enjoy the full package',
                    read: 'Read'
                }
            ],
        },
    ];

    return (
        <div className="flex h-screen">
            {/* Side Navigation */}
            <aside className="relative w-64 bg-gray-800 text-white flex flex-col p-4">

                {/* DASHBOARD LOGIN DROPDOWN GOES HERE */}
                {/* <div className="text-2xl font-semibold mb-6 bg-red-700">
                    Dashboard
                </div> */}
                <div className="text-2xl font-semibold mb-6 border-b-2 border-white">
                    <div className="hidden sm:flex justify-end flex-row py-3 pr-3 pl-2 Drops relative">
                        <div className="flex justify-center items-center flex-row">
                            <img
                                className="w-10 h-10"
                                src="https://i.ibb.co/QMddNDb/Ellipse-14.png"
                                alt="individual person"
                            />
                            <div className="ml-2">
                                <p className="text-base leading-4 font-semibold text-white">
                                   David Hulk
                                </p>
                                <p className="font-normal text-xs leading-3 text-white mt-1">
                                    david@alphahulk.com
                                </p>
                            </div>
                            <svg
                                onClick={toggleDropdownProfile}
                                className={`${rotate ? 'rotate-180' : ''
                                    } bg-white cursor-pointer transform duration-100 xl:ml-3 lg:ml-3 ml-2 p-1 rounded-full`}
                                width={20}
                                height={20}
                                viewBox="0 0 14 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L7 7L13 1"
                                    stroke="#1F2937"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-14 w-56 shadow-md rounded-b-lg z-50">
                                <ul className="pt-2 bg-gray-800 rounded-md text-sm shadow-sm shadow-white overflow-hidden">
                                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer text-white font-semibold">Tracking ID</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer text-white font-semibold">Orders</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer text-white font-semibold">
                                        <Link href="/pages/userdashboard/settings">
                                            Settings
                                        </Link>
                                    </li>
                                    <hr className="border-t" />
                                    <li className="bg-white text-center px-4 py-2 hover:bg-black hover:text-white cursor-pointer text-red-600 font-semibold">LOGOUT</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* DASHBOARD LOGIN DROPDOWN ENDS HERE  */}
                <nav className="flex flex-col space-y-4">
                    <Link href="/pages/userdashboard" className={`px-3 py-2 rounded-md flex items-center justify-start gap-4 ${pathname === '/pagesuserdashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        <span className="text-xl"> <MdDashboard /> </span> OVERVIEW
                    </Link>
                    <Link href="/pages/userdashboard/trackinglist" className={`px-3 py-2 rounded-md flex items-center justify-start gap-4 ${pathname === '/pages/userdashboard/trackinglist' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        <span className="text-xl"> <FaTruck /> </span> Tracking List
                    </Link>
                    <Link href="/pages/userdashboard/orderlist" className={`px-3 py-2 rounded-md flex items-center justify-start gap-4 ${pathname === '/pages/userdashboard/orderlist' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        <span className="text-xl"> <FaListCheck /> </span> Orders
                    </Link>
                    <Link href="/pages/userdashboard/useraddress" className={`px-3 py-2 rounded-md flex items-center justify-start gap-4 ${pathname === '/pages/userdashboard/useraddress' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        <span className="text-xl"> <FaAddressCard /> </span> Address
                    </Link>
                    <Link href="/pages/userdashboard/userpayment" className={`px-3 py-2 rounded-md flex items-center justify-start gap-4 ${pathname === '/pages/userdashboard/userpayment' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        <span className="text-xl"> <FaHandHoldingDollar /> </span> Payment Method
                    </Link>
                   
                </nav>

                <div className=" absolute flex flex-col w-full bottom-20 left-0 px-4">
                    <Link href="/pages/userdashboard/usercustomercare" className={`px-3 py-2 rounded-md flex items-center justify-start gap-4 ${pathname === '/pages/userdashboard/usercustomercare' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        <span className="text-xl"> <RiCustomerServiceFill /> </span> Customer Care
                    </Link>

                    <Link href="/pages/userdashboard/usersettings" className={`px-3 py-3 rounded-md flex items-center justify-start gap-4 ${pathname === '/pages/userdashboard/usersettings' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        <span className="text-xl"> <IoMdSettings /> </span> Settings
                    </Link>
                </div>

                <div className=" absolute flex items-center justify-center w-full bottom-0 left-0 pb-2">
                    <Image
                        src={logo}
                        alt="Description of the image"
                        width={150}
                        height={150}
                        className=""
                    />
                </div>

            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className=" p-4 shadow-md w-full flex flex-row items-center justify-between">
                    <div className="flex items-center justify-start w-full ">
                        <h1 className="text-xl font-semibold text-black"> Overview</h1>
                        <div className="sm:w-64 w-56 bg-white border rounded border-gray-700 flex items-center lg:mr-60 ml-6">
                            <input className="mx-2 focus:outline-none w-full py-2 text-sm leading-none placeholder-gray-600 text-gray-600" placeholder="Search here" />
                            <svg className="mr-2" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14 14L10 10" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex items-end justify-end w-full  pr-4">
                        <div className="relative">
                            <button
                                aria-label="show notifications"
                                className="cursor-pointer items-center justify-between gap-x-4 flex w-20 h-6 xl:w-auto xl:h-auto text-black "
                                onClick={toggleDropdown}
                            >
                                <p className="font-semibold">Notifications</p>
                                <svg
                                    width={18}
                                    height={20}
                                    viewBox="0 0 18 20"
                                    fill="#006A4E"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 3C7 2.46957 7.21071 1.96086 7.58579 1.58579C7.96086 1.21071 8.46957 1 9 1C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3C12.1484 3.54303 13.1274 4.38833 13.8321 5.4453C14.5367 6.50227 14.9404 7.73107 15 9V12C15.0753 12.6217 15.2954 13.2171 15.6428 13.7381C15.9902 14.2592 16.4551 14.6914 17 15H1C1.54494 14.6914 2.00981 14.2592 2.35719 13.7381C2.70457 13.2171 2.92475 12.6217 3 12V9C3.05956 7.73107 3.4633 6.50227 4.16795 5.4453C4.8726 4.38833 5.85159 3.54303 7 3"
                                        stroke="#4B5563"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6 15V16C6 16.7956 6.31607 17.5587 6.87868 18.1213C7.44129 18.6839 8.20435 19 9 19C9.79565 19 10.5587 18.6839 11.1213 18.1213C11.6839 17.5587 12 16.7956 12 16V15"
                                        stroke="#4B5563"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {/* Notification Indicator */}
                            <div className="animate-ping w-1.5 h-1.5 bg-red-700 rounded-full absolute inset-0 mt-0.5 mr-0.5 m-auto" />
                            <div className="w-1.5 h-1.5 bg-red-700 rounded-full absolute inset-0 mt-0.5 mr-0.5 m-auto" />

                            {/* Dropdown Menu */}

                            <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute right-0 mt-2 w-64 border text-white border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden`}>
                                <ul className="py-0 bg-appTitleBgColor text-white border-2 border-appTitleBgColor">
                                    {menuItems.map((item) => (
                                        <div key={item.id}>
                                            {/* Main List Item */}
                                            <li
                                                className="flex items-center justify-between hover:text-appTitleBgColor text-white hover:bg-white px-2 cursor-pointer rounded-t-md"
                                                onClick={() => toggleNested(item.id)}
                                            >
                                                <div className="flex items-center justify-center">
                                                    <Image
                                                        src={item.icon}
                                                        alt={item.title}
                                                        width={30}
                                                        height={30}
                                                    />
                                                </div>

                                                <div className="flex w-full items-start px-4 py-2">
                                                    <Link href="#" className="font-bold text-sm ">
                                                        {item.title}
                                                    </Link>
                                                </div>

                                                <div className="flex items-center justify-between gap-2">
                                                    <FaCircle className='text-red-800' />
                                                    {openItems === item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                </div>

                                            </li>

                                            {/* Nested Items */}
                                            {openItems === item.id && item.nestedItems.map((nestedItem) => (
                                                <li key={nestedItem.id} className="bg-white text-appTitleBgColor px-4 py-2">
                                                    <div className="w-full flex-col rounded-md overflow-hidden">
                                                        <div className="w-full flex items-center justify-between bg-appTitleBgColor px-2 py-1">
                                                            <p className='text-sm font-semibold text-white'>{nestedItem.label}</p>
                                                            <p className='text-xs font-medium text-white'> {nestedItem.moment} </p>
                                                        </div>

                                                        <div className="w-full flex items-start text-justify bg-white mt-2 px-2 py-1">
                                                            <p className='text-xs font-medium text-black'> {nestedItem.text} </p>
                                                        </div>

                                                        <div className="w-full flex items-center justify-center mt-2 bg-appTitleBgColor ">
                                                            <Link href={nestedItem.href} className=" w-full flex items-center justify-center text-sm font- text-white bg-green-700 px-4 py-1"> read </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </div>
                                    ))}
                                    <div className="flex w-full bg-white items-center justify-center gap-2 pointer-cusor rounded-b-md border-t-2 border-gray-700">
                                        <MdCancel className="text-red-900" /> <h5 className='text-black text-md'> Close </h5>
                                    </div>
                                </ul>
                                
                            </div>

                        </div>
                    </div>

                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-4">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-gray-100 p-4 text-center shadow-md">
                    <p>&copy; {new Date().getFullYear()} Your Company</p>
                </footer>
            </div>
        </div>
    );
};

export default UserDashboardLayout;
