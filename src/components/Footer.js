import React from 'react'

const Footer = () => {
  return (
    // <div className='h-72 bg-gradient-to-r from-gray-700 to-black '>
    //     <div className="max-w-600 mx-auto md:grid md:grid-cols-2 h-full">
    //         <div className='md:col-span-1 items-center justify-center flex flex-col'>
    //          <img src="./Digital-Paani-logo.png" alt="Digital-Paani-logo" className="h-20" />
    //          <h1 className="text-md text-white">801, BPTP Park Centra, Sector 30, Gurgaon – 122001</h1>
    //      </div>
    //         <div className='md:col-span-1'>Hello World</div>
    //     </div>
    // </div>
    <>
    <div className='h-76 md:h-72 bg-gradient-to-r from-gray-700 to-black'>
  <div className="max-w-screen-lg mx-auto md:grid md:grid-cols-2 h-full">
    <div className='md:col-span-1 items-center justify-center flex flex-col'>
        <div className="w-full">
      <img src="./Digital-Paani-logo.png" alt="Digital-Paani-logo" className="h-20" />
      </div>
      <h1 className="text-2rem text-white w-full">801, BPTP Park Centra, Sector 30, Gurgaon – 122001</h1>
    </div>
    {/* Apply `h-full` class to make the second div act as a container */}
    <div className='md:col-span-1 h-full flex flex-col justify-center items-center gap-4'>
        <h1 className='text-3rem text-white w-full cursor-pointer'>hello@digitalpaani.com</h1>
        <h1 className='text-3rem text-white w-full cursor-pointer'>+91 99106 06953 / +91 70114 88898 / +91 80951 36210‬</h1>
        <h1 className='text-3rem text-white w-full cursor-pointer '>LinkedIn </h1>

    </div>
  </div>
</div>
<div className='bg-gray-800 h-16 flex items-center justify-center text-white'>
    <h1>Copyright © 2024 Digital Paani. All Rights Reserved. </h1>

</div>
</>
  )
}

export default Footer