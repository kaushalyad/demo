import React from "react";
import result from "../../assets/Results.png";
import video from "../../assets/video.mp4";
import { Typography } from "@mui/material";
import FoodCard from "../card";
import FeatureCaraousel from "../FeatureCaraousel";

function AiSection() {
  return (
    <div className="bg-[#FFFFFF] py-6 mb-6">
      <div className="px-4">
        <video
          width="100%"
          className="rounded-2xl"
          controls
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" text-center mt-8">
        <div className="mx-12 ">
          <Typography
            sx={{
              color: "#252E49",
              fontFamily: "Urbanist",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "38.4px",
            }}
          >
            Smart Diabetes Control
          </Typography>
        </div>

        <div>
          <Typography
            sx={{
              color: "#252E49",
              fontFamily: "Urbanist",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            in just 3 easy steps
          </Typography>
        </div>
      </div>

      <div className="px-6 py-12">
        <img src={result} className="w-full h-full" alt="" />
      </div>

      <div className=" w-4/5 flex flex-col gap-4 items-center mx-auto">
       
        <Typography
          sx={{
            color: "#252E49",
            fontFamily: "Urbanist",
            fontWeight: 700,
            fontSize: "32px",
            textAlign: "center",
            lineHeight: "38.4px",
          }}
        >
          Wondering how it’s different?
        </Typography>
       

        <Typography
          sx={{
            color: "#252E49",
            fontFamily: "Urbanist",
            fontWeight: 500,
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          Effective, personalized care backed by science and expertise
        </Typography>
      </div>
      <div className="mt-14 mb-14 w-[100vw] flex-col justify-center items-center">
        <FeatureCaraousel />
      </div>
      <div>
        <FoodCard />
      </div>
    </div>
  );
}

export default AiSection;
