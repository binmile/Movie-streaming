import { FC, useState } from 'react';
import { createContext } from "react";


export const NavigationContext = createContext<DrawerContextType>({visible:true,setVisibility:()=>{}});

export const NavigationProvider:FC<ProviderType> = ({children}) => {
    const [visible, setVisibility] = useState<boolean>(false);
  return (
    <NavigationContext.Provider value={{visible,setVisibility}} >
        {children}
    </NavigationContext.Provider>
  )
}
