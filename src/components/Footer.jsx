import React from 'react'
import Logo from '../assets/logo.svg'
import {GoLocation} from 'react-icons/go'
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {CgFacebook} from 'react-icons/cg'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer className='bg-[#00252e] text-white mx-auto p-8 flex flex-col justify-between gap-8'>
      <a href='/'>
        <img src={Logo} alt="logo" className='brightness-[9] grayscale max-w-[150px]'/>
      </a>
      <div className='flex flex-col justify-between gap-8'>
        <ul>
          <li className='flex py-2'>
            <GoLocation size={35} className='mr-4'/>
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
          <li className='py-2'>About Us</li>
          <li className='py-2'>What We Do</li>
          <li className='py-2'>FAQ</li>
          <li className='py-2'>Career</li>
          <li className='py-2'>Blog</li>
          <li className='py-2'>Contact Us</li>
        </ul>
      </div>

      <div className='flex flex-col justify-between gap-4 text-center'>
        <div className='flex justify-center'>
          <CgFacebook />
          <AiOutlineTwitter />
          <AiOutlineInstagram />
        </div>
        <p>© Copyright 2018 Huddle. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer