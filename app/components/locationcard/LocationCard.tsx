import React from 'react';

interface LocationCardProps {
  title: string;
  location: string;
  address: string;
  workingHours: { day: string; hours: string }[];
  phoneNumbers: string[];
}

const LocationCard: React.FC<LocationCardProps> = ({ title, location, address, workingHours, phoneNumbers }) => {
  return (
    <div className='flex flex-col items-center justify-center w-[32.2%] px-4 py-8 bg-appTitleBgColor rounded-lg'>
      <div className="flex items-center justify-between px-3 w-full">
        <h3 className='font-bold text-white'>{title}</h3>
        <h4 className="bg-appNav/60 text-white flex items-center justify-center rounded-lg px-10 py-3">{location}</h4>
      </div>

      <div className="flex items-center justify-start gap-8 px-3 w-full mt-4">
        <h4 className="bg-appNav/60 text-white flex items-center justify-center rounded-lg px-5 py-2">Pick Up</h4>
        <h4 className="bg-appNav/60 text-white flex items-center justify-center rounded-lg px-5 py-2">Delivery</h4>
      </div>

      <div className="flex text-white items-center justify-start px-3 w-full mt-4">
        <p><span className="font-medium">Address: {" "}</span><span>{address}</span></p>
      </div>

      <div className="flex flex-row w-full items-start justify-between bg-appNav/60 mt-6 px-2 py-3 rounded-md">
        <div className="flex flex-col items-start justify-start w-full">
          <h4 className='text-white bg-appTitleBgColor px-2 py-1 rounded-md'>Working Hours</h4>
          <div className='text-white flex flex-col items-start w-full mt-4'>
            {workingHours?.map((item, index) => (
              <p key={index} className='flex font-semibold items-start justify-between w-full'>
                <span className="font-medium">{item.day}: {" "}</span>
                <span>{item.hours}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end w-full">
          <h4 className='text-white bg-appTitleBgColor rounded-md px-2 py-1 flex flex-col text-end'>Phone Number</h4>
          <div className='text-white flex flex-col items-end w-full mt-4'>
            {phoneNumbers?.map((phone, index) => (
              <p key={index} className='flex font-semibold'>
                <span className="font-medium">{phone}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
