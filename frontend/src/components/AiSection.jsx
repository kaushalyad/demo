import React from "react";
import stat8 from "../assets/stat8.png";
import stat9 from "../assets/stat9.png";
import stat10 from "../assets/stat10.png";
import stat11 from "../assets/stat11.png";
import result from "../assets/Results.png";
import video from "../assets/video.mp4";
import NeuralImg from "../assets/NeuralImg.gif";
import { Typography } from "@mui/material";
import gift from "../assets/Feature 9.png";
import f8 from "../assets/Feature 8.png";
import phn from "../assets/Feature 7.png";
import f5 from "../assets/Feature 5.png";
import FoodCard from "./card";
import FeatureCaraousel from "./FeatureCaraousel";

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
          {/* <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "Urbanist",
              fontWeight: 700,
              fontSize: "28px",
            }}
          >
            the power of AI
          </Typography> */}
        </div>
        {/* <div>
          <img src={NeuralImg} alt="" className="w-20 h-14" />
        </div> */}

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
        {/* <img src={stat8} alt="" />
        <img src={stat9} alt="" className="py-9" />
        <img src={stat10} alt="" className="" />
        <img src={stat11} alt="" className="py-9" /> */}
        <img src={result} className="w-full h-full" alt="" />
      </div>

      <div className=" w-4/5 items-center mx-auto">
        <Typography
          sx={{
            color: "#252E49",
            fontFamily: "Urbanist",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "38.4px",
          }}
        >
          Wondering how it’s different?
        </Typography>
        {/* <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "Urbanist",
              fontWeight: 700,
              fontSize: "28px",
            }}
          >
            the power of AI
          </Typography> */}
        <Typography
          sx={{
            color: "#252E49",
            fontFamily: "Urbanist",
            fontWeight: 500,
            fontSize: "16px",
          }}
        >
          Effective, personalized care backed by science and expertise
        </Typography>
      </div>
      <div className="mt-14 mb-14 flex justify-center w-[100%]">
        <FeatureCaraousel />
      </div>
      <div>
        <FoodCard />
      </div>
      {/* <FoodCard /> */}
      {/* <img src={man} alt="" /> */}
      {/* <div>
        <img src={f5} className="px-6 pt-4" alt="" />
        <img src={phn} className="px-6 pt-10" alt="" />
        <img src={f8} className="px-6 pt-10" alt="" />
        <img src={gift} className="px-6 pt-10" alt="" />
      </div> */}
    </div>
  );
}

export default AiSection;
