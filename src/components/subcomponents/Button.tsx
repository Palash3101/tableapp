import React from 'react';

export interface ButtonProps {
  text: string;
  icon: string;
  border?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, border, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-[4px] px-[12px] py-[8px] rounded-[4px] ${
        border ? 'border-[1px] border-[#EEEEEE]' : ''
      }`}
    >
      <img src={icon} alt={`${text} icon`} className="w-[16px] h-[16px]" />
      <span className="text-sm font-[400] text-[#545454]">{text}</span>
    </button>
  );
};

export default Button;
