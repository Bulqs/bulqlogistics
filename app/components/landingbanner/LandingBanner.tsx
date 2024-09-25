"use client"
import React, { useState } from 'react'
import LandingBannerCard from './LandingBannerCard';
import LandingBannerSearch from './LandingBannerSearch';
import { IoMdCloseCircle } from "react-icons/io";
import LandingBannerCard2 from './LandingBannerCard2';
import BannerStepForm from '../bannerform/BannerStepForm';
import BannerStepForm2 from '../bannerform/BannerStepForm2';
import logo from '../../../public/images/logo4.svg';

const LandingBanner = () => {

  // State for tracking modal open status
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);
  const [isModalOpen3, setIsModalOpen3] = useState<boolean>(false);
  const [isInnerModalOpen, setIsInnerModalOpen] = useState<boolean>(false); // New state for inner modal
  const [isInnerModalOpen2, setIsInnerModalOpen2] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<{ title: string; description: string } | null>(null);
  const [selectedCard2, setSelectedCard2] = useState<{ title: string; description: string } | null>(null);
  const [selectedCard3, setSelectedCard3] = useState<{ title: string; description: string } | null>(null);

  const openModal = (title: string, description: string) => {
    setSelectedCard({ title, description });
    setIsModalOpen(true);
  };

  const openInnerModal = () => {
    setIsInnerModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsInnerModalOpen(false); // Close inner modal if open
  };


  const openModal2 = (title: string, description: string) => {
    setSelectedCard2({ title, description });
    setIsModalOpen2(true);
  };

  const openInnerModal2 = () => {
    setIsInnerModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
    setIsInnerModalOpen2(false)
  };



  const openModal3 = (title: string, description: string) => {
    setSelectedCard3({ title, description });
    setIsModalOpen3(true);
  };

  const closeModal3 = () => setIsModalOpen3(false);


  return (
    <div className=''
      // style={{
      //   backgroundImage: `url(${logo.src})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
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
          <div className="flex flex-col items-center justify-center bg-appBlack/80 w-11/12 p-8 rounded-lg shadow-xl shadow-appTitleBgColor">
            <div className="flex">
              <h3 className="text-center bg-appWhite text-appBlack lg:px-4 lg:py-1  rounded-2xl">Pick Up Package</h3>
            </div>

            <div className=" flex p-8 md:gap-12 datty">

              <LandingBannerCard2
                title="From Me to Another"
                description="Request Pick off and Drop off Services"
                onClick={openInnerModal}
              />

              <LandingBannerCard2
                title="From Another to Me"
                description="Request Pick off and Drop off Services"
                onClick={openInnerModal2}
              />

              <LandingBannerCard2
                title="Specif Address To Specific Address"
                description="Request Pick off and Drop off Services"
              />

              <LandingBannerCard2
                title="Pick up only"
                description="Request Pick off and Drop off Services"
              />
            </div>

            <div className="flex px-8">
              <button onClick={closeModal} className="modalClose">
                <IoMdCloseCircle className='text-appWhite' /> Close
              </button>
            </div>
          </div>

          {/* Render inner modal on top of the first modal */}
          {isInnerModalOpen && (
            <div className="fixed inset-0 lg:pt-2 flex items-start justify-center bg-black bg-opacity-70 z-60">
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center ">
                <BannerStepForm /> {/* Place the form here */}
                <button onClick={() => setIsInnerModalOpen(false)} className="lg:mt-2 px-4 py-2 bg-black text-white rounded lg:ml-4 flex items-center justify-between gap-2 ">
                  <IoMdCloseCircle className="text-red-700 text-2xl" />  Close Form
                </button>
              </div>
            </div>
          )}


          {/* Render inner midek on top of the first model for second div */}
          {isInnerModalOpen2 && (
            <div className="fixed inset-0 lg:pt-2 flex items-start justify-center bg-black bg-opacity-70 z-60">
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center ">
                <BannerStepForm2 /> {/* Place the form here */}
                <button onClick={() => setIsInnerModalOpen2(false)} className="lg:mt-2 px-4 py-2 bg-black text-white rounded lg:ml-4 flex items-center justify-between gap-2 ">
                  <IoMdCloseCircle className="text-red-700 text-2xl" />  Close Form
                </button>
              </div>
            </div>
          )}

        </div>
      )}
      {/* first modal section ends here */}

      {isModalOpen2 && selectedCard2 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex flex-col items-center justify-center bg-appBlack/80 w-11/12 p-8 rounded-lg shadow-xl shadow-appTitleBgColor">
            <div className="flex">
              <h3 className="text-center bg-appWhite text-appBlack lg:px-4 lg:py-1  rounded-2xl">Deliver Package</h3>
            </div>

            <div className=" flex p-8 md:gap-12">

              <LandingBannerCard2
                title="From Me to Another"
                description="Request Pick off and Drop off Services"
                onClick={openInnerModal}
              />

              <LandingBannerCard2
                title="From Another to Me"
                description="Request Pick off and Drop off Services"
                onClick={openInnerModal}
              />

              <LandingBannerCard2
                title="Specif Address To Specific Address"
                description="Request Pick off and Drop off Services"
              // onClick={openModal}
              />

              <LandingBannerCard2
                title="Pick up only"
                description="Request Pick off and Drop off Services"
              // onClick={openModal}
              />
            </div>

            <div className="flex px-8">
              <button onClick={closeModal2} className="modalClose">
                <IoMdCloseCircle className='text-appRed' /> Close
              </button>
            </div>

          </div>


          {/* Render inner modal on top of the first modal */}
          {isInnerModalOpen && (
            <div className="fixed inset-0 lg:pt-2 flex items-start justify-center bg-black bg-opacity-70 z-60">
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center ">
                <BannerStepForm /> {/* Place the form here */}
                <button onClick={() => setIsInnerModalOpen(false)} className="lg:mt-2 px-4 py-2 bg-black text-white rounded lg:ml-4 flex items-center justify-between gap-2 ">
                  <IoMdCloseCircle className="text-red-700 text-2xl" />  Close Form
                </button>
              </div>
            </div>
          )}


          {/* Render inner midek on top of the first model for second div */}
          {isInnerModalOpen2 && (
            <div className="fixed inset-0 lg:pt-2 flex items-start justify-center bg-black bg-opacity-70 z-60">
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center ">
                <BannerStepForm2 /> {/* Place the form here */}
                <button onClick={() => setIsInnerModalOpen2(false)} className="lg:mt-2 px-4 py-2 bg-black text-white rounded lg:ml-4 flex items-center justify-between gap-2 ">
                  <IoMdCloseCircle className="text-red-700 text-2xl" />  Close Form
                </button>
              </div>
            </div>
          )}

        </div>
      )}
      {/* second modal section ends here */}


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
