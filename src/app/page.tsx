// import Herosection from "@/Components/Herosection";
// import Timeline from "@/Components/Timeline";
// import Contact from "@/Components/Contact";
// import Slider from "@/Components/AboutSection";
// import Team from "@/Components/Team";
'use client'
import { motion } from 'framer-motion';
// import  Link  from 'react-scroll';


import mukesh from '../images/Muskesh-sir.jpg';
import swati from '../images/swati.jpg';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import webweaverslogo from '../images/Webweavers.png'
import nirdesh from '../images/nirdesh.jpg';
import deepanshi from '../images/Deepanshi.jpg';
import tojo from '../images/tojo.jpg'
import priyanshi from '../images/priyanshi.jpg'
import Krishna from '../images/krishna.jpg';
import Shruti from '../images/shruti.webp';
import bhati from '../images/bhati.jpg'
import prakhar from '../images/prakhar.jpg'
import harshita from '../images/harshita.jpg'
import ananya from '../images/ananya.jpg'
import rishika from '../images/Rishika.jpg'
import abhishek from '../images/abhishek.jpg'
import Foot from '@/Components/Foot';
const teamMembers = [
  { src: nirdesh, name: 'Nirdesh Sharma', role: 'Lead' },
  { src: abhishek, name: 'Abhishek Panwar', role: 'Secretary' },
  { src: tojo, name: 'Tejus Gupta', role: 'Web Developer' },
  { src: Krishna, name: 'Krishna Sharma', role: 'Event Designer' },
  { src: deepanshi, name: 'Deepanshi Gautam', role: 'Event Manager' },
  { src: bhati, name: 'Aayush Bhati', role: 'PR Manager' },
  { src: Shruti, name: 'Shruti Sharma', role: 'Event Manager' },
  { src: ananya, name: 'Ananya Choudhary', role: 'Graphics Designer' },
  { src: priyanshi, name: 'Priyanshi Sharma', role: 'Event Manager' },
  { src: rishika, name: 'Rishika Yadav', role: 'Event Manager' },
  { src: prakhar, name: 'Prakhar Rai', role: 'Event Manager' },
  { src: harshita, name: 'Harshita Narang', role: 'Event Manager' },
];


export default function Home() {
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



  const [isTransitionComplete, setIsTransitionComplete] = useState(false);

  const handleTransitionComplete = () => {
    setIsTransitionComplete(true);
  };

  const rocketAnimation = {
    initial: { x: '-100vw', y: '50vh' }, // Start from bottom left
    animate: { x: '50vw', y: '-50vh' }, // Move to top right
    transition: { type: 'spring', stiffness: 100, duration: 4 }
  };
  return (
    <div className="">
      {/* <Herosection/> */}
      <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-20">
        <motion.div className="z-10 w-full  max-w-4xl items-center justify-between font-mono text-sm lg:flex"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}>
          {/* Content */}
          <Image
            className="w-32 h-32 rounded-full mx-auto mb-4"
            src={webweaverslogo}

            alt='logo'
            width={250}
            height={250}
          />

        </motion.div>

        {/* <motion.Image alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        alt="JavaScript Logo"
        initial={{ x: 130, y: -1000 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 93, delay: 1, duration: 2 }}
        exit={{ opacity: 0, y: -1000 }}
        className="absolute top-0 left-[10%] md:left-1/2 transform -translate-x-1/2 rounded-full overflow-hidden h-16 w-16 sm:h-24 sm:w-24"
        onAnimationComplete={handleTransitionComplete}
        style={{ opacity: isTransitionComplete ? 0 : 1 }}
      /> */}
        {/* <div className="relative z-[-1] flex place-items-center mt-16 md:mt-0 before:absolute before:h-[200px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[200px] after:w-full after:translate-x-1/2 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"> */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          NEXTFEST
        </motion.h1>
        {/* </div> */}

        {/* Rocket Animation Div for Desktop */}
        {/* <motion.div
        className="hidden md:block absolute left-0 bottom-[12vh] md:bottom-0 text-4xl md:text-7xl md:left-0 p-5 rounded-full"
        {...rocketAnimation}
      >
        🚀
      </motion.div> */}

        {/* Rocket Animation Div for Mobile
      <motion.div
        className="md:hidden absolute text-5xl top-[16vh] left-[50vw] p-5"
        initial={{ x: '-50vw', y: '50vh' }} // Start from bottom left
        animate={{ x: '0vw', y: '0vh' }} // Move to the specified position
        transition={{ type: 'spring', stiffness: 100, duration: 4 }}
      >
        🚀
      </motion.div> */}

        <div className="relative w-full flex justify-center mt-12 md:mt-0 h-full">
          <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-4 text-center lg:w-full lg:max-w-5xl lg:text-left">
            {/* <Link to="timelineSection" smooth={true} duration={1000}> */}
            {/* Box 2 */}
            <motion.a
              href="https://www.commudle.com/communities/webweavers/events/nextfest-a-hands-on-next-js-workshop"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-blue-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              initial={{ opacity: 0, x: -100 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation to apply
              transition={{ duration: 1.7 }}
            >
              <h2 className="mb-3 text-xl md:text-2xl font-semibold">
                Register{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Learn about Next.js in an interactive Session with&nbsp;quizzes!
              </p>
            </motion.a>
            {/* Box 1 */}
            <motion.a
              href="#Timeline"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-blue-300"
              target='_self'
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              initial={{ opacity: 0, x: -100 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation to apply
              transition={{ duration: 1.5 }}
            >

              <h2 className="mb-3 text-xl md:text-2xl font-semibold">
                Timeline{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Discover event highlights and important dates on our timeline announcement.
              </p>
            </motion.a>


            {/* Box 3 */}
            <motion.a
              href="#Team"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-blue-300"
              target="_self"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              initial={{ opacity: 0, x: -100 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation to apply
              transition={{ duration: 1.9 }}
            >
              <h2 className="mb-3 text-xl md:text-2xl font-semibold">
                Explore{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Embark on a journey of discovery together.
              </p>
            </motion.a>

            {/* Box 4 */}
            <motion.a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:bg-blue-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              initial={{ opacity: 0, x: -100 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation to apply
              transition={{ duration: 2.1 }}
            >
              <h2 className="mb-3 text-xl md:text-2xl font-semibold">
                Contact us{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                &quot;Have questions or inquiries? Reach out to us!&quot;
              </p>
            </motion.a>
          </div>
        </div>
      </main>


      {/* <Timeline/> */}


      <div id='Timeline' className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
        <h1 className="text-3xl text-center font-bold text-blue-500">Our Story Unfolds</h1>
        <div className="border-l-2 mt-10">
          {/* Card 1 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* Dot Follwing the Left Vertical Line */}
            <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
            {/* Line that connecting the box with the vertical line */}
            <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0" />
            {/* Content that showing in the box */}
            <div className="flex-auto">
              <h1 className="text-md">🕘 9:00 am - 10:00 am</h1>
              <h1 className="text-xl  font-bold">🚪 Welcome and Registration</h1>
              <h2 className='ml-6'>📋  Attendees arrive and check-in for the event. They receive event materials and are welcomed by the organizers.</h2>
            </div>
            <Image alt="" src='' />
          </div>
          {/* Card 2 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* Dot Follwing the Left Vertical Line */}
            <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
            {/* Line that connecting the box with the vertical line */}
            <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0" />
            {/* Content that showing in the box */}
            <div className="flex-auto">
              <h1 className="text-md">🕘 10:00 am - 10:30 am</h1>
              <h1 className="text-xl font-bold">🎉 Ceremony</h1>
              <h2 className='ml-6'>        Opening ceremony for the event.</h2>
            </div>
            <Image alt="" src='' />
          </div>
          {/* Card 3 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* Dot Follwing the Left Vertical Line */}
            <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
            {/* Line that connecting the box with the vertical line */}
            <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0" />
            {/* Content that showing in the box */}
            <div className="flex-auto">
              <h1 className="text-md">🕘 10:30 am - 12:30 pm</h1>
              <h1 className="text-xl font-bold">📚 Session: Next.js Introduction and Advanced Techniques</h1>
              <h3 className='ml-6'>🚀  Learn advanced techniques and best practices in Next.js development.</h3>
            </div>
            <Image alt="" src='' />
          </div>
          {/* Card 4 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            {/* Dot Follwing the Left Vertical Line */}
            <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
            {/* Line that connecting the box with the vertical line */}
            <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0" />
            {/* Content that showing in the box */}
            <div className="flex-auto">
              <h1 className="text-md">🕘 12:30 am - 1:30 pm</h1>
              <h1 className="text-xl font-bold">🍽️ Lunch</h1>
              <h3 className='ml-6'> Break for lunch.</h3>
            </div>
            <Image alt="" src='' />
          </div>
          {/* Card 5 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
            {/* Dot Follwing the Left Vertical Line */}
            <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0" />
            {/* Line that connecting the box with the vertical line */}
            <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0" />
            {/* Content that showing in the box */}
            <div className="flex-auto">
              <h1 className="text-md">🕘 1:30 pm - 2:10 pm</h1>
              <h1 className="text-xl font-bold">🧠 Quiz: Next.js Trivia</h1>
              <h3 className='ml-6'>🤔  Test your knowledge on Next.js with a fun quiz.</h3>
            </div>
            <Image alt="" src='' />
          </div>
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-700 text-white rounded mb-10 flex-col md:flex-row">
            {/* Dot Follwing the Left Vertical Line */}
            <div className="w-5 h-5 bg-blue-700 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0" />
            {/* Line that connecting the box with the vertical line */}
            <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0" />
            {/* Content that showing in the box */}
            <div className="flex-auto">
              <h1 className="text-md">🕘 2:10 pm - 4:10 pm</h1>
              <h1 className="text-xl font-bold">💻Deployment Workshop</h1>
              <h3 className='ml-6'>🛠️  Practical workshops on deploying Next.js applications.</h3>
            </div>
            <Image alt="" src='' />
          </div>
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-red-600 text-white rounded mb-10 flex-col md:flex-row">
            {/* Dot Follwing the Left Vertical Line */}
            <div className="w-5 h-5 bg-red-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0" />
            {/* Line that connecting the box with the vertical line */}
            <div className="w-10 h-1 bg-red-300 absolute -left-10 z-0" />
            {/* Content that showing in the box */}
            <div className="flex-auto">
              <h1 className="text-md">🕘 4:10 pm - 4:40 pm</h1>
              <h1 className="text-xl font-bold">🏆 Award Ceremony</h1>
              <h3 className='ml-6'> Recognizing achievements and distributing awards.</h3>
            </div>
            <Image alt="" src='' />
          </div>

        </div>
      </div>

      {/* <Team/> */}
      <div id='Team'>

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
                  <Image alt="" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" className="w-full align-middle rounded-t-lg" width={1000} height={1000} />
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

        <>
          <h2 className="text-3xl mt-10 font-light text-blue-400 mb-6 text-center">&quot;Introducing Our Faculty Coordinator!&quot; 🌟</h2>
          <div className='flex flex-col md:flex-row justify-center items-center md:space-y-0 md:space-x-6'>

            {/* Profile card for Dr. (Prof.) Mukesh Rawat */}
            <div className="max-w-lg my-4 mx-auto md:mx-0 bg-white rounded-lg shadow-md p-6 w-full md:w-auto">
              <div className="flex justify-center">
                <Image
                  src={mukesh}
                  alt="Dr. (Prof.) Mukesh Rawat"
                  className="w-44 h-44 rounded-full object-cover"
                />
              </div>
              <div className="user-info-holder flex flex-col justify-center gap-2 mt-4">
                <h2 className="text-2xl font-bold text-center text-blue-900">Dr.(Prof.) Mukesh Rawat</h2>
                <span className="text-lg text-blue-900 text-center">HOD(CSE)</span>
                <div className="desc text-blue-900 font-light mt-4">
                  <p>Dr. (Prof.) Mukesh Rawat, the HOD of CSE, is a distinguished academic leader known for his expertise and dedication. His innovative approach and commitment to student success have significantly advanced the department, inspiring both students and faculty.</p>
                </div>
              </div>
            </div>

            {/* Profile card for Dr. (Prof.) Swati Sharma */}
            <div className="max-w-lg my-4 mx-auto md:mx-0 bg-white rounded-lg shadow-md p-6 w-full md:w-auto">
              <div className="flex justify-center">
                <Image
                  src={swati}
                  alt="Dr. (Prof.) Swati Sharma"
                  className="w-44 h-44 rounded-full object-cover"
                />
              </div>
              <div className="user-info-holder flex flex-col justify-center gap-2 mt-4">
                <h2 className="text-2xl font-bold text-center text-blue-900">Dr.(Prof.) Swati Sharma</h2>
                <span className="text-lg text-blue-900 text-center">HOD(IT)</span>
                <div className="desc text-blue-900 font-light mt-4">
                  <p>Dr. (Prof.) Swati Sharma, the esteemed HOD of IT, is a visionary leader renowned for her dedication to academic excellence and innovation. Her expertise and commitment inspire students and faculty alike, fostering a culture of growth and achievement.</p>
                </div>
              </div>
            </div>
          </div>
        </>
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
                  <div className="bg-gray-200 rounded-lg p-6 shadow-lg text-center overflow-hidden">
                    <Image
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      src={member.src}
                      alt={member.name}
                      width={150}
                      height={150}
                    />
                    <h3 className="text-xl font-semibold text-blue-400">{member.name}</h3>
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
      </div>
      <Foot />

    </div>

  );
}