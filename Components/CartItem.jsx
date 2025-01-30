import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";

const CartItem = () => {
  const productDate = useSelector((state) => state.zstore.productDate);

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h1 className="font-titleFont text-2xl">Shopping Cart</h1>
      </div>
      <div>
        {productDate.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300" />
              <img
                className="w-32 h-32 object-cover"
                src={item.image}
                alt="productimg"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            
              {/* <span onClick={}>+</span> */}
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default CartItem;
