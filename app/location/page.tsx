"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import InnerPageBanner from '../components/InnerPageBanner';
import location from '../../public/images/location.jpg';
import InputField from '../components/inputs/InputField';
import Button from '../components/inputs/Button';
import Link from 'next/link';
import LocationCard from '../components/locationcard/LocationCard';


const page: React.FC = () => {

  const [formData, setFormData] = useState({
    country: '',
    state: '',
    city: '',
  });

  return (
    <div className='w-full min-h-screen'>
      <InnerPageBanner
        heading="Tracking Orders Page"
        text="Track Your Orders In Seconds"
        backgroundImage={location}
      />

      <div className="container py-12">
        {/* Search input section goes here */}
        <div className='w-full flex items-center justify-center px-8 py-8'>

          <div className=' flex p-2 w-9/12 items-center justify-center gap-4'>
            <InputField
              id="country"
              name="country"
              value={formData.country}
              placeholder="Select Your Country"
              dropdownOptions={['USA', 'Canada', 'UK', 'Nigeria']}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            />

            <InputField
              id="state"
              name="state"
              value={formData.state}
              placeholder="Select Your State"
              dropdownOptions={['Lagos State', 'Akwa-Ibom State', 'Abuja', 'Oyo State', 'Nasarawa State']}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            />

            <InputField
              id="city"
              name="city"
              value={formData.city}
              placeholder="Select Your City"
              dropdownOptions={['Ikorody', 'Abule Egba', 'Lekki']}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />

          </div>

          <div className=' flex w-3/12 h-5 p-2 items-center gap-2 justify-end'>

            <Button className='flex'>
              SEARCH
            </Button>

            <Link href="/" className="text-white flex bg-green-900 p-2 rounded-md">
              Show All Delivery Hub
            </Link>

          </div>

        </div>
        {/* Search input section ends here */}

        {/* Location Card Section Goes Here */}
        <div className="flex items-center justify-between gap-6 px-8 py-8">
          <LocationCard />
          <LocationCard />
          <LocationCard />
        </div>
        {/* Location Card Section Ends Here */}
      </div>

    </div>
  );
}

export default page;
