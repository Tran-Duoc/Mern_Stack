import React from "react";

const Detail = () => {
   return (
      <div className="h-[60vh] bg-[#edf2f4] grid grid-cols-[400px_auto] grid-rows-1  px-10 py-20 gap-10 mt-7 rounded-2xl overflow-hidden">
         <div className="shadow-inner rounded-2xl overflow-hidden p-10 border-4">
            <img
               alt=""
               src="https://source.unsplash.com/random"
               className="w-full h-full"
            />
         </div>
         <div className="flex flex-col items-start bg-[#edf2f4]/80 shadow-inner border-4 rounded-2xl overflow-hidden  p-10">
            <span className="text-xl mb-5 font-semibold uppercase">
               this is a name product
            </span>
            <div className="detail">
               <span className="detail-text">where:</span>
               <p>this is a where</p>
            </div>
            <div className="detail">
               <span className="detail-text">description:</span>
               <p>this is description </p>
            </div>
            <div className="detail">
               <span className="detail-text">price:</span>
               <span>this is a price product</span>
            </div>

            <div className="flex items-center gap-5">
               <button className="btn bg-[#e9c46a] my-16">Mua ngay</button>
               <button className="btn bg-[#e9c46a] my-16">
                  Thêm vào giỏ hàng
               </button>
            </div>
         </div>
      </div>
   );
};

export default Detail;
