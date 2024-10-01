"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaAddressCard, FaTruck } from 'react-icons/fa';
import { FaHandHoldingDollar, FaListCheck } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';
import { RiCustomerServiceFill } from 'react-icons/ri';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../../../../public/images/logo5.svg';

const UserAsideNav: React.FC = () => {

    const pathname = usePathname(); // Replaces router.pathname

    const [rotate, setRotate] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const toggleDropdownProfile = () => {
        setDropdownOpen(!dropdownOpen);
        setRotate(!rotate);
    };

  return (
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
  );
}

export default UserAsideNav;
