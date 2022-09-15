import React from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-auto px-4'>
      {/* Image */}
      <a href='/'>
        <img className='max-w-[150px]' src={Logo} alt='logo'/>
      </a>
      <button className='bg-white px-8 py-2 rounded-3xl text-[#00252e] font-bold'>
        Try It Free
      </button>
    </div>
  )
}

export default Navbar