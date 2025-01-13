import React from "react";
import { Typography } from "@mui/material";
import Right_icon from "../assets/Right_icon.svg";

const BuyButton = ({ month = 12, price = 1, planId, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="flex justify-around items-center rounded-[16px] bg-[#2563EB] w-[92%] py-[12px] hover:bg-[#1E4DB7] transition duration-200 ease-in-out"
      onClick={handleClick}
      aria-label={`Proceed to pay for ${month} months plan at ₹${price}`}
    >
      <div className="flex flex-col text-left">
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "21.6px",
            color: "#FFFFFF",
          }}
        >
          ₹{price}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontWeight: 500,
            fontSize: "14px",
            color: "#D1D5DB",
          }}
        >
          {month} months plan
        </Typography>
      </div>
      <div className="flex items-center gap-2">
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontWeight: 700,
            fontSize: "16px",
            color: "#FFFFFF",
          }}
        >
          Buy plan
        </Typography>
        <img
          src={Right_icon}
          alt="Right Arrow Icon"
          className="h-[24px] w-[24px]"
        />
      </div>
    </button>
  );
};

export default BuyButton;
