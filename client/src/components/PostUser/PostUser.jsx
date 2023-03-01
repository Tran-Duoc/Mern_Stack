import React from "react";
import { useContext } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { AppContext } from "../context/AppContext";
const PostUser = () => {
  const { isUpdateProduct, setIsUpdateProduct } = useContext(AppContext);
  const { setIsActiveEditForm } = useContext(AppContext);
  const { postUser } = useContext(AppContext);
  console.log(postUser);
  const handleCreateProduct = () => {
    setIsUpdateProduct({
      ...isUpdateProduct,
      status: false,
    });
    setIsActiveEditForm(true);
  };

  return (
    <div className="min-h-[60vh] bg-white mt-7 shadow-2xl rounded-2xl overflow-hidden">
      <div className="grid grid-rows-6 gap-1 ">
        <div className="row-span-1 border-b-black border bg-red-500 py-3 px-2">
          <BiAddToQueue
            className=" w-32 h-12 p-3 text-2xl ml-auto rounded-3xl bg-[#e9c46a] text-white hover:bg-[#edf2f4] duration-300 hover:text-[#e9c46a]"
            onClick={handleCreateProduct}
          />
        </div>
        <div className="row-span-5"></div>
      </div>
    </div>
  );
};

export default PostUser;
