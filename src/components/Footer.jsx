import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-blue-900 '  >
      <div className='flex flex-wrap justify-center py-16  text-white  md:px-12 px-3 gap-8 md:gap-28 '>
        <div className='md:w-[230px] w-[150] '>
            <h1 className='text-xl font-bold'>ABOUT</h1>
            <p className='text-sm'>Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.</p>
        </div>
        <div className=''>
        <div className='cursor-pointer'>
            <h1 className='text-xl font-bold'>POPULAR COURSES</h1>
            <div className='flex items-center gap-4 my-3'>
            <img className='w-[40px]' src="https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-_FILEminimizer_-100x100.webp" alt="" />
            <span className='text-sm'>Online Arbitrage Mastermind 2.0</span>
            </div>
        </div>
        
            <div className='flex items-center gap-4 cursor-pointer '>
            <img className='w-[40px]' src="https://ezitech.org/wp-content/uploads/2023/07/5167842_cafe-100x100.webp" alt="" />
            <span className='text-sm'>Adobe Illustrator Course with projects</span>
            </div>
       
        </div>
        <div className=''>
            <h1 className='text-xl font-bold text-center '>PAGES</h1>
            <li className='text-sm mt-3 cursor-pointer'>CONTACT US</li>
            <li className='text-sm mt-3 cursor-pointer'>SHOP</li>
            <li className='text-sm mt-3 cursor-pointer'>INTERNSHIP</li>
            <li className='text-sm mt-3 cursor-pointer'>CODELAB</li>

        </div>
        <div className=' mr-16 w-[250px]  '>
            <h1 className='text-xl font-bold'>CONTACT</h1>
        <div className='flex  gap-3 mt-5'>

            <span><FaLocationDot/></span>
            <span className='text-sm  '>Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</span>
        </div>
        <div  className='flex items-center gap-3 my-3'>
            <FaPhoneAlt/>
            <p>+923455555396</p>
        </div>

        <div className='cursor-pointer flex items-center gap-3'>
            <FaMessage/>
            <p >info@ezitech.org</p>
        </div>

        </div>
      </div>

      <p className='text-center text-white mt-8 pb-8 md:text-xl text-sm '>Copyright © 2024 Ezitech Institute | Design & Develop by Eziline Software House</p>
    </div>
  )
}

export default Footer
