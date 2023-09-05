import { FC } from "react";
import { ComponentRowScroll } from "../Container/ComponentRowScroll";

export const ComponentMovieSection: FC<MovieSectionType> = ({
  movies,
  sectionTitle,
  Component,
}) => {
  return (
    <section className="flex flex-col text-white font-bold  gap-5 p-2 md:p-5 ">
      <h2 className="text-[22px]">{sectionTitle}</h2>
      <ComponentRowScroll>
        {movies.map((movie) => (
          <Component key={movie} movieId={movie} />
        ))}
      </ComponentRowScroll>
    </section>
  );
};
