import React from 'react';
import Image from 'next/image';
import webweaverslogo from '../images/Webweavers.png'
const AboutSection = () => {
  return (
    <section className="bg-blueGray-200 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
              <div className="px-4 flex-auto">
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-12">
          <div className="w-full md:w-5/12 px-1 mr-auto ml-auto">
            <Image 
            className='-ml-7'
            src={webweaverslogo}
            alt='webweavers'
            width={150}
            height={150}
           />
                
              
            
            <h3 className="text-3xl text-blue-600 -mt-12   font-semibold leading-normal">
             WebWeavers
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            Welcome to WebWeavers, the ultimate destination for web enthusiasts! Whether you&apos;re a seasoned developer or just starting your journey in the world of web development, we&apos;ve got you covered. Join us as we explore the latest trends, share knowledge, and collaborate on exciting projects. Let&apos;s weave the web together!
            </p>
           
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-blue-600 w-full mb-2 shadow-lg rounded-lg ">
              <Image alt="..." src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" className="w-full align-middle rounded-t-lg" />
              <blockquote className="relative p-8 mb-4">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                </svg>

                <h4 className="text-xl font-bold text-white">
                Empowering the Web Community! 🌐
                </h4>
                <p className="text-md font-light mt-2 text-white">
                &quot;Fostering innovation, collaboration, and growth in web development through shared knowledge and hands-on experience. Join us in shaping the digital future!&quot; 🌐✨
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
              🌟 Made with Passion, Powered by Innovation! 🌟
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default AboutSection ;
 