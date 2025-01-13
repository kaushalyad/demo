import React from "react";
import bg_image from "../assets/mobile_background.png";
import bg_color_image from "../assets/Frame 26080462.png";
import topnav from "../assets/logomark-white.svg";
import gpay_icon from "../assets/gpay_icon.png";
import app_store_icon from "../assets/app_store_icon.png";
import { Typography } from "@mui/material";
import PaymentSummary from "./PaymentSummary";
import CustomButton from "./CustomButton";
import { useParams, useLocation } from "react-router-dom";

const PostPayment = ({ upiId = "8797196867@hdfcbank" }) => {
  const location = useLocation();
  const { planId, paidAmount, planDuration } = location.state || {};
  console.log(location);
  return (
    <div className="bg-[#FFFFFF] w-[100%]">
      <div
        style={{ backgroundImage: `url(${bg_color_image})` }}
        className="bg-[#FFFFFF] w-[100vw] min-h-[70vh] bg-cover bg-center flex flex-col items-center px-5"
      >
        <div className="flex items-center gap-1 my-[50px]">
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "24px",
              fontWeight: 500,
              color: "#252E49",
              lineHeight: "28.8px",
              minWidth: "125px",
              letterSpacing: "-0.012em",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Welcome to
          </Typography>

          <img src={topnav} className=" items-start " alt="Tap Health Logo" />
        </div>
        <div
          style={{ backgroundImage: `url(${bg_image})` }}
          className="w-[100%] min-h-[380px] bg-cover bg-center "
        ></div>
      </div>
      <div className="px-10">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "26px",
            fontWeight: 800,
            marginTop: "10px",
            lineHeight: "31.2px",
            letterSpacing: "-0.012em",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#252E49",
          }}
        >
          Download Tap Health to get started
        </Typography>
        <div className="flex justify-center items-center gap-5 py-5">
          <img src={gpay_icon} className="w-[94px]" />
          <img src={app_store_icon} className="w-[94px]" />
        </div>
      </div>
      <div className="w-[100%]">
        <PaymentSummary
          planDuration={planDuration}
          paidAmount={paidAmount}
          upiId={upiId}
        />
      </div>
      <div className="w-[100%] py-5 flex justify-center">
        <CustomButton
          text="Download Tap Health"
          link="https://play.google.com/store/apps/details?id=com.taphealthapp"
        />
      </div>
    </div>
  );
};

export default PostPayment;
