import React from "react";
import left_icon from "../assets/Left icon.svg";
import cross_icon from "../assets/cross_icon.svg";
import sad_image from "../assets/sad_image.png";
import { Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import bg_image from "../assets/bg_image.png";
import check_icon from "../assets/check_icon.svg";
import { useNavigate } from "react-router-dom";
const RequestRefundEndSubscription = ({
  text = "Request Refund",
  buttonText = "Request refund",
}) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(-180deg, rgba(233, 230, 247, 1) 15%, rgba(209, 214, 242, 1) 55%, rgba(191, 234, 244, 1) 100%)",
        }}
        className="px-3 pb-2 flex-1 flex-col justify-between items-center h-[45%]"
      >
        <div className="flex justify-start  items-center  -ml-4 h-[20%]">
          <button
            onClick={() => {
              navigate("/manage-subscription");
            }}
           
          >
            <img
              src={left_icon}
              className="w-[54px] h-[54px] "
              alt="cross_icon"
            />
          </button>
          <span
            style={{
              fontFamily: "Urbanist",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "19.2px",
              letterSpacing: "-0.008em",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#252E49",
            }}
          >
            {/* Request Refund */}
            {text}
          </span>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center h-[80%]">
          <img
            src={sad_image}
            alt="sad_image"
            className="w-[100px] h-[100px] -mt-4"
          />
          <div className="flex flex-col gap-3 w-[100%] justify-center items-center">
            <Typography
              sx={{
                color: "#252E49",
                fontFamily: "Urbanist",
                fontSize: "24px",
                fontWeight: 800,
                width: "70%",
                lineHeight: "33.6px",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              We’re sorry to hear you want to go
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#FFFFFF] justify-between  flex-col w-[100%] min-h-[378px] rounded-t-[24px] pt-5 px-[24px] gap-3 -mt-4">
        <div className="flex-1 flex-col">
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "19.6px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#3D4966",
            }}
          >
            Your data will be permanently deleted instantly and you will miss
            out on these premium features:
          </Typography>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="flex justify-between mt-2 mb-2">
            <div>
              <Typography
                sx={{
                  color: "#252E49",
                  fontFamily: "Urbanist",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "16.8px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                What you get
              </Typography>
              <div className="flex flex-col gap-3 mt-4">
                <Typography
                  sx={{
                    color: "#252E49",
                    fontFamily: "Urbanist",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "16.8px",
                    textAlign: "left",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  Personalised nutrition guidance
                </Typography>
                <Typography
                  sx={{
                    color: "#252E49",
                    fontFamily: "Urbanist",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "16.8px",
                    textAlign: "left",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  Easy, effective exercises
                </Typography>
                <Typography
                  sx={{
                    color: "#252E49",
                    fontFamily: "Urbanist",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "16.8px",
                    textAlign: "left",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  Glucose monitoring calendar
                </Typography>
                <Typography
                  sx={{
                    color: "#252E49",
                    fontFamily: "Urbanist",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "16.8px",
                    textAlign: "left",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  Interactive diabetes education
                </Typography>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <Typography
                sx={{
                  color: "#252E49",
                  fontFamily: "Urbanist",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "16.8px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Free
              </Typography>
              <div className="flex flex-col gap-[8px] mt-4">
                <img src={cross_icon} alt="alt" className="w-[20px]" />
                <img src={cross_icon} alt="alt" className="w-[20px]" />
                <img src={cross_icon} alt="alt" className="w-[20px]" />
                <img src={cross_icon} alt="alt" className="w-[20px]" />
              </div>
            </div>
            <div className="bg-[#EDF5FF] rounded-[8px]  px-[12px] -mt-1">
              <Typography
                sx={{
                  color: "#2563EB",
                  fontFamily: "Urbanist",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "16.8px",
                  textAlign: "left",
                  marginTop: "5px",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Premium
              </Typography>
              <div className="flex flex-col gap-[8px] mt-4 justify-center  items-center">
                <img src={check_icon} alt="check" className="w-[20px]" />
                <img src={check_icon} alt="check" className="w-[20px]" />
                <img src={check_icon} alt="check" className="w-[20px]" />
                <img src={check_icon} alt="check" className="w-[20px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-3 w-[100%]">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="w-[100%] h-[100%] flex flex-col justify-center items-center"
            >
              <CustomButton
                text={"Keep Premium"}
                className={" text-[#FFFFFF] text-[12px] "}
              />
            </button>
            <button
              onClick={() => {
                if (buttonText == "Cancel subscription") {
                  navigate(
                    "/manage-subscription/cancel-subscription/cancel-feedback"
                  );
                } else {
                  navigate(
                    "/manage-subscription/request-refund/refund-feedback"
                  );
                }
              }}
              className="w-[100%] h-[100%] flex flex-col justify-center items-center"
            >
              <CustomButton
                text={buttonText}
                bgColor="#FFFFFF"
                className={" text-[#DA1E2E] text-[12px] "}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestRefundEndSubscription;
