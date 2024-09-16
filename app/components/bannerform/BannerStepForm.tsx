"use client";
import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

const BannerStepForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    return (
        <>
            <div className="py-12 px-4">
                <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
                    <div className="lg:max-w-[1124px] md:max-w-[696px] max-w-[343px] mx-auto bg-white px-6 py-4 rounded shadow">
                        <div>

                            <div className=' flex items-center justify-between  w-full bg-appWhite py-4 px-4'>
                                <p className="text-xl text-appBlack font-semibold leading-tight text-center">
                                    From Me To Another
                                </p>
                                <IoMdCloseCircle className="text-red-700 text-4xl" />
                            </div>

                            <div className=' flex w-full bg-appTitleBgColor py-4 px-4'>
                                <p className="text-xl text-appWhite font-semibold leading-tight text-center">
                                    Send Package With Just A Button
                                </p>
                            </div>
                            {/* Step Indicators */}
                            <div className="flex items-center justify-center gap-2 pt-5">
                                <div className="flex flex-col items-center justify-center w-80">
                                    <p className={`text-sm font-semibold rounded-full w-8 h-8 flex justify-center items-center md:p-8 border-2 border-appTitleBgColor ${currentStep === 1 ? 'bg-appNav text-white' : 'text-gray-500'}`}>
                                        1
                                    </p>
                                    <p className={`${currentStep === 1 ? ' flex bg-appNav mt-2 px-2 p-1 rounded-xl text-appWhite' : 'flex text-gray-500'}`} >Sender's Information</p>
                                </div>
                                <div>
                                    <svg
                                        width={100}
                                        height={2}
                                        viewBox="0 0 100 2"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="lg:block md:block hidden"
                                    >
                                        <line x1="8.74228e-08" y1={1} x2={186} y2="1.00002" stroke="#E5E7EB" strokeWidth={2} />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center justify-center w-80">
                                    <p className={`text-sm font-semibold rounded-full w-8 h-8 flex justify-center items-center md:p-8 border-2 border-appTitleBgColor ${currentStep === 2 ? 'bg-appNav text-white' : 'text-gray-500'}`}>
                                        2
                                    </p>
                                    <p className={`${currentStep === 2 ? 'bg-appNav mt-2 px-2 p-1 rounded-xl text-appWhite' : 'text-gray-500'}`} >Receiver's Information </p>
                                </div>
                                <div>
                                    <svg
                                        width={100}
                                        height={2}
                                        viewBox="0 0 100 2"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="lg:block md:block hidden"
                                    >
                                        <line x1="8.74228e-08" y1={1} x2={186} y2="1.00002" stroke="#E5E7EB" strokeWidth={2} />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center justify-center w-80">
                                    <p className={`text-sm font-semibold rounded-full w-8 h-8 flex justify-center items-center md:p-8 border-2 border-appTitleBgColor ${currentStep === 3 ? 'bg-appNav text-white' : 'text-gray-500'}`}>
                                        3
                                    </p>
                                    <p className={`${currentStep === 3 ? 'bg-appNav mt-2 px-2 p-1 rounded-xl text-appWhite' : 'text-gray-500'}`} >Package Details</p>
                                </div>
                                <div>
                                    <svg
                                        width={100}
                                        height={2}
                                        viewBox="0 0 100 2"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="lg:block md:block hidden"
                                    >
                                        <line x1="8.74228e-08" y1={1} x2={186} y2="1.00002" stroke="#E5E7EB" strokeWidth={2} />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-center justify-center w-80">
                                    <p className={`text-sm font-semibold rounded-full w-8 h-8 flex justify-center items-center md:p-8 border-2 border-appTitleBgColor ${currentStep === 4 ? 'bg-appNav text-white' : 'text-gray-500'}`}>
                                        4
                                    </p>
                                    <p className={`${currentStep === 4 ? 'bg-appNav mt-2 px-2 p-1 rounded-xl text-appWhite' : 'text-gray-500'}`} > Payment </p>
                                </div>
                            </div>
                        </div>

                        {/* Step Content */}
                        <div className="pt-5">
                            {currentStep === 1 && (
                                <div>
                                    <p className="text-xl font-medium leading-tight text-gray-800">Sender's Information</p>
                                    <div className="my-8 mx-auto xl:w-full xl:mx-0">
                                        <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Sender's First Name
                                                </label>
                                                <input type="text" name="firstName" required id="FirstName" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                            </div>
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Sender's First Name
                                                </label>
                                                <input type="text" id="LastName" name="lastName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                            </div>
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="email2" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Email
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={3} y={5} width={18} height={14} rx={2} />
                                                            <polyline points="3 7 12 13 21 7" />
                                                        </svg>
                                                    </div>
                                                    <input id="email2" name="email" required className="w-full bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm border-green-400 rounded border shadow" placeholder="example@gmail.com" />
                                                </div>
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Street Address
                                                </label>
                                                <input type="text" id="StreetAddress" name="streetAddress" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="City" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    City
                                                </label>
                                                <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                                                    <select type="text" name="city" required id="City" className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800 dark:text-gray-100 rounded">
                                                        <option value="Switzerland"> Lagos </option>
                                                        <option value="America"> Kwara </option>
                                                        <option value="Australia">Akwa Ibom</option>
                                                    </select>
                                                    <div
                                                        className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500
                                      dark:text-gray-400 absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
                                                    >
                                                        <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="6 15 12 9 18 15" />
                                                        </svg>
                                                        <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Country
                                                </label>
                                                <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                                                    <select type="text" name="city" required id="Country" className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800 dark:text-gray-100 rounded">
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="America">America</option>
                                                        <option value="Australia">Australia</option>
                                                    </select>
                                                    <div
                                                        className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500
                                      dark:text-gray-400 absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
                                                    >
                                                        <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="6 15 12 9 18 15" />
                                                        </svg>
                                                        <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="Phonenumber" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Phone Number
                                                </label>
                                                <input type="mobile" id="Phonenumber" name="phoneNumber" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentStep === 2 && (
                                <div>
                                    <p className="text-xl font-medium leading-tight text-gray-800">Riceiver's Information</p>
                                    <div className="my-8 mx-auto xl:w-full xl:mx-0">
                                        <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Sender's First Name
                                                </label>
                                                <input type="text" name="firstName" required id="FirstName" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                            </div>
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Sender's First Name
                                                </label>
                                                <input type="text" id="LastName" name="lastName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                            </div>
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="email2" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Email
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={3} y={5} width={18} height={14} rx={2} />
                                                            <polyline points="3 7 12 13 21 7" />
                                                        </svg>
                                                    </div>
                                                    <input id="email2" name="email" required className="w-full bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm border-green-400 rounded border shadow" placeholder="example@gmail.com" />
                                                </div>
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Street Address
                                                </label>
                                                <input type="text" id="StreetAddress" name="streetAddress" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="City" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    City
                                                </label>
                                                <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                                                    <select type="text" name="city" required id="City" className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800 dark:text-gray-100 rounded">
                                                        <option value="Switzerland"> Lagos </option>
                                                        <option value="America"> Kwara </option>
                                                        <option value="Australia">Akwa Ibom</option>
                                                    </select>
                                                    <div
                                                        className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500
                                      dark:text-gray-400 absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
                                                    >
                                                        <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="6 15 12 9 18 15" />
                                                        </svg>
                                                        <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Country
                                                </label>
                                                <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                                                    <select type="text" name="city" required id="Country" className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800 dark:text-gray-100 rounded">
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="America">America</option>
                                                        <option value="Australia">Australia</option>
                                                    </select>
                                                    <div
                                                        className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500
                                      dark:text-gray-400 absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
                                                    >
                                                        <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="6 15 12 9 18 15" />
                                                        </svg>
                                                        <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="Phonenumber" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Phone Number
                                                </label>
                                                <input type="mobile" id="Phonenumber" name="phonenumber" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentStep === 3 && (
                                <div>
                                    <p className="text-xl font-medium leading-tight text-gray-800">Package Details</p>
                                    <div className="my-8 mx-auto xl:w-full xl:mx-0">
                                        <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Sender's First Name
                                                </label>
                                                <input type="text" name="firstName" required id="FirstName" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />

                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Weight (kg)
                                                </label>
                                                <input type="text" id="StreetAddress" name="streetAddress" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder='Input Product Weight' />
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Shipment Type
                                                </label>
                                                
                                                <div className="flex flex-col gap-2">

                                                    {/* Radio button "On" */}
                                                    <div className="flex items-center">
                                                        <label className="flex items-center cursor-pointer">
                                                            <input
                                                                defaultChecked
                                                                type="radio"
                                                                name="radio"
                                                                aria-label="On"
                                                                className="appearance-none rounded-full w-4 h-4 border border-gray-400 checked:bg-appTitleBgColor checked:border-transparent focus:outline-none cursor-pointer"
                                                            />
                                                            <span className="ml-2 text-sm leading-4 text-gray-800 dark:text-gray-100 font-semibold">
                                                                Standard Delivery (4-5 Business Days)
                                                            </span>
                                                        </label>
                                                    </div>

                                                    {/* Radio button "Off" */}
                                                    <div className="flex items-center">
                                                        <label className="flex items-center cursor-pointer">
                                                            <input
                                                                type="radio"
                                                                name="radio"
                                                                aria-label="Off"
                                                                className="appearance-none rounded-full w-4 h-4 border border-gray-400 checked:bg-appTitleBgColor checked:border-transparent focus:outline-none cursor-pointer"
                                                            />
                                                            <span className="ml-2 text-sm leading-4 font-semibold text-gray-800 dark:text-gray-100">
                                                                Express Delivery (1-2 Business Days)
                                                            </span>
                                                        </label>
                                                    </div>

                                                </div>

                                            </div>

                                          

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="Message" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Package Description
                                                </label>
                                                <textarea id="Message" name="message" required className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Let the world know who you are" rows={5} defaultValue={""} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                            {currentStep === 4 && (
                                <div>
                                    <p className="text-xl font-medium leading-tight text-gray-800">Shipping Amount</p>
                                    <div className="my-8 mx-auto xl:w-full xl:mx-0">
                                        <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="CardName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Card Name
                                                </label>
                                                <input type="text" name="CardName" required id="FirstName" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" />
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="CardNumber" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Card Number
                                                </label>
                                                <input type="text" id="CardNumber" name="cardNumber" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="0000 1234 6549 15151" />
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="CardExpire" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    Card Expiry Date
                                                </label>
                                                <input type="text" id="CardExpire" name="cardExpire" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="MM/YY" />
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="CardExpire" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    CVC
                                                </label>
                                                <input type="text" id="CardExpire" name="cardExpire" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100" placeholder="CVC" />
                                            </div>



                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="OTP" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                    OTP
                                                </label>
                                                <div className="flex">
                                                    <input
                                                        className="relative text-sm leading-none text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none text-right"
                                                        type="text"
                                                        id="OTP"
                                                        name="otp"
                                                        placeholder="OTP"
                                                    />
                                                    <button type="submit" className="absolute z-10 rounded-md bg-appTitleBgColor px-3.5 py-2.5 text-sm font-bold text-appWhite shadow-sm hover:bg-black">Resend OTP</button>
                                               </div>
                                                
                                            </div>

                                            <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                                <label htmlFor="OTP" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                                PAYMENT
                                                </label>
                                                <div className="flex">
                                                    <button type="submit" className=" z-10 rounded-md bg-appTitleBgColor px-3.5 py-2.5 text-sm font-bold text-appWhite shadow-sm hover:bg-black">MAKE PAYMENT</button>                                    
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center pt-4">
                            {currentStep > 1 && (
                                <button
                                    className="text-white border border-appTitleBgColor bg-appTitleBgColor px-6 py-3 rounded font-medium"
                                    onClick={handlePrevious}
                                >
                                    Previous Step
                                </button>
                            )}
                            {currentStep < 4 && (
                                <button
                                    className="text-white border border-appTitleBgColor bg-appTitleBgColor px-6 py-3 rounded font-medium"
                                    onClick={handleNext}
                                >
                                    Next Step
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BannerStepForm;
