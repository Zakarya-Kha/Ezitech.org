import React from 'react';
import { IoIosSearch } from "react-icons/io";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Feed = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Programming", "Social Skills", "marketing", "Web Design" ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 200
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, [1000]);
  

  return (
    <div className="relative ">
            {/* Dark background */}
            <div className="absolute inset-0 bg-gray-800 opacity-70"></div>

      {/* Image */}
      <img className="w-full md:h-[88vh] h-[50vh] object-cover" src="https://png.pngtree.com/background/20230525/original/pngtree-female-programmer-in-front-of-computer-screens-picture-image_2734159.jpg" alt="feed image" />

      {/* Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col flex-wrap">
        <div className="text-center text-white md:w-full w-[300px] ">
          <h1 className="md:text-6xl text-xl  font-bold mb-8">Learn the fundamentals with our Experts in <span className='text-blue-600' ref={el}></span></h1>
          <p className="md:text-2xl">Utilize Effective to Reach Your Potential!</p>
        </div>
        {/* Search */}
        <div className='hidden'>
        <div className="flex mt-8  items-center justify-center ">
          <input
            type="text"
            placeholder="Search Courses..."
            className="border border-gray-300 rounded-l-lg py-2 px-4 w-[60%] outline-none focus:border-blue-500"
          />
          <button className="bg-white text-black  rounded-r-lg px-4 py-3">
            <IoIosSearch />
          </button>
        </div>
        </div>
        <p className='text-white md:text-xl text-center mt-4'>Explore Our More Useful Products!</p>
        <div className='flex gap-6 w-full justify-center mt-8'>
            <img className="md:h-[30px] h-[15px]" src="https://ezitech.org/wp-content/uploads/2023/10/EZIBLOGS-DG.png" alt="" />
            <img className="md:h-[30px] h-[15px]" src="https://ezitech.org/wp-content/uploads/2023/11/white-ezipos.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feed;
