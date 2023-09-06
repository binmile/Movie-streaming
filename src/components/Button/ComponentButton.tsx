import { FC } from 'react';
import { ComponentFavoriteButton } from '../../assets/components/ComponentFavoriteButton/ComponentFavoriteButton';

export const ComponentButton:FC<ButtonType> = ({
    onClick,
    text,
    isFavorite=false,
    isIconButton
}) => {
    const customStyle = isIconButton ?  `cursor-pointer inline-flex w-[35px]  p-[8px] bg-favorite  
    h-[35px] rounded-md 
    justify-center items-center 
    md:w-[50px] md:h-[50px] 
    md:p-[15px] md:rounded-[14px] 
    md:gap-[10px] backdrop-blur-[10px]
    lg:w-[60px] lg:h-[60px] shrink-0`:`cursor-pointer inline-flex text-[15px] p-[8px] 
    lg:py-[17px] lg:px-[24px] sm:text-[18px] sm:p-[10px]  
    items-start gap-[12px] bg-[#6100c2] rounded-[14px] shrink-0`;

  return (
    <a onClick={onClick} className={customStyle}>
       {!isIconButton && text}
       {isIconButton && <ComponentFavoriteButton isFavorite = {isFavorite} /> }
    </a>
  );
};
