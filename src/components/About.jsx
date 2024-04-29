import React from 'react'

const About = () => {
  return (
    <div className='mt-16 '>
        <h1 className='text-4xl font-bold text-center'>Best IT <span className='text-blue-600'>Services</span> Award <span className='text-blue-600'>2023</span></h1>
    <div className='flex justify-center flex-wrap  mt-8 mb-8 gap-10'>
      <div>
        <img className='md:w-[300px] md:h-[356px] w-[600px] ' src="https://ezitech.org/wp-content/uploads/2024/02/President-of-pakistan.png" alt="" />
      </div>
      <div className='md:w-[50%] w-full px-3 '>
        <p>
        Ezitech Is affiliated With Eziline Software House. Eziline has been awarded the prestigious Best Software House in IT sector award by the President of Pakistan. This is an incredible achievement and a testament to the hard work and dedication of the entire team at Eziline Software House. The award is a great recognition of the company’s achievements in the field of IT and serves as a major milestone in its journey towards success.<br /><br />

This award is a huge source of motivation and inspiration for the entire team at Eziline Software House. It is a validation of the company’s commitment to innovation, excellence, and customer satisfaction. The award acknowledges the hard work and dedication of every member of the team who has contributed to the success of the company.<br /><br />

Ismail Shah, the CEO of Eziline Software House Pvt Ltd, received the Best Services Award in the IT sector from the President of Pakistan, Dr. Arif Alvi, in recognition of his remarkable contributions to the country’s technology industry.
        </p>
        <button className='bg-blue-500 px-2 py-1 rounded-md text-white mt-4 hover:bg-blue-800'>Enziline Profile</button>
      </div>
      </div>
    </div>
  )
}

export default About
