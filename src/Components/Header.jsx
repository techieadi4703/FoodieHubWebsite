import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { SiFoodpanda } from "react-icons/si";

const Header = () => {
    const [sideNav,setSideNav]=useState(false);
    return (
    <div className=' text-white font-medium text-4xl flex justify-between items-center border-b-2 border-black bg-[#9f7a2b] h-20 relative'>
        <div className='w-[50%] p-3 flex gap-2 items-end'>
            <SiFoodpanda className='text-slate-700 text-5xl font-extrabold'/>
            <h1 className='text-5xl'>Foodie<span className='text-slate-700'>Hub</span></h1>
        </div>
        <div className=' w-[100%]'>
            <div className=' w-[100%] md:flex justify-evenly hidden cursor-pointer'>
                <p className=' hover:text-[#020100] '>Home</p>
                <p className=' hover:text-[#020100] '>AboutUs</p>
                <p className=' hover:text-[#020100] '>Offers</p>
                <p className=' hover:text-[#020100] '>SignUp</p>
                <p className=' hover:text-[#020100] '>SignIn</p>
            </div>
        </div>
        {
            sideNav?<div className=' absolute top-0 right-0 p-2 z-10 h-[90.5vh] flex justify-center items-center rounded-3xl bg-[#C1292E]'>
                        <TbXboxXFilled className='absolute top-5 z-10 right-3 size-14 cursor-pointer' onClick={()=>setSideNav(!sideNav)}/>
                        <ul className='w-[230px] flex justify-evenly cursor-pointer gap-20 flex-col text-center'>
                            <li className=' hover:text-[#020100] hover:bg-white'>Home</li>
                            <li className=' hover:text-[#020100] hover:bg-white'>About Us</li>
                            <li className=' hover:text-[#020100] hover:bg-white'>Offers</li>
                            <li className=' hover:text-[#020100] hover:bg-white'>SignUp</li>
                            <li className=' hover:text-[#020100] hover:bg-white'>SignIn</li>
                        </ul>
                    </div>:""
        }
        <div className='flex items-center gap-2 p-3'>   
            <div className='size={60} cursor-pointer block md:hidden size={60}'><FaHamburger onClick={()=>setSideNav(!sideNav)}/></div>
            <FaShoppingCart size={40} className='cursor-pointer right-0 hover:text-black'/>
        </div>
    </div>
  )
}
export default Header