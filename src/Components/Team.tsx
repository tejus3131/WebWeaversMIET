'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import webweaverslogo from '../images/Webweavers.png'
import nirdesh from '../images/nirdesh.jpg';
import deepanshi from '../images/Deepanshi.jpg';
import tojo from '../images/tojo.jpg'
import Krishna from '../images/krishna.jpg';
import Shruti from '../images/shruti.webp';
import bhati from '../images/bhati.jpg'
import prakhar from '../images/prakhar.jpg'
import harshita from '../images/harshita.jpg'
import ananya from '../images/ananya.jpg'
import rishika from '../images/Rishika.jpg'
import abhishek from '../images/abhishek.jpg'
const teamMembers = [
  { src: nirdesh, name: 'Nirdesh Sharma', role: 'Lead' },
  { src: abhishek, name: 'Abhishek Panwar', role: 'Secretary'},
  { src: tojo, name: 'Tejus Gupta', role: 'Web Developer'},
  { src: Krishna, name: 'Krishna Sharma', role: 'Event Designer' },
  { src: deepanshi, name: 'Deepanshi Gautam', role: 'Event Manager' },
  { src: bhati, name: 'Aayush Bhati', role: 'PR Manager' },
  { src: Shruti, name: 'Shruti Sharma', role: 'Event Manager' },
  { src: ananya, name: 'Ananya Choudhary', role: 'Graphics Designer' },
  { src: Krishna, name: 'Priyanshi Sharma', role: 'Event Manager' },
  { src: rishika, name: 'Rishika Yadav', role: 'Event Manager'},
  { src: prakhar, name: 'Prakhar Rai', role: 'Event Manager'},
  { src: harshita, name: 'Harshita Narang', role: 'Event Manager'},
];

const Team: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const totalMembers = teamMembers.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const membersPerPage = isMobile ? 1 : 3;

  const prev = () => {
    if (offset > 0) {
      setOffset(offset - 1);
    }
  };

  const next = () => {
    if (offset < Math.ceil(totalMembers / membersPerPage) - 1) {
      setOffset(offset + 1);
    }
  };

  return (

<>
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
          Welcome to WebWeavers, the ultimate destination for web enthusiasts! Whether you're a seasoned developer or just starting your journey in the world of web development, we've got you covered. Join us as we explore the latest trends, share knowledge, and collaborate on exciting projects. Let's weave the web together!
          </p>
         
        </div>
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-blue-600 w-full mb-2 shadow-lg rounded-lg ">
            <img alt="..." src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" className="w-full align-middle rounded-t-lg" />
            <blockquote className="relative p-8 mb-4">
              <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
              </svg>

              <h4 className="text-xl font-bold text-white">
              Empowering the Web Community! 🌐
              </h4>
              <p className="text-md font-light mt-2 text-white">
              "Fostering innovation, collaboration, and growth in web development through shared knowledge and hands-on experience. Join us in shaping the digital future!" 🌐✨
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
    <div className="mx-auto m-0 shadow-lg rounded-lg p-3 max-w-4xl w-full">
      <h2 className="text-3xl font-light text-blue-400 mb-6 text-center">Meet Our Stellar Team! 🌟👩‍💻👨‍💻
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="parent flex transition-transform duration-1000"
          style={{ transform: `translateX(-${offset * 100}%)` }}
          ref={carouselRef}
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member flex-shrink-0 w-full sm:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-6 shadow-lg text-center">
                <Image
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src={member.src}
                  alt={member.name}
                  width={150}
                  height={150}
                />
                <h3 className="text-xl font-semibold text-teal-600">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={prev} className="bg-blue-400 text-white p-3 rounded-l-full mx-2 hover:bg-white hover:text-[#48A0A9] hover:border-2 focus:outline-none">Prev</button>
        <button onClick={next} className="bg-blue-400 text-white p-3 rounded-r-full mx-2 hover:bg-white hover:text-[#48A0A9] hover:border-2 focus:outline-none">Next</button>
      </div>
    </div>
    </>
  );
};

export default Team;
