import React, { useEffect, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import AdminCard from "../AdminCard/AdminCard";

const Admin = () => {
   const { getAll } = useContext(AppContext);
   const { isUpdateProduct, setIsUpdateProduct } = useContext(AppContext);

   const [data, setData] = useState([]);
   const { setIsActiveEditForm } = useContext(AppContext);

   const handleCreateProduct = () => {
      setIsUpdateProduct({
         ...isUpdateProduct,
         status: false,
      });
      setIsActiveEditForm(true);
   };

   useEffect(() => {
      getAll().then((data) => {
         setData(data.allItem);
      });
   }, [getAll]);

   return (
      <div className="  mt-7 rounded-2xl overflow-hidden flex flex-col ">
         <span className="text-center text-xl font-medium max-w-full bg-[#edf2f4] py-5 shadow-inner">
            Danh sách sản phẩm
         </span>
         <div className="bg-[#edf2f4] p-10 mt-5 rounded-b-2xl overflow-hidden ">
            {[...data].map((item) => {
               return <AdminCard item={item} key={item._id} />;
            })}
         </div>
         <BiAddToQueue
            className=" w-40 h-16 p-3 text-2xl mx-auto mt-10 rounded-3xl bg-[#e9c46a] text-white hover:bg-[#edf2f4] duration-300 hover:text-[#e9c46a]"
            onClick={handleCreateProduct}
         />
      </div>
   );
};

export default Admin;
