import React from 'react';

const LocationCard: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center w-4/12  px-4 py-8 bg-appTitleBgColor rounded-lg'>
      <div className="flex items-center justify-between px-3 w-full">
        <h3 className='font-bold text-white'> Bulq Lagos </h3> <h4 className="bg-appTitleBgColor text-white flex items-center justify-center rounded-lg px-10 py-3"> Ikeja </h4>
      </div>
      
      <div className="flex items-center justify-start gap-8 px-3 w-full mt-4">
        <h4 className="bg-appTitleBgColor text-white flex items-center justify-center rounded-lg px-5 py-2"> Pick Up </h4>
        <h4 className="bg-appTitleBgColor text-white flex items-center justify-center rounded-lg px-5 py-2"> Delivery </h4>
      </div>

      <div className="flex text-white items-center justify-start px-3 w-full mt-4">
        <p> <span className="font-medium"> Address: {" "}</span> <span>123 IkeJa Road Lagos Island</span>  </p>
      </div>

      <div className="flex flex-row w-full items-start justify-between bg-appNav/60  mt-6 px-2 py-1 rounded-md">
        
        <div className="flex flex-col items-start justify-start w-full ">
          <h4 className='text-white '> Working Hours</h4>
          <div className='text-white flex flex-col items-start w-full'>
            <p className='flex font-semibold items-start justify-between w-full'> <span className="font-medium"> Monday: {" "}</span> <span className=""> 8am - 5pm</span>  </p>
            <p className='flex font-semibold items-start justify-between w-full'> <span className="font-medium"> Tuesday: {" "}</span> <span> 8am - 5pm</span>  </p>
            <p className='flex font-semibold items-start justify-between w-full'> <span className="font-medium"> Wednesday: {" "}</span> <span> 8am - 5pm</span>  </p>
            <p className='flex font-semibold items-start justify-between w-full'> <span className="font-medium"> Thursday: {" "}</span> <span> 8am - 5pm</span>  </p>
            <p className='flex font-semibold items-start justify-between w-full'> <span className="font-medium"> Friday: {" "}</span> <span> 8am - 5pm</span>  </p>
            <p className='flex font-semibold items-start justify-between w-full'> <span className="font-medium"> Saturday: {" "}</span> <span> 8am - 5pm</span>  </p>
          </div>
        </div>
        
        <div className="flex flex-col items-start justify-start w-full">
          <h4 className='text-white flex flex-col items-end w-full'> Phone Number </h4>
          <div className='text-white flex flex-col items-end w-full'>
            <p className='flex font-semibold'> <span className="font-medium"> +234 807 8789 675 </span>  </p>
            <p className='flex font-semibold'> <span className="font-medium"> +234 807 8789 675 </span>  </p>
            <p className='flex font-semibold'> <span className="font-medium"> +234 807 8789 675 </span>  </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default LocationCard;
