import { FC } from "react";

const PrimaryButton: FC<ButtonType> = ({ text, onClick }) => {
  return (
    <a
      onClick={onClick}
      className=" cursor-pointer inline-flex text-[15px] p-[8px] 
      lg:py-[17px] lg:px-[24px] sm:text-[18px] sm:p-[10px]  
      items-start gap-[12px] bg-[#6100c2] rounded-[14px] shrink-0"
    >
      {text}
    </a>
  );
};

export default PrimaryButton;
