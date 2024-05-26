import React from 'react'
const Timeline = () => {
  return (
            
    <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
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
        <h2 className='ml-6'>📋  Attendees arrive and register for the event. They receive event materials and are welcomed by the organizers.</h2>
      </div>
     <img src=''/>
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
     <img src=''/>
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
     <img src=''/>
    </div>
    {/* Card 4 */}
    <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
      {/* Dot Follwing the Left Vertical Line */}
      <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
      {/* Line that connecting the box with the vertical line */}
      <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0" />
      {/* Content that showing in the box */}
      <div className="flex-auto">
        <h1 className="text-md">🕘 10:30 am - 12:30 pm</h1>
        <h1 className="text-xl font-bold">🍽️ Lunch</h1>
        <h3 className='ml-6'> Break for lunch.</h3>
      </div>
     <img src=''/>
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
     <img src=''/>
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
     <img src=''/>
    </div>
    <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-red-600 text-white rounded mb-10 flex-col md:flex-row">
      {/* Dot Follwing the Left Vertical Line */}
      <div className="w-5 h-5 bg-red-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0" />
      {/* Line that connecting the box with the vertical line */}
      <div className="w-10 h-1 bg-red-300 absolute -left-10 z-0" />
      {/* Content that showing in the box */}
      <div className="flex-auto">
        <h1 className="text-md">🕘 4:10 pm - 4:50 pm</h1>
        <h1 className="text-xl font-bold">🏆 Award Ceremony</h1>
        <h3 className='ml-6'> Recognizing achievements and distributing awards.</h3>
      </div>
     <img src=''/>
    </div>
    
  </div>
</div>


  )
}

export default Timeline