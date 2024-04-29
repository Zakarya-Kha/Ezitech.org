import React from 'react';
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";

const Cards = [
    {
        img: "https://ezitech.org/wp-content/uploads/2024/02/web-design.png",
        title: "HTML/CSS Javascript",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2024/02/development.png",
        title: "GRAPHIC DESIGNING",
    },
    {
        img:"https://ezitech.org/wp-content/uploads/2024/02/digital-marketing.png",
        title: "DIGITAL MARKETING",
    }, 
    {
        img: "https://ezitech.org/wp-content/uploads/2024/02/app-development.png",
        title:"FLUTER DEVELOPMENT",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2024/02/web-services.png",
        title: "MACHINE LEARING",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2024/02/clean-code.png",
        title: "MERN DEVELOPMENT",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2024/02/web-design.png",
        title: "PYTHON DEVELOPMENT",
    },
    {
        img: "https://ezitech.org/wp-content/uploads/2024/02/development.png",
        title: "JAVA DEVELOPMENT",
    }, 
    {
        img:"https://ezitech.org/wp-content/uploads/2024/02/digital-marketing.png",
        title: "PHP DEVELOPMENT",
    }
];

const Card = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold mb-16'>Perfect <span className='text-blue-600'>Internship's</span> For You!</h1>
            <div className='flex flex-wrap gap-12 justify-center  my-20 px-16 '>
                {Cards.map((card, id) => (
                    <div key={id} className='border md:w-[320px]  rounded-xl shadow-2xl hover:scale-105 transition-all duration-150'>
                        <div className='relative'>
                            <div>
                                <img className='md:w-[320px] h-[90px] w-full rounded-t-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBcsvoO6SC64PBd25Qc7tC8ZdGNVEZgzNf9rvU5WZgQ&s" alt="" />
                            </div>
                            <div className='absolute top-0 text-white flex justify-between gap-9 p-4'>
                                <h1 className='md:text-2xl  border-b-2'>{card.title}</h1>
                                <img className='w-[60px]' src={card.img} alt="" />
                            </div>
                            <div className='my-4 py-5'>
                                <div className='flex items-center gap-4 px-2'>
                                    <FaPersonBreastfeeding />
                                    <span>Employment-</span>
                                    <span className='bg-gray-300 px-2 rounded-md'>Hybrid</span>
                                </div>
                                <div className='flex items-center gap-4 my-4 px-2'>
                                    <IoLocation />
                                    <span>Location-</span>
                                    <span className='bg-gray-300 px-2 rounded-md'>Rawalpindi</span>
                                </div>
                                <div className='flex items-center gap-4 px-2'>
                                    <FaShoppingBag />
                                    <span>Job type-</span>
                                    <span className='bg-gray-300 px-2 rounded-md text-nowrap'>Full time</span>
                                    <span className='bg-gray-300 px-2 rounded-md text-nowrap'>Part time</span>
                                </div>
                            </div>
                            <div className='flex justify-center mb-4'>
                                <button className='bg-gray-500 px-1 rounded-md hover:bg-gray-800 text-white'>Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
