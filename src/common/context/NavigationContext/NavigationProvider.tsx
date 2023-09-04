import { FC, useState } from 'react'
import { NavigationContext } from './NavigationContext';

export const NavigationProvider:FC<ProviderType> = ({children}) => {
    const [visible, setVisibility] = useState<boolean>(false);
  return (
    <NavigationContext.Provider value={{visible,setVisibility}} >
        {children}
    </NavigationContext.Provider>
  )
}
