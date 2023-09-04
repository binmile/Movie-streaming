import React, { useContext } from "react";
import { DrawerItem } from "./DrawerItem";
import {
  Calender,
  Coffee,
  Community,
  Favorite,
  Home,
  Logout,
  Settings,
  Social,
  Trending,
} from "../../../assets/Drawer";
import { NavigationContext } from "../../context";

export const Drawer: React.FC = () => {
  const { visible, setVisibility } = useContext(NavigationContext);
  return (
    <div
      className={` ${visible ? "visible " : "invisible "} 
       md:visible absolute z-50  grid grid-cols-1 items-center  bg-[#21201E] 
        justify-start h-[100%] gap-[50px] w-[100%] 
        md:static md:w-[275px] p-[30px] overflow-y-scroll no-scrollbar  shadow-drawerShadow`}
    >
      <div className="flex">
        <DrawerItem path="/" logo={Coffee} text={"WATCH"} isLogo={true} />
      </div>
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[30px]">
          <DrawerItem logo={Home} text={"Home"} path="/" />
          <DrawerItem logo={Favorite} text={"Favorites"} path={"favorite"} />
          <DrawerItem logo={Trending} text={"Trending"} path={"trending"} />
          <DrawerItem logo={Calender} text={"Coming soon"} path={"calender"} />
        </div>

        <div className="flex flex-col gap-[30px]">
          <DrawerItem logo={Community} text={"Community"} path="community" />
          <DrawerItem logo={Social} text={"Social"} path="social" />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] text-white lg:hidden ">
        <span>Movies</span>
        <span>Series</span>
        <span>Documentaries</span>
      </div>
      <div className="flex flex-col gap-[30px] self-end">
        <DrawerItem logo={Settings} text={"Settings"} path="settings" />
        <button className="flex gap-[5px] text-white">
          <img src={Logout} />
          <span>logout</span>
        </button>
      </div>

      <div className="flex md:hidden text-white font-bold justify-center">
        <button onClick={() => setVisibility(false)}>close</button>
      </div>
    </div>
  );
};
