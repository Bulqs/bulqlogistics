"use client"
import React, { useState } from 'react'
import LandingBannerCard from './LandingBannerCard';
import LandingBannerSearch from './LandingBannerSearch';
import { IoMdCloseCircle } from "react-icons/io";


// interface LandingPageBannerBackgroundImgProps {
//   imageSrc: string;
// }

const LandingBanner = () => {

  // State for tracking modal open status
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);
  const [isModalOpen3, setIsModalOpen3] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<{ title: string; description: string } | null>(null);
  const [selectedCard2, setSelectedCard2] = useState<{ title: string; description: string } | null>(null);
  const [selectedCard3, setSelectedCard3] = useState<{ title: string; description: string } | null>(null);

  const openModal = (title: string, description: string) => {
    setSelectedCard({ title, description });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  // Deliver Package
  const openModal2 = (title: string, description: string) => {
    setSelectedCard2({ title, description });
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
    setSelectedCard2(null);
  };

  // This is for Book a Drop Off
  const openModal3 = (title: string, description: string) => {
    setSelectedCard3({ title, description });
    setIsModalOpen3(true);
  };

  const closeModal3 = () => {
    setIsModalOpen3(false);
    setSelectedCard3(null);
  };


  return (
    <div className=''>
      <div className='flex md:w-7/12 mx-auto itmes-center justify-evenly'>
        <h2 className='h2Banner'> Ship To Any Part Of The World With Peace Of Mind </h2>
      </div>

      <div className='flex md:w-7/12 mx-auto itmes-center justify-evenly'>
        <LandingBannerSearch />
      </div>

      <div className='flex md:w-7/12 mx-auto itmes-center justify-evenly'>
        <LandingBannerCard
          title="Pick up Package"
          description="Request Pick off and Drop off Services"
          onClick={openModal}
        />

        <LandingBannerCard
          title="Delivery Package"
          description="request Pick off and Drop off Services"
          onClick={openModal2}
        />

        <LandingBannerCard
          title="Book a Drop Off"
          description="Request Drop off and Drop off Services"
          onClick={openModal3}
        />
      </div>


      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex flex-col bg-appBlue w-11/12 p-8 rounded-lg shadow-lg">
            <div className=" flex p-8 md:gap-12">
              {/* <h3 className="text-xl font-bold">{selectedCard.title}</h3>
            <p>{selectedCard.description}</p> */}
              <LandingBannerCard
                title="From Me to Another"
                description="Request Pick off and Drop off Services"
              // onClick={openModal}
              />

              <LandingBannerCard
                title="From Another to Me"
                description="Request Pick off and Drop off Services"
              // onClick={openModal}
              />

              <LandingBannerCard
                title="Specif Address To Specific Address"
                description="Request Pick off and Drop off Services"
              // onClick={openModal}
              />

              <LandingBannerCard
                title="Pick up only"
                description="Request Pick off and Drop off Services"
              // onClick={openModal}
              />
            </div>

            <div className="flex px-8">
              <button onClick={closeModal} className="flex items-center justify-center gap-2 mt-4 px-4 py-2 bg-blue-900 text-white rounded">
                <IoMdCloseCircle className='text-appRed' /> Close
              </button>
            </div>

          </div>

        </div>
      )}


      {isModalOpen2 && selectedCard2 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {/* <h3 className="text-xl font-bold">{selectedCard2.title}</h3>
            <p>{selectedCard2.description}</p> */}
            <button onClick={closeModal2} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}


      {isModalOpen3 && selectedCard3 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {/* <h3 className="text-xl font-bold">{selectedCard3.title}</h3>
            <p>{selectedCard3.description}</p> */}
            <button onClick={closeModal3} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default LandingBanner;
