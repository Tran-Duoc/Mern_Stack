import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

const EditForm = () => {
  const { isActiveEditForm, setIsActiveEditForm } = useContext(AppContext);
  const { setPostUser } = useContext(AppContext);
  const { isUpdateProduct } = useContext(AppContext);
  const { getItem } = useContext(AppContext);
  const { createData, updateProduct } = useContext(AppContext);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [where, setWhere] = useState("");
  const [price, setPrice] = useState(Number(0));
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setRating(e.target.value);
  };
  const handleOutSide = (e) => {
    if (e.target === e.currentTarget) {
      setIsActiveEditForm(false);
    }
  };
  useLayoutEffect(() => {
    if (isUpdateProduct.status) {
      getItem(isUpdateProduct.id).then((data) => {
        const { name, where, price, rating, description } = data.product[0];
        console.log(data.product[0]);
        setName(name);
        setWhere(where);
        setPrice(price);
        setRating(rating);
        setDescription(description);
      });
    }
  }, [getItem, isUpdateProduct.id, isUpdateProduct.status]);
  const handleCloseTab = () => {
    setIsActiveEditForm(false);
  };
  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      if (!isUpdateProduct.status) {
        createData({
          name: name,
          where: where,
          price: price,
          rating: rating,
          description: description,
          image: [image1[0], image1[1]],
        }).then((data) => {
          if (data.success) {
            alert(data.message);
            setIsActiveEditForm(false);
            window.location.reload();
          }
          console.log(data);
        });
      } else {
        await updateProduct(isUpdateProduct.id, {
          name: name,
          where: where,
          price: price,
          rating: rating,
          description: description,
          image: [image1[0], image1[1]],
        }).then((data) => {
          console.log(data);
          alert(data.message);
          setIsActiveEditForm(false);
          window.location.reload();
        });
      }
    } catch (error) {}
  };

  return (
    <>
      {isActiveEditForm ? (
        <div
          className="fixed top-0 left-0 bottom-0 right-0  bg-black/40 z-10  flex items-center justify-center  "
          onClick={(e) => handleOutSide(e)}
        >
          <form
            className="bg-[#edf2f4] p-10  flex flex-col gap-7 max-w-[470px] mx-5  rounded-2xl  overflow-hidden relative sm:gap-2 sm:px-3"
            onSubmit={(e) => handleCreateProduct(e)}
          >
            <AiOutlineCloseCircle
              className="absolute top-0 right-0 z-10 text-3xl m-3"
              onClick={handleCloseTab}
            />
            <span className="text-center text-xl uppercase font-medium">
              Nh???p th??ng tin s???n ph???m
            </span>
            <div className="edit_admin">
              <label htmlFor="name" className="admin-text_label">
                T??n s???n ph???m
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="admin-text_input"
                placeholder="t??n"
              />
            </div>

            <div className="edit_admin">
              <label htmlFor="price" className="admin-text_label">
                Gi??
              </label>
              <input
                type="text"
                value={Number(price)}
                onChange={(e) => setPrice(e.target.value)}
                className="admin-text_input"
                placeholder="gi??"
              />
            </div>

            <div className="edit_admin">
              <label htmlFor="where" className="admin-text_label">
                ?????a ??i???m
              </label>
              <input
                type="text"
                value={where}
                onChange={(e) => setWhere(e.target.value)}
                className="admin-text_input"
                placeholder="?????a ??i???m"
              />
            </div>

            <div className="edit_admin">
              <label htmlFor="where" className="admin-text_label">
                M?? t???
              </label>
              <textarea
                value={description}
                className="admin-text_input"
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                cols={60}
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="rating" className="admin-text_label">
                ????nh gi??
              </label>

              <div className="flex items-center justify-between">
                <div className="edit-admin_radio">
                  <label htmlFor="rating-1">1 sao</label>
                  <input
                    type="radio"
                    id="rating-1"
                    value={1}
                    onChange={handleChange}
                    // checked={rating === 1}
                    name="rating"
                    className="radio_rating"
                  />
                </div>
                <div className="edit-admin_radio">
                  <label htmlFor="rating-2">2 sao</label>
                  <input
                    type="radio"
                    id="rating-2"
                    value={2}
                    onChange={handleChange}
                    // checked={rating === 2}
                    name="rating"
                    className="radio_rating"
                  />
                </div>
                <div className="edit-admin_radio">
                  <label htmlFor="rating-3">3 sao</label>
                  <input
                    type="radio"
                    id="rating-3"
                    value={3}
                    onChange={handleChange}
                    // checked={rating === 3}
                    name="rating"
                    className="radio_rating"
                  />
                </div>
                <div className="edit-admin_radio">
                  <label htmlFor="rating-4">4 sao</label>
                  <input
                    type="radio"
                    id="rating-4"
                    value={4}
                    onChange={handleChange}
                    name="rating"
                    className="radio_rating"
                  />
                </div>
                <div className="edit-admin_radio">
                  <label htmlFor="rating-5">5 sao</label>
                  <input
                    type="radio"
                    id="rating-5"
                    value={5}
                    onChange={handleChange}
                    name="rating"
                    className="radio_rating"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="image" className="admin-text_label">
                Link ???nh
              </label>
              <div className="flex items-center justify-between">
                <label htmlFor="" className="admin-text_label">
                  Ch???n 2 ???nh
                </label>
                <input
                  type="file"
                  className="admin-text_input"
                  multiple
                  onChange={(e) => {
                    setImage1(Array.from(e.target.files));
                  }}
                />
              </div>
            </div>

            <button className="bg-[#e9c46a] py-4 rounded-full font-semibold uppercase">
              T???o
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EditForm;
