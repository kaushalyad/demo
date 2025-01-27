import { Typography } from "@mui/material";
import React from "react";
import linkedin_icon from "../assets/linkedin_icon.svg";
const DoctorCard = ({
  imageURL,
  doctorName,
  experience,
  linkedInURL = "https://www.linkedin.com/in/dr-yasaswini-vajupeyajula-a9111a238/",
  aboutDr,
  expertiseArea,
  expertiseAreaCare,
  className,
}) => {
  return (
    <div className={`bg-[#FFFFFF]} w-[100%]`}>
      <div
        style={{
          background: "linear-gradient(180deg, #DCE1E8 0%, #9EA7B8 100%)",
          borderRadius: "24px",
        }}
        className="flex flex-col justify-end xs:w-[284px] xs:h-[360px] sm:w-[380px] sm:h-[420px] md:w-[460px] md:h-[520px] lg:w-[520px] lg:h-[620px]"
      >
        <img
          src={imageURL}
          alt={doctorName}
          className=" object-cover rounded-[24px]"
        />
        <div className="flex m-w-[170px] min-w-[115px] flex-col absolute bg-[#FFFFFF] p-[10px] rounded-[16px] gap-[4px] ml-20 mb-4">
          <Typography
            sx={{
              color: "#252E49",
              fontFamily: "Urbanist, sans-serif",
              fontSize: "19px",
              fontWeight: 700,
              lineHeight: "20.9px",
              letterSpacing: "-0.004em",
              textAlign: "left",
              width: "100%",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            {experience}
          </Typography>
          <Typography
            sx={{
              color: "#5D6A85",
              fontFamily: "Urbanist, sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              lineHeight: "14.4px",
              letterSpacing: "-0.004em",
              textAlign: "left",
              width: "100%",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            {expertiseAreaCare}
          </Typography>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-2 w-[264px]">
        <div>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: { xs: "20px", sm: "24px" },
              fontWeight: 700,
              lineHeight: "28.8px",
              letterSpacing: "-0.004em",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#252E49",
            }}
          >
            {doctorName}
          </Typography>
        </div>
        <div className="w-[100%]">
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 500,
              lineHeight: { xs: "18px", sm: "19.2px" },
              letterSpacing: "-0.004em",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#252E49",
            }}
          >
            {expertiseArea}
          </Typography>
        </div>
        <a href={linkedInURL}>
          <div className="flex w-[96px] h-[33px] justify-center items-center gap-2 bg-[#F2F5F9] py-[8px] px-[12px] rounded-[99px]">
            <img src={linkedin_icon} className="w-[16px] h-[16px]" />
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "16.8px",
                letterSpacing: "-0.004em",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              LinkedIn
            </Typography>
          </div>
        </a>
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "19.6px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#5D6A85",
          }}
        >
          {aboutDr}
        </Typography>
      </div>
    </div>
  );
};

export default DoctorCard;
