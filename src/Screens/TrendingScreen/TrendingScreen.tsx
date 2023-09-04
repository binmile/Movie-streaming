import React, { useContext } from "react";
import { ScreenContextProvider } from "../context/ScreenContextProvider";
import { MovieContext } from "../../common/context/MovieContext/MovieContext";
import { ColumnScroll } from "../../common/components/Container/ColumnScroll";
import { MovieSection } from "../../common/components/MovieSection/MovieSection";
import { MovieCard } from "../../common/components/Card/MovieCard";
import { MovieDetail } from "../../common/components/MovieDetail/MovieDetail";

export const TrendingScreen: React.FC = () => {
  const { state } = useContext(MovieContext);
  const data = Object.keys(state).filter((movieId) => state[movieId].isTrending);
  return (
    <ScreenContextProvider defaultSelected={data.length > 0 ? data[0] : ""}>
      <ColumnScroll>
        <MovieSection
          movies={data}
          sectionTitle={"Trending"}
          Component={MovieCard}
        />
        {data.length > 0 && <MovieDetail />}
      </ColumnScroll>
    </ScreenContextProvider>
  );
};
