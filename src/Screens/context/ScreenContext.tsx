import { createContext } from "react";


export const ScreenContext = createContext<ScreenContextType>({selected:'1',setSelected:()=>{}})