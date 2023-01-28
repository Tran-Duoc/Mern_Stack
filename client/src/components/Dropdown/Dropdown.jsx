import React, { useContext } from "react";
import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Dropdown = ({ login, username }) => {
   const { setIsActive } = useContext(AppContext);
   const { setIsActiveRes } = useContext(AppContext);
   const { dropdown, setDropdown } = useContext(AppContext);
   const navigate = useNavigate();
   const handleClick = () => {
      setDropdown(!dropdown);
      setIsActive(true);
   };
   const handleRegister = () => {
      setDropdown(!dropdown);
      setIsActiveRes(true);
   };
   const handleLogout = () => {
      localStorage.removeItem("login");
      navigate("/");
      window.location.reload();
   };
   return (
      <>
         {dropdown ? (
            <div
               className={`fixed w-52   bg-[#edf2f4]/90  z-10 right-20 md:right-5  top-32 md:top-28 shadow-2xl border rounded-2xl flex flex-col justify-center ${
                  login ? "h-16" : "h-28"
               }`}
            >
               {login ? (
                  <div className="flex justify-between px-5">
                     <span className="text-lg"> {username}</span>
                     <BiLogOut
                        className="text-2xl hover:bg-[#e9c46a] hover:rounded-full duration-500 rounded-full"
                        onClick={handleLogout}
                     />
                  </div>
               ) : (
                  <>
                     <div className="dropdown" onClick={handleClick}>
                        <AiOutlineLogin />
                        <span>Đăng nhập</span>
                     </div>
                     <div className="dropdown" onClick={handleRegister}>
                        <AiOutlineUser />
                        <span>Đăng kí</span>
                     </div>
                  </>
               )}
            </div>
         ) : (
            ""
         )}
      </>
   );
};

export default Dropdown;
