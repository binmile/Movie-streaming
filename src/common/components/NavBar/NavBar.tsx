import { FC, useContext } from "react";
import {
  Avatar,
  BellIcon,
  HamburgerIcon,
  SearchIcon,
} from "../../../assets/NavBar";
import { NavigationContext } from "../../context/NavigationContext/NavigationContext";

const NavBar: FC = () => {
  const { setVisibility } = useContext(NavigationContext);
  return (
    <div className="z-10 top-0 w-full grid grid-flow-col grid-rows-1 px-[15px] text-white  p-[20px]  lg:pl-[50px]">
      <img
        src={HamburgerIcon}
        className="w-[30px] h-[30px] md:hidden"
        onClick={() => {
          setVisibility(true);
        }}
      />
      <div className="hidden lg:flex  text-[16px] font-[500] gap-[32px]">
        <span>Movies</span>
        <span>Series</span>
        <span>Documentaries</span>
      </div>
      <div className="flex gap-[32px]  justify-self-end self-end ">
        <img src={SearchIcon} className="w-[24px] h-[24px]" />
        <img src={BellIcon} className="w-[24px] h-[24px]" />
        <div className="flex gap-[8px]">
          <img
            src={Avatar}
            className="w-[32px] h-[32px]  shrink-0 rounded-full"
          />
          <span className="hidden lg:inline">Tetiana</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
