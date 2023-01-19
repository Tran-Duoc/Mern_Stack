import React, { useEffect, useState, useContext } from "react";
import CardProduct from "../CardProduct/CardProduct";
import { AppContext } from "../context/AppContext";
import MultipleSelect from "../MultipleSelect/MultipleSelect";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Product = () => {
   const [payload, setPayload] = useState([]);
   const [page, setPage] = useState(1);
   const [rating, setRating] = useState("all");
   const [price, setPrice] = useState("all");
   const [where, setWhere] = useState("all");
   const { getData, filterData } = useContext(AppContext);
   const navigate = useNavigate();
   const handleLoadMore = () => {
      navigate(`?page=${page + 1}`);
      setPage(page + 1);
   };
   const handleLoadPrev = () => {
      navigate(`?page=${page - 1}`);
      setPage(page - 1);
   };

   useEffect(() => {
      getData(page, 4).then((data) => {
         setPayload(data.data.items);
      });
   }, [getData, page]);

   useEffect(() => {
      filterData(rating, price).then((data) => {
         setPayload(data.items);
      });
   }, [rating, price, filterData, setPayload]);

   return (
      <div>
         <MultipleSelect setRating={setRating} setPrice={setPrice} />
         <div className=" grid grid-cols-4 flex-wrap px-10 gap-10 py-7 bg-[#edf2f4] mt-7 rounded-2xl overflow-hidden">
            {[...payload].map((item) => {
               let result =
                  payload.length === 0 ? (
                     <span className="text-4xl">Không có sản phẩm nào nữa</span>
                  ) : (
                     <CardProduct item={item} key={item._id} />
                  );
               return result;
            })}
         </div>
         <div className="flex items-center justify-center  rounded-2xl  mt-7 gap-5">
            {page === 1 ? (
               ""
            ) : (
               <GrPrevious
                  className="text-4xl bg-[#edf2f4] rounded-full p-2"
                  onClick={handleLoadPrev}
               />
            )}
            {payload.length === 0 ? (
               ""
            ) : (
               <GrNext
                  className="text-4xl bg-[#edf2f4] rounded-full p-2"
                  onClick={handleLoadMore}
               />
            )}
         </div>
      </div>
   );
};

export default Product;
