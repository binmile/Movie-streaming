import React, { useContext } from 'react';
import { ScreenContextProvider } from '../../common/ScreenContextProvider';
import { ComponentMovieSection } from '../../components/MovieSection/ComponentMovieSection';
import { ComponentMovieDetail } from '../../components/MovieDetail/ComponentMovieDetail';
import { ComponentColumnScroll } from '../../components';
import { MovieContext } from '../../common/MovieProvider';

export const FavoriteScreen: React.FC = () => {
  const { state } = useContext(MovieContext);
  const data = Object.keys(state).filter(
    (movieId) => state[movieId].isFavorite
  );

  return (
    <ScreenContextProvider defaultSelected={data.length > 0 ? data[0] : ''}>
      <ComponentColumnScroll>
        <ComponentMovieSection
          movies={data}
          sectionTitle={'Favorite'}
        />
        {data.length > 0 && <ComponentMovieDetail />}
      </ComponentColumnScroll>
    </ScreenContextProvider>
  );
};
