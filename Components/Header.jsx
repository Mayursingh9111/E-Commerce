import React from 'react'
import { cart, Logo } from '../assets'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const productDate = useSelector((state) => state.zstore.productDate);
  console.log(productDate)
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-20" src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-10" src={cart} alt="cart" />
              <span className="w-8 top-[-11px] left-4 text-sm absolute flex items-center justify-center font-semibold">
                {productDate.length}
              </span>
            </div>
          </Link>
          <img className="h-9 w-9 rounded-full" src="" alt="User" />
        </div>
      </div>
    </div>
  );
}

export default Header