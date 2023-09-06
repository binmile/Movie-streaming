import React, { useContext, useState } from 'react';
import { ScreenContextProvider } from '../../common/ScreenContextProvider';

import { ComponentMovieSection } from '../../components/MovieSection/ComponentMovieSection';
import { ComponentMovieBanner } from './components/ComponentMovieBanner/ComponentMovieBanner';
import { MovieContext } from '../../common/MovieProvider';
import { ComponentColumnScroll } from '../../components';

export const HomeScreen: React.FC = () => {
  const { state } = useContext(MovieContext);
  const trending = Object.keys(state).filter((key) => state[key].isTrending);
  const [random] = useState(
    Object.keys(state).filter(() => Math.random() > 0.5)
  );
  return (
    <ScreenContextProvider defaultSelected="Transformer">
      <div className="flex flex-col overflow-hidden">
        <ComponentMovieBanner />
        <ComponentColumnScroll>
          <ComponentMovieSection
            movies={trending}
            sectionTitle="Trending"
            
          />
          <ComponentMovieSection
            movies={random}
            sectionTitle="Continue Watch"
            isWide={true}
          />
        </ComponentColumnScroll>
      </div>
    </ScreenContextProvider>
  );
};
