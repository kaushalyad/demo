import { Typography } from "@mui/material";
import React from "react";

const NewCard = ({ imgSrc, heading, description }) => {
  return (
    <div className="w-[280px] h-[206px] p-[16px] gap-[var(--Globals10)] rounded-[16px] bg-[#F2F5F9] flex flex-col justify-between">
      <img className="w-[52px] h-[52px]" src={imgSrc} alt="icon" />
      <div className="text-sm font-medium text-[var(--c1)] flex flex-col gap-[4px]">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "16px",
            color: "#252E49",
            fontWeight: 700,
            lineHeight: "19.2px",
            letterSpacing: "-0.004em",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            color: "#252E49",
            lineHeight: "16.8px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default NewCard;
