import React, { useContext, useState } from "react";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContect";
const Navbar = () => {
   let admin = true;
   const { setIsActive } = useContext(AppContext);
   const { setIsActiveRes } = useContext(AppContext);

   const handleClick = () => {
      setIsActive(true);
   };
   const handleRegister = () => {
      setIsActiveRes(true);
   };

   return (
      <div className="grid grid-cols-[150px_auto_320px] fixed top-0 left-0 right-0   bg-[#edf2f4] py-7 px-10 drop-shadow-2xl mx-[8%] my-5 rounded-3xl z-10 overflow-hidden md:grid-cols-[70px_auto_100px]">
         <Link to="/" className="flex items-center justify-start">
            <MdOutlineRealEstateAgent className="text-5xl text-blue-600 font-medium md:text-3xl" />
         </Link>
         <nav className="text-xl flex gap-10 font-medium items-center justify-start  md:text-xs md:gap-1">
            <Link to="/">
               <span className="text-link">Trang Chủ</span>
            </Link>
            <Link to="/product">
               <span className="text-link">Sản phẩm</span>
            </Link>
            <Link to="/contact">
               <span className="text-link">Liên Hệ</span>
            </Link>
            {admin ? (
               <Link to="/config">
                  <span className="text-link">Chỉnh sửa</span>
               </Link>
            ) : (
               ""
            )}
         </nav>

         {window.innerWidth <= 834 ? (
            <BiUserCircle className="text-4xl" />
         ) : (
            <div className="flex gap-4 items-center justify-center md:gap-1 ">
               <button
                  className="btn bg-[#cfcfcf] hover:bg-[#e9c46a] hover:text-[#0a2472] "
                  onClick={handleClick}
               >
                  Đăng nhập
               </button>
               <button
                  className="btn bg-[#e9c46a] hover:bg-[#0a2472] hover:text-[#e9c46a]"
                  onClick={handleRegister}
               >
                  Đăng ký
               </button>
            </div>
         )}
      </div>
   );
};

export default Navbar;
