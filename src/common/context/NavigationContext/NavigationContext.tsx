import { createContext } from "react";


export const NavigationContext = createContext<DrawerContextType>({visible:true,setVisibility:()=>{}});