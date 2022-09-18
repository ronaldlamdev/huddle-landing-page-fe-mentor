import React from 'react'
import Navbar from './Navbar'
import MockUp from '../assets/illustration-mockups.svg'

const Hero = () => {
  return (
    <div className='hero w-full h-screen flex flex-col justify-between py-8 lg:gap-40'>
      
      <Navbar />
      {/* Text */}
      <div className='lg:grid lg:grid-cols-2 lg:h-full'>
        <div className='px-2 lg:px-8 mx-auto text-center mt-8 lg:mt-0 lg:text-left'>
          <h1 className='text-3xl text-[#00252e] lg:text-5xl'>
            Build The Community Your Fans Will Love
          </h1>
          <p className='text-[#00252e] my-8 text-lg lg:text-xl'>
            Huddles re-imagines the way we build communities. You have a
            voice, but so does your audience. Create connections with your
            users as you engage in genuine discussion.
          </p>
          <button className='text-white bg-[#ff52bf] shadow-lg text-lg px-14 py-2 rounded-3xl hover:opacity-70 duration-300'>
            Get Started For Free
          </button>
        </div>
        <img className='px-4 mx-auto mt-12 lg:mt-0' src={MockUp} alt='mockup'/>
      </div>
    </div>
  )
}

export default Hero