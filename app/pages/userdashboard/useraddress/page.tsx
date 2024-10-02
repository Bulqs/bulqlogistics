"use client"
import UserDashboardLayout from '@/app/components/userdashboardlayout/layout/UserDashboardLayout';
import React, { useState } from 'react';
import { FaCircle, FaTrashAlt } from 'react-icons/fa';
import UserAddress from './UserAddress';
import { AiFillPlusSquare } from "react-icons/ai";
import Modal from '@/app/components/userdashboardlayout/modal/Modal';

const page = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <UserDashboardLayout>

      <div className="flex bg-gray-800 px-2 py-1 mb-4 rounded-md">
        <h2 className="text-xl font-bold text-white p-1">ADDRESS</h2>
      </div>

      <div className="flex flex-wrap items-start justify-start gap-x-9 gap-y-4">
        <UserAddress />  <UserAddress />  <UserAddress /> <UserAddress /> <UserAddress /> 
      </div>

      <div className="flex  w-full items-center justify-end mt-12 ">
        <div className="p-2 cursor-pointer bg-appTitleBgColor flex items-center justify-end gap-2">
          <span> <AiFillPlusSquare className='text-lg text-white' /> </span> <span className="font-semibold text-white Address" onClick={openModal}> Add New Address </span>
        </div>
      </div>
      
      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </UserDashboardLayout>
  );
}

export default page;
