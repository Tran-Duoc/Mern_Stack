import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AppContext } from "../../assets/context/AppContect";

const Login = () => {
   const { isActive, setIsActive } = useContext(AppContext);

   let login = isActive ? "top-0 " : "top-[100vh]  ";
   const handleCloseTab = (e) => {
      console.log(e.target);
      setIsActive(false);
   };
   const handleOutSide = (e) => {
      if (e.target === e.currentTarget) {
         setIsActive(false);
      }
   };
   return (
      <div
         className={`fixed left-0 right-0 bottom-0  top-0 ${login} z-20 flex items-center justify-center bg-whit   
            bg-[#4c4c4c]/70   `}
         onClick={(e) => {
            handleOutSide(e);
         }}
      >
         <form
            className="mt-6 w-[500px] bg-[#edf2f4] flex flex-col p-10  
         shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)] rounded-2xl relative"
         >
            <AiFillCloseCircle
               className="absolute m-2 top-0 right-0 text-4xl  text-[#e9c46a] hover:text-[#4c4c4c]/40 duration-300 "
               onClick={(e) => {
                  handleCloseTab(e);
               }}
            />
            <span className="text-3xl font-medium text-[#e9c46a] uppercase text-center ">
               đăng nhập tài khoản
            </span>
            <label className="text-label" for="username">
               Tên đăng nhập
            </label>
            <input
               type="text"
               className="input"
               // value=""
               placeholder="Tên đăng nhâp!!!!"
            />
            <label className="text-label" for="password">
               Mật khẩu
            </label>
            <input
               type="password"
               className="input"
               // value=""
               placeholder="Nhập vào mật khẩu"
            />
            <button className="text-2xl font-medium text-white uppercase mt-5 bg-[#e9c46a] py-3 rounded-full">
               Đăng nhập
            </button>
         </form>
      </div>
   );
};

export default Login;
