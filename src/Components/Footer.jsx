import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { SiFoodpanda } from "react-icons/si";

const Footer = () => {
  return (
    <div className="h-full grid gap-5 grid-cols-2 md:flex justify-between w-full bg-black text-white p-4 text-2xl">
      <div className="h-full md:relative top-32 left-20">
        <p className="flex items-center gap-2 text-5xl font-extrabold">
          <SiFoodpanda className="text-slate-400" />
          <span className="text-slate-400">Foodie</span>
          <span className="text-yellow-400">Hub</span>
        </p>
        <p className="text-2xl font-bold">© 2024 FoodieHub Limited</p>
      </div>
      <div>
        <h2 className="text-4xl font-bold">Company</h2>
        <p>About Us</p>
        <p>Corporates</p>
        <p>Careers</p>
        <p>Team</p>
        <p>Dineout</p>
      </div>
      <div>
        <div>
          <h2 className="text-4xl font-bold">Contact Us</h2>

          <p>Help & Support</p>
          <p>Partner with us</p>
          <p>Ride with us</p>
        </div>
        <br />
        <div>
          <h2 className="text-4xl font-bold">Legal</h2>
          <p>Terms & Conditions</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
          <p>Investor Relations</p>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-4xl font-bold">Life at FoodieHub</h2>
          <p>Explore FoodieHub</p>
          <p>FoodieHub News</p>
          <p>Snackables</p>
        </div>
        <br />
        <br />
        <div>
          <h1 className="text-4xl font-bold">Social Links</h1>
          <br />
          <div className=" w-[65%] flex justify-between">
            <a href="" className="text-blue-500">
              <FaLinkedin />
            </a>
            <a href="" className="text-pink-300">
              <FaInstagramSquare />
            </a>
            <a href="" className="text-blue-700">
              <FaFacebookSquare />
            </a>
            <a href="" className="text-red-500">
              <FaPinterestSquare />
            </a>
            <a href="" className="text-sky-500">
              <FaTwitterSquare />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
