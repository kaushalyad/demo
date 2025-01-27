import React from "react";
import CustomButton from "./CustomButton";
import success_icon from "../assets/success_icon.png";
import left_arrow_icon from "../assets/Left icon.svg";
import { Typography } from "@mui/material";
const SuccessfulCancellation = () => {
  return (
    <div className="bg-[#FFFFFF] w-[100%]  h-[100vh]">
      <img src={left_arrow_icon} />
      <div className="bg-[#FFFFFF]  h-[90%] w-[100vw] flex flex-col justify-between items-center py-[32px] px-5">
        <div>
          <img src={success_icon} className="w-[155px] h-[155px]" />
        </div>
        <div>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "28px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#252E49",
            }}
          >
            Your subscription was successfully cancelled
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              marginTop: "16px",
              lineHeight: "25px",
              letterSpacing: "-0.008em",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#3D4966",
            }}
          >
            You will receive your refund of{" "}
            <span
              style={{
                fontFamily: "Urbanist",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "25px",
                letterSpacing: "-0.008em",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              ₹2388{" "}
            </span>{" "}
            in
            <span
              style={{
                fontFamily: "Urbanist",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "25px",
                letterSpacing: "-0.008em",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              {" "}
              24-48 hours.
            </span>{" "}
            You will now only have access to the free versio of Tap Health.
          </Typography>
        </div>
        <div className="w-[100%] flex justify-center ">
          <CustomButton text="Continue" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default SuccessfulCancellation;
