"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo5.svg';

const Header: React.FC = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isShipmentOpen, setIsShipmentOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle

    const handleServicesClick = () => {
        setIsServicesOpen(!isServicesOpen);
        setIsShipmentOpen(false);
    };

    const handleShipmentClick = () => {
        setIsShipmentOpen(!isShipmentOpen);
        setIsServicesOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-appNav shadow-md shadow-appTitleBgColor w-full pt-2  md:py-2 border-b-3 border-appTitleBgColor">
            <div className="container mx-auto px-4 flex items-center justify-between py-1">
                {/* Logo */}
                <div className="flex items-center justify-center">
                    <Link href="/" className="flex items-center justify-center w-full">
                        <Image
                            src={logo}
                            alt="Description of the image"
                            width={200}
                            height={200}
                            className=""
                        />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className={`text-white px-3 py-1 ${isMobileMenuOpen ? 'bg-appBlack' : 'bg-appBlue'}`}
                    >
                        {/* Menu icon */}
                        {isMobileMenuOpen ? "Close" : "Menu"}
                    </button>
                </div>

                {/* Desktop Navigation Tabs */}
                <div className="hidden md:flex space-x-6">
                    <div className="relative">
                        <button
                            onClick={handleServicesClick}
                            className="text-white focus:outline-none font-bold border-2 border-appNav hover:border-appTitleBgColor px-2 hover:bg-appTitleBgColor hover:text-appWhite"
                        >
                            Our Services
                        </button>
                        {isServicesOpen && (
                            <ul className="logisticsHeaderUl z-50">
                                <li className="logisticsHeaderLi">
                                    <Link href="">Pick up</Link>
                                </li>
                                <li className="logisticsHeaderLi">
                                    <Link href="">Delivery</Link>
                                </li>
                                <li className="logisticsHeaderLi">
                                    <Link href="">Scheduling</Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            onClick={handleShipmentClick}
                            className="text-white focus:outline-none font-bold border-2 border-appNav hover:border-appTitleBgColor px-2 hover:bg-appTitleBgColor hover:text-appWhite"
                        >
                            Track Shipment
                        </button>
                        {isShipmentOpen && (
                            <ul className="logisticsHeaderUl z-50">
                                <li className="logisticsHeaderLi">
                                    <Link href="">Pick up</Link>
                                </li>
                                <li className="logisticsHeaderLi">
                                    <Link href="">Delivery</Link>
                                </li>
                                <li className="logisticsHeaderLi">
                                    <Link href="">Scheduling</Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    <Link href="/bulq-discount" className="logisticsHeaderp">
                        <p>Bulq Discount</p>
                    </Link>

                    <Link href="/partner" className="logisticsHeaderp">
                        <p>Become a Partner</p>
                    </Link>
                </div>

                {/* Desktop Login/Register buttons */}
                <div className="hidden md:flex space-x-4">
                    <Link href="">
                        <p className="px-4 py-1 bg-appTitleBgColor text-appWhite font-semibold">Login</p>
                    </Link>
                    <Link href="">
                        <p className="px-4 py-1 bg-appBlack text-appWhite font-semibold">Sign Up</p>
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation Tabs */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white text-appBlack space-y-2 px-4 py-2 mt-4">

                    <div className=" w-full flex flex-col">

                        <button
                            onClick={handleServicesClick}
                            className="w-6/12 text-left focus:outline-none font-bold md:border-2 md:border-appNav px-0 mt-2"
                        >
                            Our Services
                        </button>
                        {isServicesOpen && (
                            <ul className='w-6/12 bg-appTitleBgColor text-white'>
                                <li className="logisticsHeaderLi">
                                    <Link href="/services/pickup">Pick up</Link>
                                </li>
                                <li className="logisticsHeaderLi">
                                    <Link href="/services/delivery">Delivery</Link>
                                </li>
                                <li className="logisticsHeaderLi">
                                    <Link href="/services/scheduling">Scheduling</Link>
                                </li>
                            </ul>
                        )}

                        <button
                            onClick={handleShipmentClick}
                            className="w-6/12 text-left focus:outline-none font-bold md:border-2 md:border-appNav px-0 mt-2"
                        >
                            Track Shipment
                        </button>
                        {isShipmentOpen && (
                            <ul className='w-6/12 bg-appTitleBgColor text-white'>
                                <li className="logisticsHeaderLi">
                                    <Link href="">Pick up</Link>
                                </li>
                                <li className="logisticsHeaderLi">
                                    <Link href=""> Delivery </Link>
                                </li>
                                <li className="logisticsHeaderLi">
                                    <Link href="/services/scheduling">Scheduling</Link>
                                </li>
                            </ul>
                        )}

                        <Link href="" className="block w-6/12 mt-2 font-bold">
                            Bulq Discount
                        </Link>
                        <Link href="" className="block w-6/12 mt-2 font-bold">
                            Become a Partner
                        </Link>

                        <div className="flex w-6/12 items-center justify-between mt-4">
                            <Link href="/signin" className="block px-4 py-1 bg-appTitleBgColor text-appWhite font-semibold">
                                Login
                            </Link>
                            <Link href="/signup" className="block px-4 py-1 bg-appBlack text-appWhite font-semibold">
                                Sign Up
                            </Link>
                        </div>
                       
                    </div>

                </div>
            )}
        </nav>
    );
};

export default Header;
