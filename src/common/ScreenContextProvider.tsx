import { FC, useState } from 'react';
import { createContext } from 'react';


export const ScreenContext = createContext<ScreenContextType>({selected:'1',setSelected:()=>{}});


export const ScreenContextProvider:FC<ScreenProviderType> = ({children,defaultSelected}) => {
   const [selected,setSelected] = useState(defaultSelected);
  return (
    <ScreenContext.Provider value={{selected,setSelected}}>
        {children}
    </ScreenContext.Provider>
  );
};
