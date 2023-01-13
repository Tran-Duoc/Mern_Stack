import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegClone, FaBitcoin, FaLocationArrow } from "react-icons/fa";
import { GrView } from "react-icons/gr";

const CartProduct = () => {
   return (
      <div className="mt-8 bg-[#edf2f4]/80 py-7 px-10 drop-shadow-2xl rounded-2xl overflow-hidden ">
         <div className="w-80 h-full overflow-hidden rounded-2xl p-5 border-2 border-[#161f3d] relative group bg-[#f2f2f2]">
            <div className="flex w-full h-60 overflow-hidden group relative  ">
               <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="object-cover bg-cover h-full w-full rounded-t-2xl  group-hover:opacity-70 duration-200 group-hover:scale-0 group-hover:rounded-full "
               />
               <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className=" object-cover bg-cover absolute  top-0  bottom-0 h-full w-full duration-[500ms]  rounded-t-2xl   -left-96 opacity-0 scale-0 group-hover:left-0 group-hover:opacity-100 group-hover:scale-100"
               />
               <div className="w-full  bg-[#edf2f4] px-5 py-2  absolute left-96 bottom-5 z-10 duration-[500ms] group-hover:left-0  flex gap-10 opacity-75  group-hover:rounded-3xl ">
                  <RiShoppingCart2Line className="icon" />
                  <FaRegClone className="icon" />
                  <GrView className="icon" />
               </div>
            </div>

            <div className=" drop-shadow-2xl  opacity-80 rounded-2xl mt-2 flex flex-col py-5 px-2">
               <span className="text-center text-lg font-medium  bg-[#edf2f4] shadow-2xl rounded-2xl mb-5 py-2">
                  name
               </span>

               <div className="grid grid-cols-2 grid-rows-1 gap-2 bg-[#edf2f4] rounded-2xl p-2">
                  <span className="cart-details">
                     <FaBitcoin />
                     <p className="cart-text font-semibold">200 Triệu</p>
                  </span>
                  <span className="cart-details">
                     <FaLocationArrow />
                     <p className="cart-text">Hồ Chí Minh</p>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartProduct;
