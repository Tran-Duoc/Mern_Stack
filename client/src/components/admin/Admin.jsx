import React from "react";
import { BiShow, BiAddToQueue } from "react-icons/bi";
import { RiDeleteBinLine, RiEdit2Fill } from "react-icons/ri";
import { FaMoneyBillWaveAlt, FaLocationArrow, FaStar } from "react-icons/fa";

const Admin = () => {
   return (
      <div className="  mt-7 rounded-2xl overflow-hidden flex flex-col ">
         <span className="text-center text-xl font-medium max-w-full bg-[#edf2f4] py-5 shadow-inner">
            Danh sách sản phẩm
         </span>
         <div className="bg-[#edf2f4] p-10 mt-5 rounded-b-2xl overflow-hidden ">
            <div className="grid grid-cols-[200px_auto_200px] grid-rows-1 h-32 overflow-hidden rounded-2xl border border-black mb-3  bg-[#edf2f4]">
               <img
                  alt=""
                  src="https://source.unsplash.com/random"
                  className="object-cover bg-cover p-2 h-full w-full rounded-2xl"
               />
               <div className="mt-2 ml-10">
                  <span className="text-sm">Tên sản phẩm: {}</span>
                  <div className="grid grid-cols-[100px_100px_100px] mt-3">
                     <div className="flex items-center justify-center flex-col gap-2">
                        <FaMoneyBillWaveAlt className="text-green-500" />
                        <span className="text-xs">50000000</span>
                     </div>
                     <div className="flex items-center justify-center flex-col gap-2">
                        <FaLocationArrow />
                        <span className="text-xs">Ho Chi Minh</span>
                     </div>
                     <div className="flex items-center justify-center flex-col gap-2">
                        <FaStar className="text-yellow-400" />
                        <span className="text-xs">5</span>
                     </div>
                  </div>
               </div>
               <div className="flex items-center justify-center  gap-5 text-xl ">
                  <BiShow />
                  <RiDeleteBinLine />
                  <RiEdit2Fill />
               </div>
            </div>
         </div>
         <BiAddToQueue className=" w-40 h-16 p-3 text-2xl mx-auto mt-10 rounded-3xl bg-[#e9c46a] text-white hover:bg-[#edf2f4] duration-300 hover:text-[#e9c46a]" />
      </div>
   );
};

export default Admin;
