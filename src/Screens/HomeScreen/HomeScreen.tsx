import React, { useContext, useState } from "react";
import { MovieContext } from "../../common/context";
import { MovieBanner } from "./components/MovieBanner";
import { ScreenContextProvider } from "../context/ScreenContextProvider";
import { ColumnScroll } from "../../common/components/Container";
import { MovieSection } from "../../common/components/MovieSection/MovieSection";
import { MovieCard, WideMovieCard } from "../../common/components/Card";



export const HomeScreen: React.FC = () => {
  const { state } = useContext(MovieContext);
  const trending = Object.keys(state).filter((key) => state[key].isTrending);
  const [random] = useState(Object.keys(state).filter(() => Math.random() > 0.5))
  return (
    <ScreenContextProvider defaultSelected="Transformer">
      <div className="flex flex-col overflow-hidden">
        <MovieBanner />
        <ColumnScroll>
          <MovieSection
            movies={trending}
            sectionTitle="Trending"
            Component={MovieCard}
          />
          <MovieSection
            movies={random}
            sectionTitle="Continue Watch"
            Component={WideMovieCard}
          />
        </ColumnScroll>
      </div>
    </ScreenContextProvider>
  );
};
