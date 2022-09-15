import React from 'react'
import Navbar from './Navbar'
import MockUp from '../assets/illustration-mockups.svg'

const Hero = () => {
  return (
    <div className='hero w-full h-screen flex flex-col justify-between py-8'>
      <Navbar />
      {/* Text */}
      <div className=''>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddles re-imagines the way we build communities. You have a
          voice, but so does your audience. Create connections with your
          users as you engage in genuine discussion.
        </p>
        <button>Get Started For Free</button>
      </div>
      <img src={MockUp} alt='mockup'/>
    </div>
  )
}

export default Hero