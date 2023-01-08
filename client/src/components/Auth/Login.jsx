import React from "react";

const Login = ({ isActive }) => {
   let login = isActive ? "top-0" : "top-[100vh]";

   return (
      <div
         className={`fixed left-0 right-0 bottom-0 bg-[#edf2f4] top-0 ${login} z-20 flex items-center justify-center flex-col`}
      >
         <span>Login</span>
         <form className="mt-6 w-[500px] h-[600px] bg-red-500"></form>
      </div>
   );
};

export default Login;
