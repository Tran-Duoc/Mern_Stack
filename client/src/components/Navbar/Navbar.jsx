import React, { useContext, useState } from "react";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle, BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Dropdown from "../Dropdown/Dropdown";
const Navbar = () => {
   const { isAdmin, setAdmin } = useContext(AppContext);
   const { setIsActive } = useContext(AppContext);
   const { setIsActiveRes } = useContext(AppContext);
   const { dropdown, setDropdown } = useContext(AppContext);
   const navigate = useNavigate();
   const { admin, login, username } = isAdmin;
   const handleClick = () => {
      setIsActive(true);
   };
   const handleRegister = () => {
      setIsActiveRes(true);
   };

   const handleClickDropdown = () => {
      setDropdown(!dropdown);
   };
   const handleLogout = () => {
      setAdmin({ ...isAdmin, login: false });
      navigate("/");
      window.location.reload();
   };
   return (
      <div className="relative">
         <div className="grid grid-cols-[80px_auto_50px_250px] fixed top-0 left-0 right-0   bg-[#edf2f4] py-7 px-10 drop-shadow-2xl mx-[8%] my-5 rounded-3xl z-10 overflow-hidden lg:grid-cols-[70px_auto_50px_50px] ">
            <Link to="/" className="flex items-center justify-start relative">
               <MdOutlineRealEstateAgent className="text-5xl text-blue-600 font-medium md:text-3xl" />
            </Link>
            <nav className="text-sm flex gap-3 font-medium items-center justify-start  md:text-xs md:gap-1">
               <Link to="/">
                  <span className="text-link">Trang Chủ</span>
               </Link>
               <Link to="/product">
                  <span className="text-link">Bất động sản</span>
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
            <div className="flex items-center justify-start text-3xl ">
               <AiOutlineShoppingCart />
               {/* <BiUserCircle onClick={handleClickDropdown} /> */}
            </div>
            {window.innerWidth <= 1024 ? (
               <span className="flex items-center   justify-start text-3xl ">
                  <BiUserCircle onClick={handleClickDropdown} />
               </span>
            ) : login ? (
               <div className="flex items-center justify-start gap-2">
                  <span className="text-lg"> {username}</span>
                  <BiLogOut
                     className="text-2xl hover:bg-[#e9c46a] hover:rounded-full duration-500 rounded-full"
                     onClick={handleLogout}
                  />
               </div>
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
         <Dropdown />
      </div>
   );
};

export default Navbar;
