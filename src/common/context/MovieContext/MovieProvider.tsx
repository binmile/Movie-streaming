import { FC, useState } from 'react'
import { MovieData } from '../../../utils/Constants'
import { createContext } from "react";


export const MovieContext = createContext<MovieContextType>({state:{},setFavoriteMovie:()=>{}}) 

export const MovieProvider:FC<ProviderType> = ({children}) => {

    const [moviesData, setMovieData] = useState<MovieRecordType>(MovieData);

    const setFavoriteMovie = (movieId:string)=>{
      moviesData[movieId].isFavorite = !moviesData[movieId].isFavorite;
      setMovieData({...moviesData});
    };

  return (
    <MovieContext.Provider value={{state:moviesData,setFavoriteMovie}}>
       {children}
    </MovieContext.Provider>
  )
}
