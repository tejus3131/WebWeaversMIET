// Footer.js

import React from 'react';
import Image from 'next/image';
import logo from '../images/Webweavers.png'
const Foot = () => {
  return (
    <footer className=" mt-12 text-black bg-zinc-100 py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <div className="flex  justify-center w-auto h-auto ">
             <Image
             src={logo}
             alt='logo'
             width={120}
             height={120}
             className='flex  justify-end items-end'
             />
             <h2 className=' text-xl flex justify-start items-center mb-2 text-blue-500'>WebWeavers</h2>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:order-1 text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} WebWeavers All rights reserved.
            </p>
            {/* <p className="text-sm mt-1">
              Developed by <a href="#" className="text-blue-500 hover:underline"></a>
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;