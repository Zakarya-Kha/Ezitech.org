import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

const Links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'CERTIFICATIONS',
    path: '/certifications',
  },
  {
    name: 'INTERNSHIPS',
    path: '/internships',
  },
  {
    name: 'SEMINARS',
    path: '/seminars',
  },
  {
    name: 'INTERN PORTAL',
    path: '/intern portal',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="flex flex-wrap justify-between items-center bg-blue-600 px-5 text-white">
          <div>
            <img className="w-[200px]" src="http://ezitech.org/wp-content/uploads/2024/02/EZITECH-LOGO-white.png" alt="" />
          </div>
          <ul className="flex gap-3">
            {Links.map((link, id) => (
              <li key={id} className='hover:text-red-900'>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <FaRegHeart />
            <IoSearch />
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden block bg-red-600 pb-4">
        <div className="flex flex-wrap justify-between items-center px-1">
          <div>
            <img className="w-[200px]" src="http://ezitech.org/wp-content/uploads/2024/02/EZITECH-LOGO-white.png" alt="" />
          </div>
          <div onClick={toggleMenu}>
            <GiHamburgerMenu className='text-4xl hover:text-green-300 text-white' />
          </div>
        </div>
        {isMenuOpen && (
          <ul className="flex flex-col items-center text-black gap-4 ">
            {Links.map((link, id) => (
              <li key={id} className='hover:text-white'>
                <a  href={link.path}>{link.name}</a>
              </li>
            ))}
             <div className="flex mt-8  items-center justify-center ">
          <input
            type="text"
            placeholder="Search Courses..."
            className="border border-gray-300 rounded-l-lg py-2 px-4 w-[60%] outline-none focus:border-blue-500"
          />
          <button className="bg-white text-black  rounded-r-lg px-4 py-3">
            <IoSearch />
          </button>
        </div>
          </ul>
          
          
        )}
       
      </div>
    </>
  );
};

export default Navbar;
