import React from 'react'


const Cards = ([
  {
    title: 'Sign up',
    image: 'https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg',
    desc:'Enter your name, email, and contact details to get started. It truly is that simple!'
  },
  {
    title: 'Select course',
    image: 'https://y7b6t9n6.rocketcdn.me/wp-content/uploads/2021/09/PNG_QUvsC0W.png',
    desc:'Browse our extensive and ever-expanding variety of courses for professional development.'
  },
  {
    title: 'Start Learning',
    image: 'https://www.shutterstock.com/image-vector/flat-design-vector-illustration-online-260nw-1255125193.jpg',
    desc:'Do the tasks, and your teacher will evaluate them before providing you with thorough.'
  }
])



const Works = () => {
  return (
    <div className='my-20'>
        <h1 className='text-center text-4xl font-bold mt-20 mb-16'>How it <span className='text-blue-600'>works?</span> </h1>
      <div className='flex flex-wrap items-center gap-6  justify-around px-12'>
        {
          Cards.map((card, id) => {
            return (
              <div key={id} className='w-[250px]  text-center overflow-hidden cursor-pointer'>
              <img className='w-[240px] h-[200px] rounded-md hover:scale-110 transition-all duration-150 mb-7 ' src={card.image} alt="" />
              <h1 className='font-bold'>{card.title}</h1>
              <p className='text-sm'>{card.desc}</p>
              </div>
            )
          })
        }
       
        
      </div>
    </div>
  )
}

export default Works
