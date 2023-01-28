import React, { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import CartProduct from "../CardProduct/CardProduct";
import { AppContext } from "../context/AppContext";
import { useState } from "react";

const Home = ({ data }) => {
   const { getData } = useContext(AppContext);
   const [dataItem, setData] = useState([]);
   useEffect(() => {
      getData().then((data) => {
         if (data.request.status === 200) {
            setData(data.data.items);
         }
      });
   }, [getData]);
   return (
      <>
         <div className="rounded-2xl overflow-hidden sm:h-[30vh] sm:mt-0 h-[60vh] mt-8 md:h-[40vh] md:mt-4" >
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
                           <span className="text-[40px] font-bold text-[#d62828] mb-3 py-2 drop-shadow-2xl uppercase md:text-lg sm:text-[12px] md:mb-1 md:leading-none">
                              {item.primary_title}
                           </span>
                           <span className="text-[36px] font-semibold text-[#fb8500] uppercase md:text-xl sm:text-[10px] md:leading-none">
                              {item.secondary_title}
                           </span>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
         <div
            className={`mt-8 bg-[#edf2f4]/80 py-7 px-10 md:px-5 drop-shadow-2xl rounded-2xl sm:px-[4%] `}
         >
            <Swiper
               slidesPerView={2}
               spaceBetween={5}
               pagination={{
                  clickable: true,
               }}
               loop="true"
               breakpoints={{
                  320: {
                     slidesPerView: 1,
                  },
                  576: {
                     slidesPerView: 1,
                  },
                  768: {
                     slidesPerView: 2,
                  },
                  1280: {
                     slidesPerView: 3,
                  },
                  1400: {
                     slidesPerView: 5,
                     spaceBetween: 5,
                  },
               }}
               autoplay={{
                  delay: 3000,
               }}
               modules={[Pagination]}
               className="mySwiper"
            >
               {[...dataItem].map((item) => {
                  return (
                     <SwiperSlide key={item._id}>
                        <CartProduct item={item} />
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </>
   );
};

export default Home;
