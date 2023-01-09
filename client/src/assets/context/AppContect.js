import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
   const [isActive, setIsActive] = useState(false);

   return (
      <AppContext.Provider value={{ isActive, setIsActive }}>
         {children}
      </AppContext.Provider>
   );
};
