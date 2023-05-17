import React from 'react'
import Typed from 'react-typed';
import Hero from "../assets/bw.jpg"
import {MdOutlineKeyboardArrowRight}from "react-icons/md"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row relative'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I Build & Design
                </h2>
                <Typed className=' md:text-3xl  md:pl-4 pl-2 text-[#feb786] text-xl py-2'
            strings= {['Web Interfaces', 'Mobile Designs', 'Software Development']}
            typeSpeed={120}
            backSpeed={140}
            loop
            />
            <p className='text-gray-500  max-w-md'>
                I have experience building and designing software.<br/>
                Currently, I love to work on web aplications using technologies like
            </p>
            <Typed className=' md:text-xl  md:pl-4 pl-2 text-[#36e7d8] text-xl py-4'
            strings= {['React', 'Tailwind', 'HTML','Javascript','CSS']}
            typeSpeed={120}
            backSpeed={140}
            loop
            />
            <div>
                <button className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={26} className='ml-1'/></span>
                </button>
            </div>
            
            </div>
            <div>
                <img src={Hero} alt="" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home