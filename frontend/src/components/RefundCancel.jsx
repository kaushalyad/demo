import React from "react";
import cross_icon from "../assets/cross_icon.svg";
import sad_image from "../assets/sad_image.png";
import { Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
const RefundCancel = ({ text, checker }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-[#FFFFFF] justify-between pb-4 pt-2 h-[100vh] w-[100vw] px-3 ">
      <div
        className="flex justify-end"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={cross_icon} alt="cross_icon" />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        <img src={sad_image} alt="sad_image" className="w-[130px] h-[130px]" />
        <div className="flex flex-col gap-3">
          <Typography
            sx={{
              color: "#252E49",
              fontFamily: "Urbanist",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "28px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            We’re sorry to see you go
          </Typography>
          <div
            style={{
              fontFamily: "Urbanist",
              fontSize: "16px",
              fontWeight: 500,
              width: "100%",
              lineHeight: "25px",
              letterSpacing: "-0.008em",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#252E49",
            }}
            className="w-[100%] flex justify-center items-center"
          >
            <div
              className="w-[90%]  text-center"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            if (checker === "cancelled") {
              navigate("/manage-subscription/re-subscribe");
            } else {
              navigate("/");
            }
          }}
          className="w-[100%] h-[100%] flex justify-center items-center"
        >
          <CustomButton text={"Okay"} className=" text-[#FFFFFF]" />
        </button>
      </div>
    </div>
  );
};

export default RefundCancel;
