import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import CartProduct from "../CartProduct/CartProduct";
const Home = ({ data }) => {
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
         <CartProduct />
      </>
   );
};

export default Home;
