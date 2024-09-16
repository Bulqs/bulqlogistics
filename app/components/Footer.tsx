import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { navigation } from '@/data/data';
import { FontAwesomeIcons } from './FontAwesomeIcons';

const Footer = () => {
  return (
      <footer className="bg-appBlack px-10 pt-10" aria-labelledby="footer-heading">
          <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 bg-appBlack">
              {navigation.map((item) => (
                  <div key={item.title} className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-appBlack lg:aspect-none xl:h-80 lg:h-80">
                          <ul className=''>
                              <h4 className="text-appWhite font-inter font-bold mb-3">{item.title}</h4>
                              <li className='inline'>
                                  {item.links.map((item) => (
                                      <Link key={item.title} href={item.url} className=" italic leading-8 font-lato text-lg text-appWhite hover:text-white">
                                          {item.title}
                                          <span> <br /> </span>
                                      </Link>
                                  ))}
                              </li>
                          </ul>
                      </div>
                  </div>
              ))}
          </div>

          <div className="max-w-full px-0  pb-8 pt-10  lg:px-0 bg-appBlack">
              <div className="mt-0 pt-0 sm:mt-10 md:flex md:items-center md:justify-between lg:mt-0 bg-appBlack">
                  <div className="md:order-2 bg-appBlack gap-3">
                      <div>
                          <h4 className="text-appWhite font-inter text-xl"> Join Bulq on</h4>
                      </div>
                      <div className='mt-4'>
                          <FontAwesomeIcons />
                      </div>
                  </div>
                  <div className="flex space-x-6 md:order-2 xl:mt-12">
                      <p className="font-bold mt-8 text-base leading-5 text-appWhite font-inter md:order-1 md:mt-0">
                          PAYMENT METHODS & DELIVERY
                      </p>
                  </div>
                  <div className="flex space-x-6 md:order-2 xl:mt-12">
                      <p className="font-bold mt-8 text-lg leading-5 text-appWhite font-inter md:order-1 md:mt-0">
                          Copyrite section comming soon
                      </p>
                  </div>

              </div>
          </div>
      </footer >
  )
}

export default Footer
