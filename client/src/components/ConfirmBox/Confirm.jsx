import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Confirm = () => {
   const { isActiveConFirm, setIsActiveResConFirm } = useContext(AppContext);
   const { setIsActiveRes } = useContext(AppContext);
   const { setIsActive } = useContext(AppContext);
   const navigate = useNavigate();

   const handleTrue = () => {
      setIsActiveResConFirm(false);
      setIsActiveRes(false);
      setIsActive(true);
   };

   const hanleFalse = () => {
      navigate("/");
      setIsActiveResConFirm(false);
      setIsActiveRes(false);
   };

   return (
      <>
         {isActiveConFirm ? (
            <>
               <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                           <h3 className="text-3xl font-semibold">
                              Đăng ký thành công
                           </h3>
                           <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                 ×
                              </span>
                           </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                           <p className="my-4 text-slate-500 text-lg leading-relaxed">
                              Bạn đã đăng ký tài khoản thành công. bạn có muốn
                              chuyển sang trang đăng nhập
                           </p>
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                           <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={hanleFalse}
                           >
                              Không
                           </button>
                           <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={handleTrue}
                           >
                              Vâng
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
         ) : (
            ""
         )}
      </>
   );
};

export default Confirm;
