import React from 'react'
import logo from '../assets/logo/pro-logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {FaInstagram} from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt='logo' className='mx-2 w-8 h-8' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-xl'>
            <a href="https://www.linkedin.com/in/abdul-aziz-sakib-ab7886293/"><FaLinkedin/></a>
            <a href="https://github.com/TushanSakib"><FaGithub/></a>
            <FaInstagram/>
            <FaSquareXTwitter/>
        </div>
    </nav>
  )
}

export default Navbar
