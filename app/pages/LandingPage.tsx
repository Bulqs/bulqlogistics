import React from 'react'
import { NewLetterSection } from '../components/NewLetterSection'
import logistics from '../../public/images/warehouse-logistics.png';
import nationwide from '../../public/images/nation-wide.png';
import ecommerce from '../../public/images/ecommerce.jpg';
import CardComponent from '../components/landingpagecards/CardComponent';
import CardComponent2 from '../components/landingpagecards/CardComponent2';
import CardComponent3 from '../components/landingpagecards/CardComponent3';
import CardComponentHeading from '../components/landingpagecards/CardComponentHeading';

const LandingPage = () => {
  return (
      <div className='w-full bg-blue-700 lg:px-16 lg:py-14 lg:pb-24'>
          
          <div className='flex flex-col lg:px-8 lg:gap-y-8'>
              
              <CardComponentHeading
                  title="Shipping Solution For Our Customers"
                  description="Quickly integrate powerful solutions that gives you more flexibility and control over your percel shipping and logistics progress"
              />

              <CardComponent3
                  title="E-Commerce"
                  description="We Provide E-commerce services where you buy and also ship to any location across the country"
                  imageSrc={ecommerce}
              />

              <CardComponent2
                  title="Nationwide Delivery"
                  description="We provide logistics services where we deliver to all customers in any location across the country"
                  imageSrc={nationwide}
              />

              <CardComponent
                  title="Warehousing Support"
                  description="We take care of your storage and distribution logistics needs, utilizing our strategic network of warehouses across the country."
                  imageSrc={logistics}
              />
          </div>
          
          
    </div>
  )
}

export default LandingPage
