import Link from 'next/link';
import React from 'react';
import { FaCircle, FaTrashAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';



const UserAddress: React.FC = () => {
    return (
        <>

            <div className="w-[31%] bg-appTitleBgColor rounded-lg flex flex-col overflow-hidden">
                <div className="flex w-full bg-appTitleBgColor items-center justify-between p-2">
                    <p className='text-white font-semibold'>Akinwale Olawale Home</p>
                    <div className="flex items-center justify-center">
                        <FaCircle className='text-green-500' />
                    </div>
                </div>

                <div className="flex flex-col w-full bg-black items-start justify-start p-2">
                    <p className='text-white text-justify text-sm'>
                        {/* full address should be called here */}
                        No 25 Off Famoritade Street Agbede Olosugbo, Ikorodu Lagos Yomlinks Cafe.
                    </p>

                    <p className='flex text-white items-start justify-start text-sm gap-1 mt-2'>
                        {/* city and LGA */}
                        <span className="font-semibold">
                            Ikorodu,
                        </span>
                        <span className="font-semibold">
                            Lagos.
                        </span>
                    </p>

                    <p className='text-white items-center justify-start text-xs mt-1'>
                        {/* city and LGA */}
                        <span className="font-semibold">
                            +234 8165371302.
                        </span>
                    </p>

                </div>

                <div className="w-full flex items-center justify-end gap-4 bg-appTitleBgColor p-2">

                    <Link href="#">
                        <FaTrashAlt className="text-red-600 text-lg cursor-pointer" />
                    </Link>

                    <Link href="#">
                        <MdEdit className="text-white text-lg cursor-pointer" />
                    </Link>

                </div>

            </div>

           
        </>
    );
}

export default UserAddress;
