// components/DashboardLayout.tsx
"use client"
import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation'; // Use next/navigation
import Link from 'next/link';
import { FaCircle } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import gmail from '../../../public/images/gmail.png'

interface UserDashboardLayoutProps {
    children: ReactNode;
}

const UserDashboardLayout = ({ children }: UserDashboardLayoutProps) => {
    const pathname = usePathname(); // Replaces router.pathname

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Side Navigation */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
                <div className="text-2xl font-semibold mb-6 ">Dashboard</div>
                <nav className="flex flex-col space-y-4">
                    <Link href="/pages/userdashboard" className={`px-3 py-2 rounded-md ${pathname === '/pagesuserdashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                       Home
                    </Link>
                    <Link href="/pages/userdashboard/profile" className={`px-3 py-2 rounded-md ${pathname === '/pages/userdashboard/profile' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        Profile
                    </Link>
                    <Link href="/pages/userdashboard/notification" className={`px-3 py-2 rounded-md ${pathname === '/pages/userdashboard/notification' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        Notification
                    </Link>
                    <Link href="/pages/userdashboard/settings" className={`px-3 py-2 rounded-md ${pathname === '/pages/userdashboard/settings' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                        Settings
                    </Link>
                </nav>
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
                    
                    <div className="flex items-end justify-end w-full  pr-8">
                        <div className="relative">
                            <a
                                aria-label="show notifications"
                                role="link"
                                href="javascript:void(0)"
                                className="cursor-pointer w-6 h-6 xl:w-auto xl:h-auto text-black"
                                onClick={toggleDropdown}
                            >
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
                            </a>

                            {/* Notification Indicator */}
                            <div className="animate-ping w-1.5 h-1.5 bg-red-700 rounded-full absolute inset-0 mt-0.5 mr-0.5 m-auto" />
                            <div className="w-1.5 h-1.5 bg-red-700 rounded-full absolute inset-0 mt-0.5 mr-0.5 m-auto" />

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-60 border text-white border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                                    <ul className="py-0 bg-appTitleBgColor text-white">
                                        <li className="flex items-center justify-between  hover:text-appTitleBgColor text-white hover:bg-white px-2">
                                            <div className='flex items-center justify-center'>
                                                <Image
                                                    src={gmail}  // Path to the image in the public folder
                                                    alt="Example Image"         // Alt text for the image
                                                    width={30}                 // Desired width
                                                    height={30}                // Desired height
                                                />
                                            </div>
                                            <Link
                                                href="#"
                                                className="block font-bold px-4 py-2 text-sm"
                                            >
                                                Email Verification
                                            </Link>

                                            <div className='flex items-center justify-between gap-2'>
                                                <FaCircle />
                                                <IoIosArrowDown />
                                            </div>
                                        </li>

                                        
                                    </ul>
                                </div>
                            )}
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
