import React from "react";

const Items = ({link,title}) => {
  return (
    <div className=" h-[300px] p-10 mb-5 flex flex-col justify-between md:h-full" >
      <div className="flex justify-center items-center">
        <img src={link} alt={title} className="h-50 w-50 rounded-full" />
      </div>
      <h2 className="font-bold text-center text-[#FCCD2A] text-[1.5vw] "> {title} </h2>
      <button className=" bg-cyan-700 m-2 p-2 rounded-2xl text-center text-xl font-semibold border-black border-2 text-white">Add to Cart</button>
    </div>
  );
};

export default Items;
