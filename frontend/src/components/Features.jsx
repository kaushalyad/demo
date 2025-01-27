import { Typography } from "@mui/material";
import React from "react";
import info from "../assets/10 information.svg";
import tick from "../assets/02  check.svg";
import information_icon from "../assets/information_icon.svg";
export const Features = ({ featuresHeading = "Features" }) => {
  const features = [
    { title: "Custom Diet Plan", included: true },
    { title: "Meal Sequencing", included: true },
    { title: "Diabetic Specific Exercise Video Library", included: true },
    { title: "24x7 AI Coach", included: true },
    { title: "Medicine Reminder", included: true },
    { title: "Scan to Share Report", included: true },
    { title: "Exciting Rewards for Adherence", included: true },
  ];

  return (
    <div className="mb-6 mt-16">
      <div className="text-left px-6">
        <Typography
          sx={{
            color: "#252E49",
            fontFamily: "Urbanist",
            fontWeight: 800,
            fontSize: "16px",
            lineHeight: "19.2px",
          }}
        >
          {featuresHeading}
        </Typography>
      </div>

      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-row justify-between items-center p-4 px-6"
        >
          <div className="flex items-center space-x-1 col-span-1 w-9/10">
            <Typography
              sx={{
                color: "#252E49",
                fontFamily: "Urbanist",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "16.8px",
                textAlign: "left",
              }}
            >
              {feature.title}
            </Typography>
            <img src={information_icon} />
          </div>
          {feature.included && (
            <img
              src={tick}
              alt="tick icon"
              className="w-5 h-5 object-contain "
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Features;
