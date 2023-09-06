import React, { useContext } from 'react';
import { ScreenContextProvider } from '../../common/ScreenContextProvider';
import { ComponentMovieSection } from '../../components/MovieSection/ComponentMovieSection';
import { ComponentMovieDetail } from '../../components/MovieDetail/ComponentMovieDetail';
import { MovieContext } from '../../common/MovieProvider';
import { ComponentColumnScroll } from '../../components';

export const TrendingScreen: React.FC = () => {
  const { state } = useContext(MovieContext);
  const data = Object.keys(state).filter(
    (movieId) => state[movieId].isTrending
  );
  return (
    <ScreenContextProvider defaultSelected={data.length > 0 ? data[0] : ''}>
      <ComponentColumnScroll>
        <ComponentMovieSection
          movies={data}
          sectionTitle={'Trending'}
          isWide={true}
        />
        {data.length > 0 && <ComponentMovieDetail />}
      </ComponentColumnScroll>
    </ScreenContextProvider>
  );
};
