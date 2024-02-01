import React from 'react'
import { AiOutlineRight } from "react-icons/ai";

type ButtonProps = {
  children: React.ReactNode;
  withIcon?: boolean | false;
  outlined?: boolean;
  hover?: boolean | true;
  className?: string;
}

export const Button = ({
  children,
  withIcon,
  outlined,
  hover,
  className,
}: ButtonProps) => {
  return (
    <button
      className={` ${
        outlined ? " text-black bg-white" : "text-white"
      } py-2 px-4 rounded-full flex flex-row items-center bg-[#3671E9] ${className}`}
    >
      <span className={`${hover && "hover:opacity-100"} `}>{children}</span>
      {withIcon && (
        <span className={"bg-white p-1 ml-4 rounded-full text-[#3671E9] "}>
          <AiOutlineRight />
        </span>
      )}
    </button>
  );
};


