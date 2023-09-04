import { FC, useContext } from "react";
import { MovieContext } from "../../context";
import { ScreenContext } from "../../../Screens/context/ScreenContext";
import { FavoriteButton } from "../Button/FavoriteButton";

export const WideMovieCard: FC<CardType> = ({ movieId }) => {
  const { state, setFavoriteMovie } = useContext(MovieContext);
  const { image, description, isFavorite, title } = state[movieId];
  const { setSelected } = useContext(ScreenContext);
  return (
    <div
      className="flex w-[250px] h-[150px] md:w-[300px] md:h-[180px] lg:w-[350px]  lg:h-[259px] relative shrink-0 rounded-xl overflow-hidden text-black "
      onClick={() => setSelected(movieId)}
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
      <div className="flex flex-col absolute bottom-0 w-[100%] p-2 md:p-5  bg-favorite backdrop-blur-[10px] h-[30%] ">
        <h2 className="text-[12px] lg:text-[18px]">{title}</h2>
        <p className="text-[10px] lg:text-[14px]">{description}</p>
      </div>
    </div>
  );
};
