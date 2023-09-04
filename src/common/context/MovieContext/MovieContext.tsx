import { createContext } from "react";


export const MovieContext = createContext<MovieContextType>({state:{},setFavoriteMovie:()=>{}})