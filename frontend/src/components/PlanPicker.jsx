import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PlanPicker = ({
  month,
  description,
  actualPrice,
  discountedPrice,
  isSelected,
  id,
  offerName,
  onClick,
  plans,
  selectedIndex,
}) => {
  const typographyStyles = {
    fontFamily: "Urbanist, sans-serif",
    letterSpacing: "-0.003em",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
  };

  
  return (
    <div
      className={`bg-white  justify-between rounded-[12px]  flex flex-col text-black cursor-pointer ${
        isSelected ? "opacity-100" : "opacity-40"
      } transition-opacity duration-300`}
      style={{
        borderColor: isSelected ? "#2563EB" : "#DCE1E8",
        borderWidth: isSelected ? "2px" : "1px",
        overflow: "hidden",
      }}
      onClick={onClick}
    >
      {offerName && (
        <div className="bg-[#2563EB] text-white py-2 px-3 border-[#2563EB]  border-r-[1px] border-b-[1px]">
          <Typography
            sx={{
              ...typographyStyles,
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "16.8px",
              textAlign: "center",
            }}
          >
            {offerName}
          </Typography>
        </div>
      )}
      <div className="flex justify-between py-4 px-3 gap-4">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            className="w-5 h-5 border-2 border-[#2563EB] rounded-full"
            checked={isSelected}
            onChange={onClick}
            name="plan"
          />
          <div>
            <Typography
              sx={{
                ...typographyStyles,
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "19.2px",
                textAlign: "left",
              }}
            >
              {month}
              <span className="ml-2">months plan</span>
            </Typography>
            <Typography
              sx={{
                ...typographyStyles,
                fontSize: "12px",
                textAlign: "left",
              }}
            >
              {description}
            </Typography>
          </div>
        </div>

        <div className="flex flex-col items-end">
          {actualPrice === discountedPrice ? (
            <Typography
              sx={{
                ...typographyStyles,
                fontSize: "20px",
                fontWeight: 800,
                lineHeight: "24px",
                textAlign: "right",
              }}
            >
              &#8377;{discountedPrice}
            </Typography>
          ) : (
            <div>
              <Typography
                sx={{
                  ...typographyStyles,
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "14.4px",
                  textAlign: "left",
                  textDecorationLine: "line-through",
                  color: "#818BA0",
                }}
              >
                &#8377;{actualPrice}
              </Typography>
              <Typography
                sx={{
                  ...typographyStyles,
                  fontSize: "28px",
                  fontWeight: 800,
                  lineHeight: "33.6px",
                  textAlign: "right",
                }}
              >
                &#8377;{discountedPrice}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanPicker;
