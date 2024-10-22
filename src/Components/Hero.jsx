import React, { useEffect, useState } from 'react'
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const Hero = () => {
    const imgdata=[
        {url:"https://adventure.com/wp-content/uploads/2023/06/Hero-Doner-kebab-Germany-sylwia-pietruszka-n5sElcWfebg-unsplash-1920x1080.jpg",},
        {url:"https://s1.1zoom.me/b5655/742/Fast_food_Hamburger_Vegetables_520537_1920x1080.jpg"},
        {url:"https://wallpapers.com/images/hd/indian-food-1920-x-1080-background-tjdcrkjt3uotvopf.jpg",},
        {url:"https://s1.1zoom.me/b5353/683/Fast_food_Hamburger_Vegetables_Bottle_530823_1920x1080.jpg",},
        {url:"https://wallpapers.com/images/hd/delicious-food-1920-x-1080-picture-eitd95y370j3z4sh.jpg",},
    ]
    const [slider,setSlider]=useState(0);
    const handleMinus=()=>{
        setSlider((slider ===0)?imgdata.length-1:slider-1);
    }
    const handlePlus=()=>{
        setSlider((slider ===imgdata.length-1)?0:slider+1);
    }
    useEffect(()=>{
        const chng=setInterval(() => {
            handlePlus();
        }, 2000);
        return()=>clearInterval(chng)
    },[slider])
  return (
    <div className=' rounded-xl my-5'>
        <div className='w-[90%] mx-auto h-[100%] py-4 relative '>
            {imgdata.map((item,i)=>(
                    <div key={i} className={`${slider===i?"block":"hidden"}`}>
                        <img src={item.url} alt="" className='w-[99%] mx-auto h-[80vh] rounded-3xl object-cover '/>
                    </div>
                ))
            }
        </div>
        <div className='absolute top-[45%] w-full'>
            <div className='absolute w-full flex justify-between gap-96'>
                <FaCircleArrowLeft size={60} className=' text-black cursor-pointer px-1' onClick={handleMinus}/>
                <FaCircleArrowRight size={60} className=' text-black cursor-pointer px-1' onClick={handlePlus}/>
            </div>
        </div>
    </div>
  )}
export default Hero