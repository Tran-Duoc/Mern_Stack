import { useEffect, useState } from "react";
import { createContext } from "react";
import handler from "./handler";

export const AppProvider = ({ children }) => {
   const [isActive, setIsActive] = useState(false);
   const [isActiveRes, setIsActiveRes] = useState(false);
   const [isActiveConFirm, setIsActiveResConFirm] = useState(false);
   const [isMobile, setIsMobile] = useState(false);
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
            getData,
            getUser,
            getItem,
            sortData,
            isActiveConFirm,
            setIsActiveResConFirm,
            setResize,
            dropdown,
            setDropdown,
            isAdmin,
            isMobile,
            setAdmin,
            isErr,
            setIsErr,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
export const AppContext = createContext({});
