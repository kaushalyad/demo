import { Typography } from "@mui/material";
import React from "react";
import left_arrow_icon from "../assets/Left icon.svg";
import star_icon from "../assets/Billing.svg";
import HeaderContent from "./HeaderContent";
import menu_icon from "../assets/menu_icon.svg";
import right_arrow_icon from "../assets/right_arrow_icon.svg";
import A_icon from "../assets/A_icon.svg";
import contact_us_icon from "../assets/contact_us_icon.svg";
import notification_icon from "../assets/notification_icon.svg";
import sign_out_icon from "../assets/sign_out_icon.svg";
import delete_icon from "../assets/delete_icon.svg";
import edit_icon from "../assets/home_edit_icon.svg";
import topnav from "../assets/logomark-white-icon.svg";
import right_arrow_white_icon from "../assets/right_arrow_white_icon.svg";

const Profile = () => {
  return (
    <div className="flex bg-[#F2F5F9] h-[100vh] w-[100vw] pt-[5px] px-[16px]  items-center">
      <div className="h-[94%] w-[100%] flex flex-col  justify-between items-center">
        <div className="flex w-[100%]  justify-between">
          <div className="flex items-center">
            <img
              src={left_arrow_icon}
              className="w-[50px] h-[50px] -ml-[15px]"
            />
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "19.2px",
                letterSpacing: "-0.008em",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              My Account
            </Typography>
          </div>
          <div className="w-[71px] h-[36px] bg-[#DCE1E8] p-[8px] rounded-[99px] flex justify-between items-center">
            <img src={star_icon} />
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "19.2px",
                letterSpacing: "-0.008em",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              233
            </Typography>
          </div>
        </div>
        <div className="flex flex-col min-h-[92px] bg-[#FFFFFF] w-[100%] rounded-[12px]">
          <div className="flex justify-between border-[2px] border-[#2563EB] rounded-t-[12px] pr-2">
            <div className="flex">
              <div className="rounded-[99px] p-2 border-dotted border-[2px] border-[#d7deed]">
                <div className="rounded-[99px] p-2 border-dotted border-[2px] border-[#b6c2db]  ">
                  <div className=" bg-[#2563EB] opacity-100 rounded-[99px] w-[52px] h-[52px] items-center flex justify-center text-center">
                    <Typography
                      sx={{
                        fontFamily: "Urbanist, sans-serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "24px",
                        letterSpacing: "-0.003em",
                        textAlign: "center",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                      }}
                    >
                      F
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-left ml-2">
                <Typography
                  sx={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "21.6px",
                    letterSpacing: "-0.003em",
                    textAlign: "left",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "#252E49",
                  }}
                >
                  Fahim
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Urbanist, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "16.8px",
                    letterSpacing: "-0.003em",
                    textAlign: "left",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "#5D6A85",
                  }}
                >
                  +91 8797196867
                </Typography>
              </div>
            </div>
            <img src={edit_icon} />
          </div>
          <div className=" min-h-[45px]  rounded-b-[12px] flex justify-center">
            <div
              className=" rounded-b-[12px] flex justify-between w-[100%] bg-blend-multiply"
              style={{
                background:
                  "radial-gradient(97.26% 221.58% at 2.74% 50%, rgba(93, 106, 133, 0) 16.11%, #BEC5D2 100%), #2563EB",
              }}
            >
              <div className="flex items-center justify-center">
                <img
                  src={topnav}
                  className="w-[80px] ml-5"
                  alt="Tap Health Logo"
                />
                <p className="text-[22px] text-center ml-1 -mt-1">+</p>
              </div>
              <div className="flex justify-center items-center">
                <div className=" w-[124px] h-[26px] bg-[#2563EB] p-[6px] rounded-[8px]">
                  <Typography
                    sx={{
                      fontFamily: "Urbanist, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      lineHeight: "14.4px",
                      letterSpacing: "-0.003em",
                      textAlign: "center",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                      color: "#FFFFFF",
                    }}
                  >
                    Valid till 12 Oct 2025
                  </Typography>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={right_arrow_white_icon}
                    className="text-[#FFFFFF]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <HeaderContent
            content={"Preferences"}
            rightArrowIcon={right_arrow_icon}
            leftIcon={menu_icon}
            backgroundColor="#FFFFFF"
            remainDiv={""}
            className="  rounded-[12px]"
          />
        </div>
        <div className="w-[100%]">
          <HeaderContent
            content={"Languages"}
            rightArrowIcon={right_arrow_icon}
            leftIcon={A_icon}
            className="  rounded-t-[12px] w-[100%]"
          />
          <HeaderContent
            content={"Notifications"}
            rightArrowIcon={right_arrow_icon}
            leftIcon={notification_icon}
            className="  rounded-b-[12px] w-[100%]"
          />
        </div>
        <div className=" w-[100%]">
          <HeaderContent
            content={"Contact Us"}
            leftIcon={contact_us_icon}
            rightArrowIcon={right_arrow_icon}
            className=" rounded-t-[12px] w-[100%]"
          />
          <HeaderContent
            content={"Sign Out"}
            rightArrowIcon={right_arrow_icon}
            leftIcon={sign_out_icon}
            className="  rounded-b-[12px] w-[100%]"
          />
        </div>
        <div className="w-[100%]">
          <HeaderContent
            content={"Delete Account"}
            leftIcon={delete_icon}
            rightArrowIcon={right_arrow_icon}
            className="  rounded-[12px] w-[100%]"
            backgroundColor="#F2F5F9"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
