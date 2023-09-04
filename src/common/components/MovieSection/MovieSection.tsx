import { FC } from "react";
import { RowScroll } from "../Container/RowScroll";

export const MovieSection: FC<MovieSectionType> = ({
  movies,
  sectionTitle,
  Component,
}) => {
  return (
    <section className="flex flex-col text-white font-bold  gap-5 p-2 md:p-5 ">
      <h2 className="text-[22px]">{sectionTitle}</h2>
      <RowScroll>
        {movies.map((movie) => (
          <Component key={movie} movieId={movie} />
        ))}
      </RowScroll>
    </section>
  );
};
