import React, { useContext } from "react";

import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AppContext } from "../context/AppContext";

const Login = () => {
   const { isActive, setIsActive } = useContext(AppContext);
   const { isAdmin, setAdmin } = useContext(AppContext);
   const { loginUser } = useContext(AppContext);
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   let login = isActive ? "top-0 " : "top-[100vh]  ";
   const handleCloseTab = () => {
      setIsActive(false);
   };
   const handleOutSide = (e) => {
      if (e.target === e.currentTarget) {
         setIsActive(false);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      loginUser({
         username: userName,
         password: password,
      }).then((data) => {
         console.log(data);
         if (data.request.status === 200) {
            setIsActive(false);
            setAdmin({
               ...isAdmin,
               login: true,
               username: data.data.user.username,
            });
            if (data.data.user.admin === true) {
               setAdmin({
                  ...isAdmin,
                  login: true,
                  admin: true,
                  username: data.data.user.username,
               });
            }
         }
      });
   };

   // useEffect(() => {
   //    const handleLogin = async () => {
   //       const data = await axios.post("http://localhost:8000/user/login", {
   //          username: userName,
   //          password: password,
   //       });
   //       console.log(data);
   //    };
   // }, []);

   return (
      <div
         className={`fixed left-0 right-0 bottom-0  top-0 ${login} z-20 flex items-center justify-center bg-whit bg-[#4c4c4c]/70`}
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
               onClick={() => {
                  handleCloseTab();
               }}
            />
            <span className="text-3xl font-medium text-[#e9c46a] uppercase text-center ">
               đăng nhập tài khoản
            </span>
            <label className="text-label" htmlFor="username">
               Tên đăng nhập
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

            <span className="mt-3 text-right ">Đăng ký ngay</span>

            <button className="text-xl font-medium text-white uppercase mt-2 bg-[#e9c46a] py-3 rounded-full">
               Đăng nhập
            </button>
         </form>
      </div>
   );
};

export default Login;
