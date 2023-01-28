import React, { useContext, useState } from "react";
import { MdOutlineRealEstateAgent } from "react-icons/md";

import { BiUserCircle, BiLogOut } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Dropdown from "../Dropdown/Dropdown";
const Navbar = () => {
   const { setIsActive } = useContext(AppContext);
   const { setIsActiveRes } = useContext(AppContext);
   const { dropdown, setDropdown } = useContext(AppContext);
   const [active, setActive] = useState(false);
   const navigate = useNavigate();

   const isLogin = JSON.parse(localStorage.getItem("login"));

   const { login, admin, username } = isLogin || true;
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
      localStorage.removeItem("login");
      navigate("/");
      window.location.reload();
   };

   return (
      <div className="relative">
         <div className="grid grid-cols-[80px_auto_220px] fixed top-0 left-0 right-0   bg-[#edf2f4] py-7 px-10 drop-shadow-2xl mx-[8%] my-5 rounded-3xl z-10 overflow-hidden lg:grid-cols-[70px_auto_50px] md:px-3 md:mx-5  sm:grid-cols-[auto_70px]">
            <Link to="/" className="flex items-center justify-start relative">
               <MdOutlineRealEstateAgent className="text-5xl text-blue-600 font-medium md:text-3xl" />
            </Link>
            <nav className="text-sm flex gap-3 font-medium items-center justify-start  md:text-xs md:gap-1 sm:hidden  ">
               <Link to="/">
                  <span className="text-link" onClick={() => setActive(false)}>
                     Trang Chủ
                  </span>
               </Link>
               <Link to="/product">
                  <span className="text-link" onClick={() => setActive(false)}>
                     Bất động sản
                  </span>
               </Link>
               <Link to="/contact">
                  <span className="text-link" onClick={() => setActive(false)}>
                     Liên Hệ
                  </span>
               </Link>

               {admin ? (
                  <Link to="/config">
                     <span
                        className="text-link"
                        onClick={() => setActive(false)}
                     >
                        Chỉnh sửa
                     </span>
                  </Link>
               ) : (
                  ""
               )}
            </nav>

            {window.innerWidth <= 1024 ? (
               <span className="flex items-center justify-start text-3xl gap-2">
                  <BiUserCircle onClick={handleClickDropdown} />
                  <FaBars
                     className="hidden sm:block"
                     onClick={() => setActive(!active)}
                  />
               </span>
            ) : login ? (
               <div className="flex items-center justify-end gap-2">
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
         {active ? (
            <nav className="absolute z-10 flex flex-col gap-5 bg-[#edf2f4] w-full -mt-2 rounded-2xl  py-5 px-3">
               <Link to="/">
                  <span className="   " onClick={() => setActive(false)}>
                     Trang Chủ
                  </span>
               </Link>
               <Link to="/product">
                  <span className=" " onClick={() => setActive(false)}>
                     Bất động sản
                  </span>
               </Link>
               <Link to="/contact">
                  <span className=" " onClick={() => setActive(false)}>
                     Liên Hệ
                  </span>
               </Link>

               {admin ? (
                  <Link to="/config">
                     <span className=" " onClick={() => setActive(false)}>
                        Chỉnh sửa
                     </span>
                  </Link>
               ) : (
                  ""
               )}
            </nav>
         ) : (
            ""
         )}
         <Dropdown login={login} username={username} />
      </div>
   );
};

export default Navbar;
