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


interface Order {
    orderId: string;
    dateLoaded: string;
    status: string;
    pickUpLocation: string;
    dropOffLocation: string;
}

interface Item {
    sn: number;
    itemName: string;
    category: string;
    fragile: boolean;
    quantity: number;
    weight: string;
    shippingType: string;
}

const orders: Order[] = [
    {
        orderId: "#ORD001",
        dateLoaded: "2024-09-28",
        status: "In Progress",
        pickUpLocation: "New York",
        dropOffLocation: "Los Angeles",
    },
    {
        orderId: "#ORD002",
        dateLoaded: "2024-09-27",
        status: "Completed",
        pickUpLocation: "Chicago",
        dropOffLocation: "Houston",
    },
    // Add more orders as needed
];

const items: Item[] = [
    { sn: 1, itemName: "Laptop", category: "Electronics", fragile: true, quantity: 1, weight: "1.5kg", shippingType: "Air" },
    { sn: 2, itemName: "Books", category: "Education", fragile: false, quantity: 3, weight: "2kg", shippingType: "Ground" },
    // Add more items as needed
];

const DashboardHome: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>("Month");
    const [selectedValueFilter, setSelectedValueFilter] = useState<string>("Month");
    const [dropdownStatus, setDropdownStatus] = useState(0);
    const [openDropdownsTable, setOpenDropdownsTable] = useState<Record<string, boolean>>({});


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdownFilter = () => {
        setIsOpenFilter(!isOpenFilter);
    };

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        setIsOpen(false); // Close the dropdown after selection
    };

    const handleFilter = (value: string) => {
        setSelectedValueFilter(value);
        setIsOpenFilter(false); // Close the dropdown after selection
    };


    const toggleDropdownSecondTable = (orderId: string) => {
        setOpenDropdownsTable((prevState) => ({
            ...prevState,
            [orderId]: !prevState[orderId],
        }));
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
                <div className="flex flex-row w-full items-center justify-between px-2 py-1 bg-black">
                    <div className="flex items-center justify-start px-2 font-bold">
                        <p className='text-white'>SHIPPING STATISTICS</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between pt-0 p-2 gap-3 mt-2">

                        <div className="flex flex-wrap p-1 items-center justify-center gap-1 bg-orange-500 px-2 rounded-lg">
                            <FaCircle className='text-orange-400' /> <p className="font-semibold"> In Delivery</p>
                        </div>

                        <div className="flex flex-wrap p-1 items-center justify-center gap-1 bg-green-500 px-2 rounded-lg">
                            <FaCircle className='text-green-400' /> <p className="font-semibold"> In Delivery</p>
                        </div>

                        <div className="flex flex-wrap p-1 items-center justify-center gap-1 bg-red-700 px-2 rounded-lg">
                            <FaCircle className='text-red-500' /> <p className="font-semibold"> In Delivery</p>
                        </div>

                        <div className="flex relative flex-wrap p-0 items-center justify-center gap-1 bg-red-700 px-0 rounded-lg">
                            <button
                                onClick={toggleDropdown}
                                className="inline-flex justify-between w-28 px-2 py-1 bg-appTitleBgColor text-white font-medium rounded-md"
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
                                <div className="absolute right-0 mt-40 w-28 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                                    <div className="py-0 bg-appTitleBgColor  rounded-lg overflow-hidden border-2 border-appNav shadow-lg shadow-appNav">
                                        <button
                                            onClick={() => handleSelect("Day")}
                                            className="block w-full px-4 py-2 text-sm text-white hover:text-appTitleBgColor hover:bg-gray-100 font-medium"
                                        >
                                            Day
                                        </button>
                                        <button
                                            onClick={() => handleSelect("Month")}
                                            className="block w-full px-4 py-2 text-sm text-white hover:text-appTitleBgColor hover:bg-gray-100 font-medium"
                                        >
                                            Month
                                        </button>
                                        <button
                                            onClick={() => handleSelect("Year")}
                                            className="block w-full px-4 py-2 text-sm text-white hover:text-appTitleBgColor hover:bg-gray-100 font-medium"
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

            {/* Order List Sectioin Goes Here */}
            <div className='flex flex-col items-center justify-between mt-12 w-full shadow-lg shadow-appTitleBgColor '>
                {/* Chat Stistics Heading Goes Here*/}
                <div className="flex flex-row w-full items-center justify-between px-2 py-1 bg-black">
                    <div className="flex items-center justify-start px-2 font-bold w-full">
                        <p className='text-white'>ORDER LIST</p>
                    </div>

                    <div className="flex items-center justify-end pt-0 p-2 gap-3 mt-2 w-full">

                        <div className="flex relative flex-wrap p-0 items-center justify-center gap-10 px-0 rounded-lg">
                            <button
                                onClick={toggleDropdownFilter}
                                className="inline-flex justify-between w-44 px-2 py-1 bg-appTitleBgColor text-white font-medium rounded-md"
                            >
                                <p className="value">{selectedValueFilter}</p> {/* Show the selected value here */}
                                <svg
                                    className="mt-[3px] ml-2 -mr-1 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L13 10.414V16a1 1 0 01-.553.894l-4 2A1 1 0 017 18v-7.586L3.293 5.707A1 1 0 013 5V3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isOpenFilter && (
                                <div className="absolute right-0 mt-64 w-44 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                                    <div className="py-0 bg-appTitleBgColor  rounded-lg overflow-hidden border-2 border-appNav shadow-lg shadow-appNav">
                                        <button
                                            onClick={() => handleFilter("Filter By Date")}
                                            className="block w-full px-4 py-2 text-sm text-white hover:text-appTitleBgColor hover:bg-gray-100 font-medium"
                                        >
                                            Filter By Date
                                        </button>
                                        <button
                                            onClick={() => handleFilter("Filter By Id")}
                                            className="block w-full px-4 py-2 text-sm text-white hover:text-appTitleBgColor hover:bg-gray-100 font-medium"
                                        >
                                            Filter By Id
                                        </button>
                                        <button
                                            onClick={() => handleFilter("Filter By Location")}
                                            className="block w-full px-4 py-2 text-sm text-white hover:text-appTitleBgColor hover:bg-gray-100 font-medium"
                                        >
                                            Filter By Location
                                        </button>
                                        <button
                                            onClick={() => handleFilter("Filter By State")}
                                            className="block w-full px-4 py-2 text-sm text-white hover:text-appTitleBgColor hover:bg-gray-100 font-medium"
                                        >
                                            Filter By State
                                        </button>
                                        <button
                                            onClick={() => handleFilter("Filter By Country")}
                                            className="block w-full px-4 py-2 text-sm text-white hover:text-appTitleBgColor hover:bg-gray-100 font-medium"
                                        >
                                            Filter By Country
                                        </button>
                                        <button
                                            onClick={() => handleFilter("Filter By City")}
                                            className="block w-full px-4 py-2 text-sm text-white hover:text-appTitleBgColor hover:bg-gray-100 font-medium"
                                        >
                                            Filter By City
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="sm:w-64  bg-white border rounded border-gray-700 flex items-center">
                            <input className="mx-2 focus:outline-none w-full py-2 text-sm leading-none placeholder-gray-600 text-gray-600" placeholder="Search here" />
                            <svg className="mr-2" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14 14L10 10" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>


                    </div>

                </div>
                {/* Chat Stistics Heading Goes Here*/}

                <div className="flex w-full items-center justify-between px-2 pb-2 mt-6">
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-full table-auto border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-appTitleBgColor text-center text-white text-base">
                                    <th className="border p-2">
                                        <input type="checkbox" />
                                    </th>
                                    <th className="border p-2">Order ID</th>
                                    <th className="border p-2">Date Loaded</th>
                                    <th className="border p-2">Status</th>
                                    <th className="border p-2">Pick Up Location</th>
                                    <th className="border p-2">Drop Off Location</th>
                                    <th className="border p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <>
                                        <tr key={order.orderId} className="text-center bg-appBanner/80 font-semibold text-base">
                                            <th className="border p-2">
                                                <input type="checkbox" />
                                            </th>
                                            <td className="border p-2">{order.orderId}</td>
                                            <td className="border p-2">{order.dateLoaded}</td>
                                            <td className="border p-2"> <span className="bg-green-800 px-3 py-1 rounded-lg text-white"> {order.status} </span></td>
                                            <td className="border p-2">{order.pickUpLocation}</td>
                                            <td className="border p-2">{order.dropOffLocation}</td>
                                            <td className="border p-2">
                                                <p
                                                    className="Haction cursor-pointer text-white bg-appTitleBgColor py-1 rounded-lg"
                                                    onClick={() => toggleDropdownSecondTable(order.orderId)}
                                                >
                                                    {openDropdownsTable[order.orderId] ? "Hide Details" : "View Details"}
                                                </p>
                                            </td>
                                        </tr>

                                        {/* This is the row that will toggle on clicking */}
                                        {openDropdownsTable[order.orderId] && (
                                            <tr className="w-full">
                                                <td colSpan={6} className="">
                                                    <div className="bg-gray-50 shadow-md rounded mt-2 mb-4 mx-auto">
                                                        <table className="min-w-full table-auto border-collapse border border-gray-200">
                                                            <thead>
                                                                <tr className="bg-appNav text-center">
                                                                    <th className="border p-2">SN</th>
                                                                    <th className="border p-2">ITEM NAME</th>
                                                                    <th className="border p-2">CATEGORY</th>
                                                                    <th className="border p-2">FRAGILE</th>
                                                                    <th className="border p-2">QUANTITY</th>
                                                                    <th className="border p-2">WEIGHT</th>
                                                                    <th className="border p-2">SHIPPING TYPE</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {items?.map((item) => (
                                                                    <tr key={item.sn} className="text-center bg-appBanner/95 text-white">
                                                                        <td className="border p-2">{item.sn}</td>
                                                                        <td className="border p-2">{item.itemName}</td>
                                                                        <td className="border p-2">{item.category}</td>
                                                                        <td className="border p-2">{item.fragile ? "Yes" : "No"}</td>
                                                                        <td className="border p-2">{item.quantity}</td>
                                                                        <td className="border p-2">{item.weight}</td>
                                                                        <td className="border p-2">{item.shippingType}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
            {/* Order List Section Ends Here */}
        </UserDashboardLayout>
    );
};

export default DashboardHome;
