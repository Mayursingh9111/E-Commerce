import React from "react";
import { Logo, paymentLogo } from "../assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* ==========LogoIcon Start here =========== */}
        <div className="flex flex-col gap-7">
          <img className="w-24" src={Logo} alt="Logo" />
          <p className="text-white text-sm tracking-wide">@ Z-Store.com</p>
          <img className="w-56" src={paymentLogo} alt="Payment" />
          <div className="flex gap-5 text-lg text-gray-500">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* ==========LogoIcon End here =========== */}
        {/* ==========Locate Start here =========== */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-4 font-semibold">
            <p>Sector-14/Gurugram</p>
            <p>Mobile: +91 9876543210</p>
            <p>Phone: 0098 24576821</p>
            <p>E-mail: z-store@gmail.com</p>
          </div>
        </div>
        {/* ==========Locate End here =========== */}
        {/* ==========Profile Start here =========== */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-4 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              Check out
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              Order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        {/* ==========Profile End here =========== */}
        {/* ==========Subscribe Start here =========== */}
        <div className="flex flex-col justify-center">
          <input className="bg-transparent border px-4 py-2 text-sm" type="text" placeholder="e-mail" />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>
        {/* ==========Subscribe End here =========== */}
      </div>
    </div>
  );
};

export default Footer;
