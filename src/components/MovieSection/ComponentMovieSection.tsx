import { FC, useContext } from 'react';
import { ComponentRowScroll } from '../ComponentRowScroll/ComponentRowScroll';
import { ScreenContext } from '../../Screens/context/ScreenContext';
import { MovieContext } from '../../common/MovieProvider';

export const ComponentMovieSection: FC<MovieSectionType> = ({
  movies,
  sectionTitle,
  Component,
}) => {
  const { state, setFavoriteMovie } = useContext(MovieContext);
  const { setSelected } = useContext(ScreenContext);
  return (
    <section className="flex flex-col text-white font-bold  gap-5 p-2 md:p-5 ">
      <h2 className="text-[22px]">{sectionTitle}</h2>
      <ComponentRowScroll>
        {movies.map((movie) => (
          <Component
            key={movie}
            movieId={movie}
            movie={state[movie]}
            setSelected={setSelected}
            setFavoriteMovie={setFavoriteMovie}
          />
        ))}
      </ComponentRowScroll>
    </section>
  );
};
