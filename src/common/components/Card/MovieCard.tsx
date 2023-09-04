/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useContext } from "react";
import { FavoriteButton } from "../Button/FavoriteButton";
import { MovieContext } from "../../context";
import { ScreenContext } from "../../../Screens/context/ScreenContext";

export const MovieCard:  FC<CardType> = ({ movieId }) => {
  const { state, setFavoriteMovie } = useContext(MovieContext);
  const { image, description, isFavorite, title } = state[movieId];
  const { setSelected } = useContext(ScreenContext);
  const selectMovie: any = (e: MouseEvent) => {
    e.stopPropagation();
    setSelected(movieId);
  };
  return (
    <div
      className="flex w-[150px] h-[200px]  md:w-[255px] md:h-[301px] relative shrink-0 rounded-lg overflow-hidden text-black "
      onClick={selectMovie}
    >
      <img src={image} className="object-cover w-[100%]" />
      <div className="flex absolute top-0 right-0 m-2">
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => {
            setFavoriteMovie(movieId);
          }}
        />
      </div>
      <div className="flex flex-col absolute bottom-0 w-[100%] p-2 md:p-5 bg-favorite backdrop-blur-[10px] h-[30%] ">
        <h2 className="text-[12px] lg:text-[18px]">{title}</h2>
        <p className="text-[10px] lg:text-[14px]">{description}</p>
      </div>
    </div>
  );
};

