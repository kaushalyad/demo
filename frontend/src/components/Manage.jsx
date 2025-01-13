import React from "react";
import left_icon from "../assets/Left icon.svg";
import background_image from "../assets/Frame 26080462.png"; // Assuming this is your image path
import { Typography } from "@mui/material";
import HeaderContent from "./HeaderContent";
import right_arrow_icon from "../assets/right_arrow_icon.svg";
const ManageSubscription = ({
  leftDays = "12 months left",
  duesAmount = "2388",
  date = "04 Jan 2025",
}) => {
  return (
    <div className="flex  flex-col bg-[#F2F5F9] w-[100vw] h-[100vh]">
      {/* Set background image */}
      <div
        className="w-[100vw] h-[400px] py-4"
        style={{
          backgroundImage: `url(${background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex px-[4px] items-center">
          <img className="w-[44px] h-[44px]" src={left_icon} alt="back_icon" />
          <Typography
            color="#252E49"
            sx={{
              fontFamily: "Urbanist",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "19.2px",
              letterSpacing: "-0.008em",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Manage Subscription
          </Typography>
        </div>
        <div className="mt-[15%]">
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontSize: "30px",
              fontWeight: 700,
              lineHeight: "36px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#252E49",
            }}
          >
            {leftDays}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "16.8px",
              textAlign: "center",
              marginTop: "15px",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#252E49",
            }}
          >
            Your next bill is <span className="font-bold">₹{duesAmount}</span>{" "}
            on <span className="font-bold">{date}</span>
          </Typography>
        </div>
      </div>
      <div className="flex flex-col gap-0 px-[8px] items-center justify-center w-[100%]  absolute top-[35%]">
        <HeaderContent
          content={"Renew Subscription"}
          rightArrowIcon={right_arrow_icon}
          backgroundColor="#FFFFFF"
          className={"rounded-t-[12px]"}
        />
        <HeaderContent
          content={"End Subscription"}
          rightArrowIcon={right_arrow_icon}
          backgroundColor={"#FFFFFF"}
          className={"rounded-b-[12px]"}
        />
        <HeaderContent
          content={"Request Refund"}
          rightArrowIcon={right_arrow_icon}
          remainDiv={"13 days left"}
          className={"mt-2"}
          backgroundColor={"#F2F5F9"}
        />
      </div>
    </div>
  );
};

export default ManageSubscription;
