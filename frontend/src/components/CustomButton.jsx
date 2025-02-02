import React from "react";

const CustomButton = ({
  bgColor = "#2563EB",
  text = "Proceed To Buy",
  link,
  onClick,
  className,
  isVisible = true,
}) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`w-[95%] justify-center items-center px-[24px] py-[16px] text-center rounded-[99px] `}
    >
      <a href={link} alt="link">
        <button
          className={`w-[100%] font-urbanist  text-[18px] font-bold leading-[21.6px] tracking-[-0.004em] text-center ${className}`}
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
          onClick={handleClick}
          disabled={!isVisible}
        >
          {text}
        </button>
      </a>
    </div>
  );
};

export default CustomButton;
