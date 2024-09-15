import React from 'react'
import LandingBannerCard from './LandingBannerCard';
import LandingBannerSearch from './LandingBannerSearch';


// interface LandingPageBannerBackgroundImgProps {
//   imageSrc: string;
// }

const LandingBanner = () => {
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
        />

        <LandingBannerCard
          title="Delivery Package"
          description="request Pick off and Drop off Services"
        />

        <LandingBannerCard
          title="Pick up Package"
          description="Request Pick off and Drop off Services"
        />

      </div>
    </div>
  )
}

export default LandingBanner;
