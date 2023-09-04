import { FC, useState } from "react";
import { ScreenContext } from "./ScreenContext";


export const ScreenContextProvider:FC<ScreenProviderType> = ({children,defaultSelected}) => {
   const [selected,setSelected] = useState(defaultSelected);
  return (
    <ScreenContext.Provider value={{selected,setSelected}}>
        {children}
    </ScreenContext.Provider>
  )
}
