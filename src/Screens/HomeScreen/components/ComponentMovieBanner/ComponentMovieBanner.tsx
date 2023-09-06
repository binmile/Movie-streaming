import { useContext } from 'react';



import { MovieContext } from '../../../../common/MovieProvider';
import { ScreenContext } from '../../../../common/ScreenContextProvider';
import { ComponentButton } from '../../../../components/Button/ComponentButton';

export const ComponentMovieBanner = () => {
  const { selected } = useContext(ScreenContext);
  const { state, setFavoriteMovie } = useContext(MovieContext);
  const { title, description, image, isFavorite } = state[selected];
  return (
    <div className="flex relative w-[100%] overflow-hidden text-white bg-black  shrink-0 ">
      <img
        src={image}
        className="object-cover object-top w-[100%] h-[200px] sm:h-[225px]  md:h-[250px] lg:h-[300px] shrink-0 opacity-[0.6]"
      />
      <div className="flex flex-col z-10 justify-end m-[20px] absolute bottom-0 left-0 ">
        <h1 className="text-[20px] lg:text-[48px] font-bold">{title}</h1>
        <p className=" text-[12px] lg:text-[14px] ">{description}</p>

        <div className="flex my-[10px] gap-[10px] items-center">
          <ComponentButton text="Watch now" onClick={() => {}} />
          <ComponentButton
            isIconButton={true}
            isFavorite={isFavorite}
            onClick={() => setFavoriteMovie(title)}
          />
        </div>
      </div>
    </div>
  );
};
