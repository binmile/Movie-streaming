import React from "react";
import { NavLink } from "react-router-dom";

export const DrawerItem: React.FC<DrawerItemType> = ({
  logo,
  text,
  path,
  isLogo = false,
}) => {
  return (
    <NavLink
      to={path}
      className={`flex gap-[5px] text-white ${
        isLogo ? "text-[22px] font-bold " : "16px font-normal"
      }`}
    >
      <img src={logo} alt="" />
      <span>{text}</span>
    </NavLink>
  );
};
