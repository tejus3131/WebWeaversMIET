'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; // Importing ScrollLink
import Timeline from './Timeline'; // Importing Timeline component

const Herosection = () => {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-20">
      <div className="z-10 w-full bg-blue-900 max-w-4xl items-center justify-between font-mono text-sm lg:flex">
        {/* Content */}
      </div>

      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        alt="JavaScript Logo"
        initial={{ x: 130, y: -1000 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 93, delay: 1, duration: 2 }}
        exit={{ opacity: 0, y: -1000 }}
        className="absolute top-0 left-[10%] md:left-1/2 transform -translate-x-1/2 rounded-full overflow-hidden h-16 w-16 sm:h-24 sm:w-24"
        onAnimationComplete={handleTransitionComplete}
        style={{ opacity: isTransitionComplete ? 0 : 1 }}
      />

      <motion.h1 
        className="text-6xl md:text-8xl font-bold"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        NEXTFEST
      </motion.h1>

      <motion.div
        className="hidden md:block absolute left-0 bottom-[2vh] md:bottom-0 text-4xl md:text-7xl md:left-0 p-5 rounded-full"
        {...rocketAnimation}
      >
        🚀
      </motion.div>

      <motion.div
        className="md:hidden absolute text-5xl top-[12vh] left-[50vw] p-5"
        initial={{ x: '-50vw', y: '50vh' }}
        animate={{ x: '0vw', y: '0vh' }}
        transition={{ type: 'spring', stiffness: 100, duration: 4 }}
      >
        🚀
      </motion.div>

      <div className="relative w-full flex justify-center mt-12 md:mt-0 h-full">
        <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-4 text-center lg:w-full lg:max-w-5xl lg:text-left">
          {/* ScrollLink to Timeline component */}
          <ScrollLink to="Timeline" smooth={true} duration={1000}>
            <motion.a
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-blue-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h2 className="mb-3 text-xl md:text-2xl font-semibold">
                Timeline{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Discover event highlights and important dates on our timeline announcement.
              </p>
            </motion.a>
          </ScrollLink>

          {/* Box 2 */}
          <ScrollLink to="Register" smooth={true} duration={1000}>
            <motion.a
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-blue-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.7 }}
            >
              <h2 className="mb-3 text-xl md:text-2xl font-semibold">
                Register{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </motion.a>
          </ScrollLink>

          {/* Box 3 */}
          <ScrollLink to="Explore" smooth={true} duration={1000}>
            <motion.a
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-blue-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.9 }}
            >
              <h2 className="mb-3 text-xl md:text-2xl font-semibold">
                Explore{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Explore starter templates for Next.js.
              </p>
            </motion.a>
          </ScrollLink>

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
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </motion.a>
        </div>
      </div>
    </main>
  );
};

export default Herosection;
