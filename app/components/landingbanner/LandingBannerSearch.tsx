import React from 'react'

const LandingBannerSearch = () => {
  return (
      <div className=" flex justify-start items-center py-7 md:px-[23px] relative w-11/12">
          <input
              className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none"
              type="text"
              placeholder="Search"
          />
          <button type="submit" className="absolute right-7 z-10 rounded-md bg-appTitleBgColor px-3.5 py-2.5 text-sm font-bold text-appWhite shadow-sm hover:bg-appBanner">Track Orders</button>

      </div>

  )
}

export default LandingBannerSearch
