import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationContext } from '../../../../common/NavigationProvider';

export const ComponentDrawerItem: React.FC<DrawerItemType> = ({
  logo,
  text,
  path,
  isLogo = false,
}) => {
  const { visible, setVisibility } = useContext(NavigationContext);
  return (
    <NavLink
      to={path}
      onClick={() => setVisibility(!visible)}
      className={`flex gap-[5px] text-white ${
        isLogo ? 'text-[22px] font-bold ' : '16px font-normal'
      }`}
    >
      <img src={logo} />
      <span>{text}</span>
    </NavLink>
  );
};
