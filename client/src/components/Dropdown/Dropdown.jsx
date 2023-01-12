import React, { useContext } from "react";
import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { AppContext } from "../context/AppContext";

const Dropdown = () => {
   const { setIsActive } = useContext(AppContext);
   const { setIsActiveRes } = useContext(AppContext);
   const { dropdown, setDropdown } = useContext(AppContext);
   const handleClick = () => {
      setDropdown(!dropdown);
      setIsActive(true);
   };
   const handleRegister = () => {
      setDropdown(!dropdown);
      setIsActiveRes(true);
   };

   return (
      <>
         {dropdown ? (
            <div
               className={`fixed w-52 h-28 bg-[#edf2f4]/90  z-10 right-20 top-34 shadow-2xl border rounded-2xl flex flex-col justify-center`}
            >
               <div className="dropdown" onClick={handleClick}>
                  <AiOutlineLogin />
                  <span>Đăng nhập</span>
               </div>
               <div className="dropdown" onClick={handleRegister}>
                  <AiOutlineUser />
                  <span>Đăng kí</span>
               </div>
            </div>
         ) : (
            ""
         )}
      </>
   );
};

export default Dropdown;
