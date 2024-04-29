import React from 'react'
import mobileImage from '../assets/mobile.png'

const Learning = () => {
  return (
    <div className='flex flex-wrap justify-center  overflow-x-hidden mx-auto  gap-10 my-20'>
      <div>
        <img className='mt-44 md:w-full w-[256px] hover:scale-105 transition-all duration-150' src={mobileImage} alt="" />
      </div>
      <div className='md:w-[30%] w-full px-4 flex flex-col justify-center  '>
        <h1 className='text-4xl font-semibold '>Learning <span className='text-blue-700'>Anytime</span>  From Anywhere</h1>
        <p className='mt-7'>Increase the mobility level with Eziline Technology LMS App. Take your courses in your pocket and access them whenever you want without limits.Make your learning more engaging and productive using modern LMS app.</p>
        <div className='flex flex-wrap gap-6 mt-8'>
        <img src="https://ezitech.org/wp-content/uploads/2022/11/appstore-copy.webp" alt="" />
        <img src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2021/02/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_22.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Learning
