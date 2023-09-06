import React, { useContext } from 'react';
import { ComponentDrawerItem } from './components/ComponentDrawerItem/ComponentDrawerItem';
import { NavigationContext } from '../../common/NavigationProvider';
import { Images } from '../../assets';

export const ComponentDrawer: React.FC = () => {
  const { visible, setVisibility } = useContext(NavigationContext);
  return (
    <div
      className={` ${visible ? 'visible ' : 'invisible '} 
       md:visible absolute z-50  grid grid-cols-1 items-center  bg-[#21201E] 
        justify-start h-[100%] gap-[50px] w-[100%] 
        md:static md:w-[275px] p-[30px] overflow-y-scroll no-scrollbar  shadow-drawerShadow`}
    >
      <div className="flex">
        <ComponentDrawerItem
          path="/"
          logo={Images.Coffee}
          text={'WATCH'}
          isLogo={true}
        />
      </div>
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[30px]">
          <ComponentDrawerItem logo={Images.Home} text={'Home'} path="/" />
          <ComponentDrawerItem
            logo={Images.Favorite}
            text={'Favorites'}
            path={'favorite'}
          />
          <ComponentDrawerItem
            logo={Images.Trending}
            text={'Trending'}
            path={'trending'}
          />
          <ComponentDrawerItem
            logo={Images.Calender}
            text={'Coming soon'}
            path={'calender'}
          />
        </div>

        <div className="flex flex-col gap-[30px]">
          <ComponentDrawerItem
            logo={Images.Community}
            text={'Community'}
            path="community"
          />
          <ComponentDrawerItem
            logo={Images.Social}
            text={'Social'}
            path="social"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] text-white lg:hidden ">
        <span>Movies</span>
        <span>Series</span>
        <span>Documentaries</span>
      </div>
      <div className="flex flex-col gap-[30px] self-end">
        <ComponentDrawerItem
          logo={Images.Settings}
          text={'Settings'}
          path="settings"
        />
        <button className="flex gap-[5px] text-white">
          <img src={Images.Logout} />
          <span>logout</span>
        </button>
      </div>

      <div className="flex md:hidden text-white font-bold justify-center">
        <button onClick={() => setVisibility(false)}>close</button>
      </div>
    </div>
  );
};
