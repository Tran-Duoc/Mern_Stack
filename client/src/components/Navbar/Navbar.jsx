import React from "react";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
   let admin = false;

   return (
      <div className="flex items-center justify-between fixed top-0 left-0 right-0   bg-[#edf2f4] py-7 px-10 drop-shadow-2xl mx-[8%] my-5 rounded-3xl z-10">
         <Link to="/">
            <MdOutlineRealEstateAgent className="text-5xl text-blue-600 font-medium" />
         </Link>
         <nav className="text-xl flex gap-10 font-medium">
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
         <div className="flex gap-10">
            <Link
               to="/login"
               className="btn bg-[#cfcfcf] hover:bg-[#e9c46a] hover:text-[#0a2472] "
            >
               Đăng nhập
            </Link>
            <Link
               to="/register"
               className="btn bg-[#e9c46a] hover:bg-[#0a2472] hover:text-[#e9c46a]"
            >
               Đăng ký
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
