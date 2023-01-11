import { useEffect, useState } from "react";
import { createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
   const [isActive, setIsActive] = useState(false);
   const [isActiveRes, setIsActiveRes] = useState(false);
   const [isMobile, setIsMobile] = useState(false);
   const [resize, setResize] = useState({
      with: window.innerWidth,
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
   }, [resize.width]);

   return (
      <AppContext.Provider
         value={{
            isActive,
            setIsActive,
            isActiveRes,
            setIsActiveRes,
            resize,
            setResize,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
