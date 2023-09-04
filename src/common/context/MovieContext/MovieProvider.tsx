import { FC, useState } from 'react'
import { MovieContext } from './MovieContext'
import { MovieData } from '../../../utils/Constants'

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
