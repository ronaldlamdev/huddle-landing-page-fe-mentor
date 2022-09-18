import React from 'react'
import Logo from '../assets/logo.svg'
import {GoLocation} from 'react-icons/go'
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {CgFacebook} from 'react-icons/cg'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className='bg-[#00252e] text-white px-8 pt-40 pb-8 flex flex-col justify-between gap-8'>
      <a href='/' className='w-fit'>
        <img src={Logo} alt="logo" className='brightness-[9] grayscale max-w-[150px]'/>
      </a>
      <div className='flex flex-col justify-between gap-8'>
        <ul>
          <li className='flex py-2'>
            <GoLocation className='mr-4 text-4xl sm:text-lg'/>
            <p>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et 
              dolore magna aliqua
            </p>
          </li>
          <li className='flex items-center py-2'>
            <FiPhoneCall className='mr-4'/>
            <p>+1-543-123-4567</p>
          </li>
          <li className='flex items-center py-2'>
            <HiOutlineMail className='mr-4'/>
            <p>example@fyle.com</p>
          </li>
        </ul>
        <ul>
          <li className='py-2 hover:underline cursor-pointer w-fit'>About Us</li>
          <li className='py-2 hover:underline cursor-pointer w-fit'>What We Do</li>
          <li className='py-2 hover:underline cursor-pointer w-fit'>FAQ</li>
          <li className='py-2 hover:underline cursor-pointer w-fit'>Career</li>
          <li className='py-2 hover:underline cursor-pointer w-fit'>Blog</li>
          <li className='py-2 hover:underline cursor-pointer w-fit'>Contact Us</li>
        </ul>
      </div>

      <div className='text-center'>
        <div className='flex justify-center gap-4'>
          <CgFacebook size={35} className='border rounded-full p-1 cursor-pointer hover:text-[#ff52bf] hover:border-[#ff52bf] duration-300'/>
          <AiOutlineTwitter size={35} className='border rounded-full p-1 cursor-pointer hover:text-[#ff52bf] hover:border-[#ff52bf] duration-300'/>
          <AiOutlineInstagram size={35} className='border rounded-full p-1 cursor-pointer hover:text-[#ff52bf] hover:border-[#ff52bf] duration-300'/>
        </div>
        <p className='mt-8'>© Copyright 2018 Huddle. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer