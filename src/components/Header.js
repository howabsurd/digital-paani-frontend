import React from 'react'

const Header = () => {
  return (
   <div className='grid grid-cols-4 lg:grid-cols-8 h-24 justify-center l:px-10 px-4 bg-black items-center'>
  <img className="h-16 col-span-1" src="./Digital-Paani-logo.png" alt="Digital Paani Logo" />
  <div className=' hidden lg:col-span-5 lg:block'> </div>
  <div className='flex justify-center items-center lg:col-span-2 col-span-3 h-full text-white md:gap-7 text-center gap-3'>
  <h1 className='cursor-pointer hover:text-blue-200'>HOME</h1>
  <h1 className='cursor-pointer hover:text-blue-200'>ABOUT</h1>
  <h1 className='cursor-pointer hover:text-blue-200'>CONNECT</h1>
  <h1 className="cursor-pointer hover:text-blue-200">LEARN</h1>
  </div>
</div>

  )
}

export default Header