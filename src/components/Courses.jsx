import React from 'react'



const skills = ([
    {
        img: "https://ezitech.org/wp-content/uploads/2022/05/artificial-intelligence-3-69x69.png",
        title: "ML & AI",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2022/05/blockchain-69x69.png",
        title: "Block Chain",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2022/05/aaaa-69x69.png",
        title: "Amazon",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2022/05/cccccc-69x69.png",
        title: "Cyber Security",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2022/05/ffff-69x69.png",
        title: "Development",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2022/05/www-69x69.png",
        title: "Designing",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2022/05/vvvv-69x69.png",
        title: "Gaming",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2022/05/ssss-69x69.png",
        title: "Architecture",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2022/05/aaaaaaaaaaaaaaaaaaaaaa-69x69.png",
        title: "IOS & AND",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2022/10/social-media-1-63x63.png",
        title: "Marketing",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2023/03/3d-68x68.png",
        title: "3D",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2023/03/animation-68x68.png",
        title: "Animation",
    }
])



const Courses = () => {
  return (
    <div className='my-20 '>
      <div className='text-center w-[60%] mx-auto mt-40 '>
        {/* text */}
        <h1 className='text-3xl font-semibold '>What new trends and technology will you discover?</h1>
        <p className='mt-4'>Today's technology is developing quickly, and our new technological trends are enabling and advancing, speeding up the pace of development.</p>
      </div>

      <div className='px-16 flex flex-wrap gap-8 mt-16  justify-center  mx-auto'>
        {
            skills.map((skill, id) => {
                return (
                    <div key={id} className=' md:w-[140px] h-[140px] w-[200px] flex flex-col justify-center items-center gap-4 transition-transform duration-500 ease-in-out hover:-translate-y-4 bg-white shadow-2xl cursor-pointer rounded-md'>
        {/* img */}
        <img className='' src={skill.img} alt="" />
        <h1 className='font-semibold'>{skill.title}</h1>
      </div>
                )
            })
        }
      

      </div>
    </div>
  )
}

export default Courses
