import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import Select from "react-select";
import { data_rating, data_price } from "../../data/dataFilter.js";
import data from "../../data/dataSlider.js";

const options = [
   {
      value: "item 1",
      label: "Item 1",
   },
   {
      value: "item 2",
      label: "Item 2",
   },
];

const MultipleSelect = () => {
   const [dataRating, setDataRating] = useState([]);
   const [dataPrice, setDataPrice] = useState([]);

   return (
      <div className="grid grid-cols-3 gap-10 bg-[#edf2f4] px-10 py-10 mt-7  rounded-2xl">
         <div>
            <div className="wrap_text">
               <span className="text-select">Đánh giá</span>
            </div>

            <Select
               className="main-select"
               onChange={(item) => {
                  console.log(item.value);
                  setDataRating(item.value);
               }}
               options={data_rating}
               isSearchable={true}
               isDisabled={false}
               isLoading={false}
               isRtl={false}
            />
         </div>
         <div>
            <div className="wrap_text">
               <span className="text-select">Giá</span>
            </div>
            <Select
               className="main-select"
               onChange={(item) => {
                  console.log(item.value);
                  setDataPrice(item.value);
               }}
               options={data_price}
               isSearchable={true}
               isDisabled={false}
               isLoading={false}
               isRtl={false}
            />
         </div>
         <div>
            <div className="wrap_text">
               <span className="text-select  ">Thành phố</span>
            </div>
            <Select
               className="main-select"
               options={options}
               isClearable={true}
               isDisabled={false}
               isLoading={false}
               isRtl={false}
            />
         </div>
      </div>
   );
};

export default MultipleSelect;
