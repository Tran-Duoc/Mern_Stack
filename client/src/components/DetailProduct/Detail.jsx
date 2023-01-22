import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Detail = () => {
   const { getItem } = useContext(AppContext);
   const { id } = useParams();
   const [information, setInformation] = useState({
      name: "",
      where: "",
      price: 0,
      description: "",
      image: "",
   });

   useEffect(() => {
      getItem(id).then((data) => {
         if (data.success) {
            setInformation({
               name: data.product[0].name,
               where: data.product[0].where,
               price: data.product[0].price,
               description: data.product[0].description,
               image: data.product[0].image[0],
            });
         }
      });
   }, []);

   return (
      <div className="h-[60vh] bg-[#edf2f4] grid grid-cols-[400px_auto] grid-rows-1  px-10 py-20 gap-10 mt-7 rounded-2xl overflow-hidden">
         <div className="shadow-inner rounded-2xl overflow-hidden p-10 border-4">
            <img
               alt=""
               src={`${information.image}`}
               className="w-full h-full"
            />
         </div>
         <div className="flex flex-col items-start bg-[#edf2f4]/80 shadow-inner border-4 rounded-2xl overflow-hidden  p-10">
            <span className="text-xl mb-5 font-semibold uppercase">
               {information.name}
            </span>
            <div className="detail">
               <span className="detail-text">Địa điểm: </span>
               <p>{information.where}</p>
            </div>
            <div className="grid grid-cols-[80px_auto]">
               <span className="detail-text">Mô tả:</span>
               <p>{information.description}</p>
            </div>
            <div className="detail">
               <span className="detail-text">Giá:</span>
               <span>
                  {" "}
                  {String(information.price).length === 9
                     ? `${String(information.price).slice(0, 3)}   Triệu Đồng`
                     : `${String(information.price).slice(0, 1)}   Tỷ Đồng`}
               </span>
            </div>

            <div className="flex items-center gap-5">
               {/* <button className="btn bg-[#e9c46a] my-16">Mua ngay</button> */}
               <button className=" bg-[#e9c46a] my-12 py-3 px-4 rounded-3xl font-medium uppercase" >
                  Thêm vào danh sách xem sau
               </button>
            </div>
         </div>
      </div>
   );
};

export default Detail;
