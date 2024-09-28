// pages/dashboard/index.tsx
"use client"
import UserDashboardLayout from '../../components/layout/UserDashboardLayout';
import { BsBoxFill } from "react-icons/bs";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { VscPassFilled } from "react-icons/vsc";
import { MdCancel } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState } from 'react';
import Link from 'next/link';



const DashboardHome = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>("Month");

    const data = [
        { month: 'Jan', values: { green: 200, yellow: 300, red: 500 } },
        { month: 'Feb', values: { green: 150, yellow: 350, red: 450 } },
        { month: 'Mar', values: { green: 300, yellow: 300, red: 400 } },
        { month: 'Apr', values: { green: 100, yellow: 250, red: 650 } },
        { month: 'May', values: { green: 250, yellow: 200, red: 550 } },
        { month: 'Jun', values: { green: 200, yellow: 300, red: 400 } },
        { month: 'Jul', values: { green: 100, yellow: 400, red: 500 } },
        { month: 'Aug', values: { green: 300, yellow: 200, red: 600 } },
        { month: 'Sep', values: { green: 200, yellow: 300, red: 500 } },
        { month: 'Oct', values: { green: 250, yellow: 250, red: 500 } },
        { month: 'Nov', values: { green: 200, yellow: 400, red: 400 } },
        { month: 'Dec', values: { green: 300, yellow: 300, red: 400 } },
    ];
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <UserDashboardLayout>
            {/* Statistics board section goes here */}
            <div className='flex flex-row items-center justify-between mt-5 w-full shadow-lg shadow-appTitleBgColor '>
                {/* Total SHipping */}
                <div className='min-w-2/12 p-2 rounded-lg'>
                    <div className="flex flex-col bg-white rounded-lg overflow-hidden border-[1.7px] border-appNav">
                        <div className='flex items-center gap-4 p-2 bg-white rounded-lg text-appTitleBgColor'>
                            <div className="border-[1.8px] border-appTitleBgColor p-1 rounded-lg">
                                <BsBoxFill className=' w-7 h-7' />
                            </div>
                            <h4>Total Shipping</h4>
                        </div>

                        <div className='flex items-center justify-center p-2 bg-appTitleBgColor rounded-t-[-4px]'>
                            <h4 className='text-white'>2000</h4>
                        </div>
                    </div>
                </div>
                {/* Total SHipping */}

                {/* In Transit Section */}
                <div className='min-w-2/12 w-2/12 p-2 rounded-lg'>
                    <div className="flex flex-col bg-white rounded-lg overflow-hidden border-[1.7px] border-appNav">
                        <div className='flex items-center gap-4 p-2 bg-white rounded-lg text-appTitleBgColor'>
                            <div className="border-[1.8px] border-blue-700 p-1 rounded-lg">
                                <MdOutlineDirectionsBike className='text-blue-700 w-7 h-7' />
                            </div>
                            <h4 className='text-blue-700'>In Transit</h4>
                        </div>

                        <div className='flex items-center justify-center p-2 bg-appTitleBgColor rounded-t-[-4px]'>
                            <h4 className='text-white'>85</h4>
                        </div>
                    </div>
                </div>
                {/* In Transit Section */}

                {/* delivery */}
                <div className='min-w-2/12 w-2/12 p-2 rounded-lg'>
                    <div className="flex flex-col bg-white rounded-lg overflow-hidden border-[1.7px] border-appNav">
                        <div className='flex items-center gap-4 p-2 bg-white rounded-lg text-appTitleBgColor'>
                            <div className="border-[1.8px] border-orange-400 p-1 rounded-lg">
                                <TbTruckDelivery className=' text-orange-400 w-7 h-7' />
                            </div>
                            <h4 className='text-orange-400'>In Delivery</h4>
                        </div>

                        <div className='flex items-center justify-center p-2 bg-appTitleBgColor rounded-t-[-4px]'>
                            <h4 className='text-white'>400</h4>
                        </div>
                    </div>
                </div>
                {/* delivery */}

                {/* Completed */}
                <div className='min-w-2/12 w-2/12 p-2 rounded-lg'>
                    <div className="flex flex-col bg-white rounded-lg overflow-hidden border-[1.7px] border-appNav">
                        <div className='flex items-center gap-4 p-2 bg-white rounded-lg text-appTitleBgColor'>
                            <div className="border-[1.8px] border-green-500 p-1 rounded-lg">
                                <VscPassFilled className='text-green-500 w-7 h-7' />
                            </div>
                            <h4 className="text-green-500">Completed</h4>
                        </div>

                        <div className='flex items-center justify-center p-2 bg-appTitleBgColor rounded-t-[-4px]'>
                            <h4 className='text-white'>1,500</h4>
                        </div>
                    </div>
                </div>
                {/* Completed */}

                {/* Rejected */}
                <div className='min-w-2/12 w-2/12 p-2 rounded-lg'>
                    <div className="flex flex-col bg-white rounded-lg overflow-hidden border-[1.7px] border-appNav">
                        <div className='flex items-center gap-4 p-2 bg-white rounded-lg text-appTitleBgColor'>
                            <div className="border-[1.8px] border-red-700 p-1 rounded-lg">
                                <MdCancel className='text-red-700 w-7 h-7' />
                            </div>
                            <h4 className='text-red-700'>Rejected</h4>
                        </div>

                        <div className='flex items-center justify-center p-2 bg-appTitleBgColor rounded-t-[-4px]'>
                            <h4 className='text-white'>15</h4>
                        </div>
                    </div>
                </div>
                {/* Rejected */}
            </div>
            {/* Statistics board section ends here */}

            {/* Chart Section Goes here */}
            <div className='flex flex-col items-center justify-between mt-12 w-full shadow-lg shadow-appTitleBgColor '>
                {/* Chat Stistics Heading Goes Here*/}
                <div className="flex flex-row w-full items-center justify-between px-2 bg-black">
                    <div className="flex items-center justify-start pt-0 p-2 font-bold">
                        <p className='text-white'>Shipping Statistics</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between pt-0 p-2 gap-3 mt-4">

                        <div className="flex flex-wrap p-1 items-center justify-center gap-1 bg-orange-500 px-2 rounded-lg">
                            <FaCircle className='text-orange-400' /> <p className="font-semibold"> In Delivery</p>
                        </div>
                        
                        <div className="flex flex-wrap p-1 items-center justify-center gap-1 bg-green-500 px-2 rounded-lg">
                            <FaCircle className='text-green-400' /> <p className="font-semibold"> In Delivery</p>
                        </div>
                        
                        <div className="flex flex-wrap p-1 items-center justify-center gap-1 bg-red-700 px-2 rounded-lg">
                            <FaCircle className='text-red-500' /> <p className="font-semibold"> In Delivery</p>
                        </div>

                        <div className="flex flex-wrap p-0 items-center justify-center gap-1 bg-red-700 px-0 rounded-lg">
                            <button
                                onClick={toggleDropdown}
                                className="inline-flex justify-center w-28 px-2 py-1 bg-appTitleBgColor text-white font-medium rounded-md"
                            >
                                <p className="value">{selectedValue}</p> {/* Show the selected value here */}
                                <svg
                                    className="mt-[3px] ml-2 -mr-1 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute right-8 mt-40 w-28 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                                    <div className="py-0 bg-appTitleBgColor  rounded-lg overflow-hidden border-2 border-appNav shadow-lg shadow-appNav">
                                        <button
                                            onClick={() => handleSelect("Day")}
                                            className="block w-full px-4 py-2 text-sm text-white hover:text-appTitleBgColor hover:bg-gray-100 font-semibold"
                                        >
                                            Day
                                        </button>
                                        <button
                                            onClick={() => handleSelect("Month")}
                                            className="block w-full px-4 py-2 text-sm text-white hover:text-appTitleBgColor hover:bg-gray-100 font-semibold"
                                        >
                                            Month
                                        </button>
                                        <button
                                            onClick={() => handleSelect("Year")}
                                            className="block w-full px-4 py-2 text-sm text-white hover:text-appTitleBgColor hover:bg-gray-100 font-semibold"
                                        >
                                            Year
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Chat Stistics Heading Goes Here*/}

                
                
                <div className="flex flex-row w-full items-center justify-between px-2 mt-12">
                    {/* Left Y-axis Labels */}
                    <div className="flex flex-col justify-between h-64 pr-4">
                        {[2000, 1500, 1000, 0].map((label, idx) => (
                            <span key={idx} className="text-sm font-semibold">
                                {label}
                            </span>
                        ))}
                    </div>

                    {/* Bar chart */}
                    <div className="flex flex-1 items-end justify-between">
                        {data?.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                {/* Bar */}
                                <div className="relative w-8 h-64 bg-black flex flex-col-reverse">
                                    <div
                                        className="bg-green-500"
                                        style={{ height: `${(item.values.green / 200) * 100}%` }}
                                    />
                                    <div
                                        className="bg-yellow-400"
                                        style={{ height: `${(item.values.yellow / 200) * 100}%` }}
                                    />
                                    <div
                                        className="bg-red-500"
                                        style={{ height: `${(item.values.red / 200) * 100}%` }}
                                    />
                                </div>
                                {/* Month Label */}
                                <span className="mt-2 text-sm">{item.month}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Chart Section Ends Here */}

        </UserDashboardLayout>
    );
};

export default DashboardHome;
