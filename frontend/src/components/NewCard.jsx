import { Typography } from "@mui/material";
import React from "react";

const NewCard = ({ imgSrc, heading, description }) => {
  return (
    <div className="xs:w-[280px] xs:h-[206px] sm:w-[360px] sm:h-[280px] p-[16px] gap-[4px] rounded-[16px] bg-[#F2F5F9] flex flex-col justify-between">
      <img className="xs:w-[52px] xs:h-[52px] sm:w-[65px] sm:h-[65px]" src={imgSrc} alt="icon" />
      <div className="text-sm font-medium  flex flex-col gap-[4px]">
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
