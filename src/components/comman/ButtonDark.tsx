import React from "react";

interface IButton {
  buttonText: any;
  handleClick: () => void;
  textStyle?: any;
  className?: any;
  variant?: "light" | "dark";
}

export default function ButtonDark({
  buttonText,
  handleClick,
  textStyle,
  className,
  variant = "dark",
}: IButton) {
  const handleButtonClick = () => {
    handleClick();
  };

  return (
    <button
      type="submit"
      className={`  bg-gray-700 font-lato  w-28 py-1 px-4 rounded-[2px] text-white

      }   `}
      onClick={handleButtonClick}
    >
      <p
        className={`font-lato text-white flex items-center whitespace-nowrap justify-center text-center capitalize  `}
      >
        {buttonText}
      </p>
    </button>
  );
}
