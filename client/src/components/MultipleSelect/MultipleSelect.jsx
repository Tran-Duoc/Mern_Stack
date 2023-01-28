import Select from "react-select";
import { data_rating, data_price } from "../../data/dataFilter.js";

const MultipleSelect = ({ setRating, setPrice, setSort }) => {
   return (
      <div className="grid grid-cols-6 gap-5 bg-[#edf2f4] px-10 py-7 mt-7  rounded-2xl md:grid-cols-4 sm:grid-cols-2 md:px-3 md:py-5 md:-mt-3 ">
         <div>
            <div className="wrap_text">
               <span className="text-select">Đánh giá</span>
            </div>

            <Select
               className="main-select"
               onChange={(item) => {
                  setRating(item.value);
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
                  setPrice(item.value);
               }}
               options={data_price}
               isSearchable={true}
               isDisabled={false}
               isLoading={false}
               isRtl={false}
            />
         </div>
      </div>
   );
};

export default MultipleSelect;
