import React, { useState, useEffect } from "react";
import Items from "./Items";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiCornerRightDown } from "react-icons/fi";


async function getFoodItems() {
  try {
    const response = await axios.get( 
      "https://api.freeapi.app/api/v1/public/meals"
    );
    console.log("hello", response.data.data.data);
    return response.data.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const food = await getFoodItems();
        setFoodItems(food);
      } catch (err) {
        console.log(err);
        ;
      }
    };
    fetchFood();
  }, []);
  console.log(foodItems);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="h-full w-[100%] mx-auto px-16 bg-red-800 rounded-3xl my-5">
      {/* <div className="t flex items-center gap-5"> */}
      <h2 className="text-[5vw] font-extrabold underline">What's on your mind? </h2>
      {/* <br /> */}
      {/* <FiCornerRightDown className="font-black"/> */}
      {/* </div> */}
      <Slider {...settings} className=" mt-10 mb-40">
      {/* <div> */}
      {/* <div className="flex"> */}
        {foodItems.map((item, index) =>(
          <Items key={index} link={item.strMealThumb} title={item.strMeal}/>
        ))}
      {/* </div> */}
      </Slider>
    </div>
  );
};

export default FoodItems;
