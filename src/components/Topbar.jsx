import React from 'react'
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className='flex flex-wrap-reverse md:justify-around  justify-center gap-4 bg-blue-600 items-center text-white text-sm py-2'>
        <div className='flex flex-wrap gap-4 px-3 items-center'>
      <div className='flex items-center gap-2'>
        <span><FaPhone/></span>
        <p>+92 3455555396</p>
      </div>
      <div className='flex items-center  gap-2'>
        <span><FaLocationDot/></span>
        <p> Office #304-B Amna Plaza, Rawalpindi, Pakistan</p>
      </div>
      <div className='flex items-center gap-2'>
        <span><FaRegClock/></span>
        <p> Mon - Fri 8.00 - 20.00</p>
      </div>
      </div>

      <div className='flex  items-center gap-9'>
        <ul className='flex gap-3'>
            <li>
            <a href="#"><FaFacebook/></a>
            </li>
            <li>
                <a href="#"><FaInstagramSquare/></a>
            </li>
            <li>
                <a href="#"><FaLinkedin/></a>
            </li>
            <li>
                <a href="#"><FaYoutube/></a>
            </li>
           
        </ul>
        <ul className='flex gap-3'>
            <li>
                <a href="#">login</a>
            </li>
            <li>
                <a href="#">register</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Topbar
