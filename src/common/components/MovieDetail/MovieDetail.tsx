import { FC, useContext } from "react";
import PrimaryButton from "../../../common/components/Button/PrimaryButton";
import { FavoriteButton } from "../../../common/components/Button/FavoriteButton";
import { MovieContext } from "../../../common/context/MovieContext/MovieContext";
import { ScreenContext } from "../../../Screens/context/ScreenContext";

export const MovieDetail: FC = () => {
  const { selected } = useContext(ScreenContext);
  const { state, setFavoriteMovie } = useContext(MovieContext);
  const { title, description, image, isFavorite } = state[selected];
  return (
    <div className=" inline-flex flex-col  gap-5 justify-center items-center shrink-0 text-white sm:flex-row">
      <div
        className="
        object-cover
      w-[300px]  
      lg:w-[450px] 
      rounded-[14px] overflow-hidden
        "
      >
        <img src={image} className="w-[100%]" />
      </div>
      <div className="flex flex-col items-start justify-start">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="flex my-[10px] gap-[10px] items-center">
          <PrimaryButton text="Watch now" onClick={() => {}} />
          <FavoriteButton
            isFavorite={isFavorite}
            onClick={() => setFavoriteMovie(title)}
          />
        </div>
      </div>
    </div>
  );
};
