import React from "react";

const CustomButton = ({
  bgColor = "#2563EB",
  text = "Proceed To Buy",
  link,
  onClick,
  isVisible = true,
}) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`w-[90%] px-[24px] py-[16px] text-center rounded-[99px] ${
        isVisible ? "visible" : "invisible"
      }`}
    >
      <a href={link} alt="link">
        <button
          className={`w-[100%] font-urbanist text-[#FFFFFF] text-[18px] font-bold leading-[21.6px] tracking-[-0.004em] text-center`}
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
          onClick={handleClick}
        >
          {text}
        </button>
      </a>
    </div>
  );
};

export default CustomButton;
