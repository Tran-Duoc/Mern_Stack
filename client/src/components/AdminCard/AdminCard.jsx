import React from "react";
import { BiShow } from "react-icons/bi";
import { RiDeleteBinLine, RiEdit2Fill } from "react-icons/ri";
import { FaMoneyBillWaveAlt, FaLocationArrow, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const AdminCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(AppContext);
  const { setIsUpdateProduct } = useContext(AppContext);
  const { setIsActiveEditForm } = useContext(AppContext);

  const handleMoveDetail = () => {
    navigate(`/detail/${item._id}`);
  };
  const handleDeleteProduct = () => {
    console.log(item._id);
    const confirm = window.confirm(
      `bạn có muốn xóa ${item.name} khỏi danh sách`
    );
    if (confirm) {
      console.log("true");
      deleteProduct(item._id).then(() => {
        window.location.reload();
      });
    }
  };

  const handleUpdateProduct = () => {
    console.log("is updated");
    setIsActiveEditForm(true);
    setIsUpdateProduct({
      status: true,
      id: item._id,
      data: item,
    });
  };

  return (
    <div className="grid grid-cols-[200px_auto_200px] grid-rows-1 h-32 overflow-hidden rounded-2xl border border-black mb-3  bg-[#edf2f4] sm:grid-cols-1 sm:grid-rows-[150px_auto_60px] sm:h-full">
      <img
        alt=""
        src={item.image[0]}
        className="object-cover bg-cover p-2 h-full w-full rounded-2xl"
      />
      <div className="mt-2 ml-10 sm:ml-3 sm:flex sm:flex-col  ">
        <span className="text-sm uppercase font-normal">
          Tên sản phẩm: {item.name}
        </span>
        <div className="grid grid-cols-[100px_100px_100px] mt-3 ">
          <div className="flex items-center justify-center flex-col gap-2">
            <FaMoneyBillWaveAlt className="text-green-500" />
            <span className="text-xs">
              {String(item.price).length === 9
                ? `${String(item.price).slice(0, 3)}   Triệu`
                : `${String(item.price).slice(0, 1)}   Tỷ`}
            </span>
          </div>
          <div className="flex items-center justify-center flex-col gap-2">
            <FaLocationArrow />
            <span className="text-xs">{item.where}</span>
          </div>
          <div className="flex items-center justify-center flex-col gap-2">
            <div className="flex text-sm">
              {Array(item.rating)
                .fill(0)
                .map((rating) => {
                  return <FaStar className="text-yellow-400" />;
                })}
            </div>
            <span className="text-xs">{item.rating}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  gap-5 text-xl ">
        <BiShow onClick={handleMoveDetail} />
        <RiDeleteBinLine onClick={handleDeleteProduct} />
        <RiEdit2Fill onClick={handleUpdateProduct} />
      </div>
    </div>
  );
};

export default AdminCard;
