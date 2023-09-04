import { FC, useContext } from "react";
import { RowScroll } from "../Container/RowScroll";
import { MovieContext } from "../../context";
import { ScreenContext } from "../../../Screens/context/ScreenContext";

export const MovieSection: FC<MovieSectionType> = ({
  movies,
  sectionTitle,
  Component,
}) => {
  const {state,setFavoriteMovie} = useContext(MovieContext);
  const {setSelected}=useContext(ScreenContext);
  return (
    <section className="flex flex-col text-white font-bold  gap-5 p-2 md:p-5 ">
      <h2 className="text-[22px]">{sectionTitle}</h2>
      <RowScroll>
        {movies.map((movie) => (
          <Component key={movie} movieId={movie} movie={state[movie]} setSelected={setSelected} setFavoriteMovie={setFavoriteMovie} />
        ))}
      </RowScroll>
    </section>
  );
};
