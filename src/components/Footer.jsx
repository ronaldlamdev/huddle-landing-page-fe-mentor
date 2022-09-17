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
      <img src={Logo} alt="logo" className='brightness-[9] grayscale max-w-[150px]'/>
      <div className='flex flex-col justify-between gap-8'>
        <ul>
          <li className='flex'>
            <GoLocation />
            <p>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et 
              dolore magna aliqua
            </p>
          </li>
          <li>
            <FiPhoneCall />
            <p>+1-543-123-4567</p>
          </li>
          <li>
            <HiOutlineMail />
            <p>example@fyle.com</p>
          </li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <div>
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