import { useEffect, useState } from "react";
import { createContext } from "react";
import handler from "./handler";

export const AppProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveRes, setIsActiveRes] = useState(false);
  const [postUser, setPostUser] = useState([]);
  const [isActiveImg, setIsActiveImg] = useState(false);
  const [isActiveEditForm, setIsActiveEditForm] = useState(false);
  const [isActiveConFirm, setIsActiveResConFirm] = useState(false);
  const [isUpdateProduct, setIsUpdateProduct] = useState({
    status: false,
    id: 0,
    data: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [itemImg, setItemImg] = useState("");
  const [isErr, setIsErr] = useState({
    status: false,
    message: "",
  });
  const [dropdown, setDropdown] = useState(false);
  const [isAdmin, setAdmin] = useState({
    admin: false,
    login: false,
    username: "",
  });

  const {
    loginUser,
    getData,
    filterData,
    getUser,
    registerUser,
    sortData,
    getItem,
    createData,
    getAll,
    deleteProduct,
    updateProduct,
  } = handler;
  const [resize, setResize] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    const handleResize = () => {
      setResize({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    resize.with <= 540 ? setIsMobile(true) : setIsMobile(false);
  }, [resize.width, resize.with]);

  return (
    <AppContext.Provider
      value={{
        isActive,
        setIsActive,
        isActiveRes,
        setIsActiveRes,
        resize,
        loginUser,
        filterData,
        registerUser,
        isActiveImg,
        setIsActiveImg,
        getAll,
        getData,
        getUser,
        isActiveConFirm,
        setIsActiveResConFirm,
        getItem,
        sortData,
        setResize,
        itemImg,
        setItemImg,
        dropdown,
        setDropdown,
        isAdmin,
        isMobile,
        setAdmin,
        isErr,
        setIsErr,
        isActiveEditForm,
        setIsActiveEditForm,
        createData,
        deleteProduct,
        isUpdateProduct,
        setIsUpdateProduct,
        updateProduct,
        postUser,
        setPostUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const AppContext = createContext({});
