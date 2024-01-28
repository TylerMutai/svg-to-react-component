import React, { FC } from "react";

export interface CustomButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "onClick"
  > {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  onClick,
  className = "",
  ...restProps
}) => {
  return (
    <button
      type="button"
      className={`${className} whitespace-nowrap flex flex-row justify-center items-center px-5 gap-2 rounded-[10px] h-[36px]
      transition-transform ease-in-out duration-150
      bg-primary-color-1000 text-[16px] text-white
      hover:shadow-lg
      hover:scale-110
      `}
      {...restProps}
    >
      {children}
    </button>
  );
};
export default CustomButton;
