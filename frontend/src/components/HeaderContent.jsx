import { Typography } from "@mui/material";
import React from "react";
import right_arrow_icon from "../assets/right_arrow_icon.svg";
const HeaderContent = ({
  content,
  rightArrowIcon,
  leftIcon,
  backgroundColor = "#FFFFFF",
  remainDiv,
  className,
}) => {
  return (
    <div
      className={`px-[15px] w-[100%%]  py-[20px] flex justify-between items-center bg-[${backgroundColor}] ${className}`}
    >
      <div className=" rounded-[16px] flex justify-start items-center gap-2">
        {leftIcon && <img src={leftIcon} alt="left-icon" />}
        <Typography
          sx={{
            fontFamily: "Urbanist",
            color: "#252E49",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "16.8px",
            letterSpacing: "-0.003em",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          {content}
        </Typography>
      </div>
      <div className="flex  justify-center items-center">
        {remainDiv && (
          <div className="text-[#00349C] hover:bg-gray-200 bg-[#D0E4FF] font-bold py-[6px] px-4 rounded focus:outline-none focus:shadow-outline">
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: "14.4px",
                letterSpacing: "-0.003em",
                textAlign: "right",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              {remainDiv}
            </Typography>
          </div>
        )}
        {rightArrowIcon && (
          <img src={right_arrow_icon} className="w-[24px] h-[24px] ml-5" />
        )}
      </div>
    </div>
  );
};

export default HeaderContent;