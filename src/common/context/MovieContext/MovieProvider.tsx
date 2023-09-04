import { FC, useState } from 'react'
import { MovieContext } from './MovieContext'
import { MovieData } from '../../../utils/Constants'

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
