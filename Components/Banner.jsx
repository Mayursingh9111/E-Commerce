import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
    const [current, setCurrent] = useState(0)

    const leftSlide = () => {
        setCurrent(current === 0?3:(prev)=>prev-1)
    }
    const rightSlide = () => {
        setCurrent(current === 3 ? 0 : (prev) => prev + 1)
    }

  const data = [
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30012025-mainbanner-z1-p1-100hrssale-withdate.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30012025-mainbanner-z1-p-paydaysale.gif",
    "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-30012025-MainBanners-Z1-P-dnmx-netplay-flat70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-30012025-MainBanners-Z1-P7-Voyage-Carlton-Min60.jpg",
  ];
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div style={{transform:`translateX(-${current*100}vw)`}} className="w-[400vw] h-full flex transition-transform duration-1000">
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="Image1"
            loading="prority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="Image2"
            loading="prority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="Image3"
            loading="prority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="Image4"
            loading="prority"
          />
        </div>
        <div className="w-fit left-0 right-0 absolute mx-auto flex gap-8 bottom-44 text-white">
          <div onClick={leftSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowLeft />
          </div>
          <div onClick={rightSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
