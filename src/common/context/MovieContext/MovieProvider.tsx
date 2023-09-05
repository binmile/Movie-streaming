import { FC, useState } from 'react'
import { MovieData } from '../../../utils/Constants'
import { createContext } from "react";


export const MovieContext = createContext<MovieContextType>({state:{},setFavoriteMovie:()=>{}}) 

export const MovieProvider:FC<ProviderType> = ({children}) => {

    const [moviesData, setMovieData] = useState<MovieRecordType>(MovieData);

    const setFavoriteMovie = (movieId:string)=>{
      const temp={[movieId]: {...moviesData[movieId],isFavorite:!moviesData[movieId].isFavorite}};
      setMovieData(data=>{
        return {...data,...temp}
      });
    };

  return (
    <MovieContext.Provider value={{state:moviesData,setFavoriteMovie}}>
       {children}
    </MovieContext.Provider>
  )
}
