import { FC, useContext } from 'react';
import { ScreenContext } from '../../Screens/context/ScreenContext';
import { ComponentFavoriteButton, ComponentPrimaryButton } from '../Button';
import { MovieContext } from '../../common/MovieProvider';


export const ComponentMovieDetail: FC = () => {
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
          <ComponentPrimaryButton text="Watch now" onClick={() => {}} />
          <ComponentFavoriteButton
            isFavorite={isFavorite}
            onClick={() => setFavoriteMovie(title)}
          />
        </div>
      </div>
    </div>
  );
};
