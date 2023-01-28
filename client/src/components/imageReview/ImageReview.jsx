import React, { useContext } from "react";
import { useState } from "react";
import { GrFormNext, GrFormPrevious, GrClose } from "react-icons/gr";
import { AppContext } from "../context/AppContext";

const ImageReview = () => {
   const { isActiveImg, setIsActiveImg } = useContext(AppContext);
   const [index, setIndex] = useState(0);
   const { itemImg } = useContext(AppContext);
   const handleNextImage = () => {
      if (index === itemImg.length - 1) {
         setIndex(0);
      } else {
         setIndex(index + 1);
      }
   };

   const handlePrevImage = () => {
      if (index === 0) {
         setIndex(itemImg.length - 1);
      } else {
         setIndex(index - 1);
      }
   };
   const handleOutSide = (e) => {
      if (e.target === e.currentTarget) {
         setIsActiveImg(false);
      }
   };
   const handleCloseReview = () => {
      setIsActiveImg(false);
   };

   return (
      <>
         {isActiveImg ? (
            <div
               className="fixed h-screen bg-black/60 top-0 left-0 right-0 bottom-0 z-40"
               onClick={(e) => handleOutSide(e)}
            >
               <GrClose
                  className="absolute right-0  text-4xl m-7"
                  onClick={handleCloseReview}
               />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex overflow-hidden select-none h-[60vh] max-w-[650px] w-full sm:max-w-[300px] sm:max-h-[40vh]">
                  <img
                     alt=""
                     src={itemImg[index]}
                     className="w-full h-full  object-cover bg-cover "
                  />
               </div>
               <GrFormNext
                  className="absolute top-1/2 text-4xl right-0  bg-white rounded-full"
                  onClick={handleNextImage}
               />
               <GrFormPrevious
                  className="absolute top-1/2 text-4xl  bg-white rounded-full"
                  onClick={handlePrevImage}
               />
            </div>
         ) : (
            ""
         )}
      </>
   );
};

export default ImageReview;
