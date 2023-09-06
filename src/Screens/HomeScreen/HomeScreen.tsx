import React, { useContext, useState } from 'react';
import { MovieContext } from '../../common/context';
import { ScreenContextProvider } from '../context/ScreenContextProvider';
import { ComponentColumnScroll } from '../../components/Container';
import { ComponentMovieSection } from '../../components/MovieSection/ComponentMovieSection';
import { ComponentMovieCard, ComponentWideMovieCard } from '../../components/Card';
import { ComponentMovieBanner } from './components/ComponentMovieBanner';



export const HomeScreen: React.FC = () => {
  const { state } = useContext(MovieContext);
  const trending = Object.keys(state).filter((key) => state[key].isTrending);
  const [random] = useState(Object.keys(state).filter(() => Math.random() > 0.5));
  return (
    <ScreenContextProvider defaultSelected="Transformer">
      <div className="flex flex-col overflow-hidden">
        <ComponentMovieBanner />
        <ComponentColumnScroll>
          <ComponentMovieSection
            movies={trending}
            sectionTitle="Trending"
            Component={ComponentMovieCard}
          />
          <ComponentMovieSection
            movies={random}
            sectionTitle="Continue Watch"
            Component={ComponentWideMovieCard}
          />
        </ComponentColumnScroll>
      </div>
    </ScreenContextProvider>
  );
};
