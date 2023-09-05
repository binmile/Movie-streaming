import React, { useContext } from "react";
import { ScreenContextProvider } from "../context/ScreenContextProvider";
import { MovieContext } from "../../common/context";
import { ComponentMovieCard } from "../../components/Card";
import { ComponentMovieSection } from "../../components/MovieSection/ComponentMovieSection";
import { ComponentMovieDetail } from "../../components/MovieDetail/ComponentMovieDetail";
import { ComponentColumnScroll } from "../../components/Container";

export const TrendingScreen: React.FC = () => {
  const { state } = useContext(MovieContext);
  const data = Object.keys(state).filter((movieId) => state[movieId].isTrending);
  return (
    <ScreenContextProvider defaultSelected={data.length > 0 ? data[0] : ""}>
      <ComponentColumnScroll>
        <ComponentMovieSection
          movies={data}
          sectionTitle={"Trending"}
          Component={ComponentMovieCard}
        />
        {data.length > 0 && <ComponentMovieDetail />}
      </ComponentColumnScroll>
    </ScreenContextProvider>
  );
};
