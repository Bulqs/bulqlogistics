import UserDashboardLayout from '@/app/components/userdashboardlayout/layout/UserDashboardLayout';
import React from 'react';
import { FaCircle, FaTrashAlt } from 'react-icons/fa';
import UserAddress from './UserAddress';
import { AiFillPlusSquare } from "react-icons/ai";

const page = () => {
  return (
    <UserDashboardLayout>

      <div className="flex bg-gray-800 px-2 py-1 mb-4 rounded-md">
        <h2 className="text-xl font-bold text-white p-1">ADDRESS</h2>
      </div>

      <div className="flex flex-wrap items-start justify-start gap-x-9 gap-y-4">
        <UserAddress />  <UserAddress />  <UserAddress /> <UserAddress /> <UserAddress /> 
      </div>

      <div className="flex w-full  items-center justify-end gap-2 p-4 mt-4 ">
        <span> <AiFillPlusSquare className='text-lg' /> </span> <span className="font-semibold "> Add New Address </span>
      </div>
      
    </UserDashboardLayout>
  );
}

export default page;
