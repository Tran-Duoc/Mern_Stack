import React, { useContext, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Confirm from "../ConfirmBox/Confirm";
import { AppContext } from "../context/AppContext";

const Register = () => {
   const { isActiveRes, setIsActiveRes } = useContext(AppContext);
   const { isActiveConFirm, setIsActiveResConFirm } = useContext(AppContext);
   const { setIsActive } = useContext(AppContext);
   const { registerUser } = useContext(AppContext);
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");

   let login = isActiveRes ? "top-0 " : "top-[100vh]  ";
   const handleCloseTab = (e) => {
      setIsActiveRes(false);
   };
   const handleOutSide = (e) => {
      if (e.target === e.currentTarget) {
         setIsActiveRes(false);
      }
   };

   const handleMove = () => {
      setIsActive(true);
      setIsActiveRes(false);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log({
         userName,
         password,
      });
      await registerUser({ username: userName, password: password }).then(
         (data) => {
            console.log(data);
            console.log(data.request.status);
            if (data.request.status === 200) {
               setIsActiveResConFirm(true);
            }
         }
      );
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
            onSubmit={(e) => handleSubmit(e)}
         >
            <AiFillCloseCircle
               className="absolute m-2 top-0 right-0 text-4xl  text-[#e9c46a] hover:text-[#4c4c4c]/40 duration-300 "
               onClick={(e) => {
                  handleCloseTab(e);
               }}
            />
            <span className="text-3xl font-medium text-[#e9c46a] uppercase text-center ">
               đăng ký tài khoản
            </span>
            <label className="text-label" htmlFor="username">
               Tên tài khoản
            </label>
            <input
               type="text"
               className="input"
               value={userName}
               placeholder="Tên đăng nhâp!!!!"
               onChange={(e) => setUserName(e.target.value)}
            />
            <label className="text-label" htmlFor="password">
               Mật khẩu
            </label>
            <input
               type="password"
               className="input"
               value={password}
               placeholder="Nhập vào mật khẩu"
               onChange={(e) => setPassword(e.target.value)}
            />

            <span className="mt-3 text-right " onClick={handleMove}>
               Đăng nhập
            </span>

            <button className="text-2xl font-medium text-white uppercase mt-2 bg-[#e9c46a] py-3 rounded-full">
               Đăng Ký ngay
            </button>
         </form>
         {isActiveConFirm ? <Confirm /> : ""}
      </div>
   );
};

export default Register;
