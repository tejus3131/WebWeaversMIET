import React from 'react';
import Image from 'next/image';
import mukesh from '../images/Muskesh-sir.jpg';
import swati from '../images/swati.jpg';

const Contact = () => {
  return (
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
  );
};

export default Contact;
