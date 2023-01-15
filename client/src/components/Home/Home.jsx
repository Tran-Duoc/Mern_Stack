import React, { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import CartProduct from "../CardProduct/CardProduct";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import { BiCloudLightRain } from "react-icons/bi";

const Home = ({ data }) => {
   const { getData } = useContext(AppContext);
   const [dataItem, setData] = useState([]);
   useEffect(() => {
      getData().then((data) => {
         if (data.request.status === 200) {
            setData(data.data.items);
         }
      });
   }, []);
   return (
      <>
         <div className="h-[60vh] rounded-2xl overflow-hidden mt-8">
            <Swiper
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
               }}
               loop="true"
               pagination={{
                  clickable: true,
               }}
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
               className="mySwiper w-full h-full"
            >
               {[...data].map((item, index) => {
                  const { image_url } = item;
                  return (
                     <SwiperSlide className="" key={index + 1}>
                        <img
                           src={image_url}
                           className="w-full h-full object-fill bg-cover absolute  opacity-[0.8]"
                           alt=" "
                        />
                        <div className="absolute z-[100] top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 flex flex-col text-justify">
                           <span className="text-[40px] font-bold text-[#d62828] mb-3 py-2 drop-shadow-2xl uppercase">
                              {item.primary_title}
                           </span>
                           <span className="text-[36px] font-semibold text-[#fb8500] uppercase">
                              {item.secondary_title}
                           </span>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
         <div className="mt-8 bg-[#edf2f4]/80 py-7 px-10 drop-shadow-2xl rounded-2xl overflow-hidden grid grid-cols-4   ">
            {[...dataItem].map((item) => {
               console.log(item);
               return <CartProduct item={item} key={item._id} />;
            })}
            {/* <CartProduct   /> */}
         </div>
      </>
   );
};

export default Home;
