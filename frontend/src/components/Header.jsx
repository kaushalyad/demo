import React, { useRef, useState } from "react";
import logo from "../assets/logo coloured@2x.png";
import aiImg from "../assets/Frame 26080200.png";
import banner from "../assets/bannerimg.png";
import topnav from "../assets/Top Nav.png";
import heroImg from "../assets/wmremove-transformed 1.png";
import bgImg from "../assets/Hero.png";
import { Typography } from "@mui/material";

export default function Header() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnd = () => {
    videoRef.current.currentTime = 0; // Reset video to the start
    setIsPlaying(false); // Set playing state to false
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover", // Ensures the image covers the div properly
          backgroundPosition: "center", // Centers the image
          borderBottomLeftRadius: "20px", // Adjust radius value
          borderBottomRightRadius: "20px",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center pt-8  rounded-b-2xl">
          {/* Logo */}
          <div className="flex items-center">
            <img src={topnav} className="w-full h-full" alt="Tap Health Logo" />
          </div>

          {/* <Typography
          sx={{
            textAlign: "center",
            color: "#3D4966",
            fontFamily: "Urbanist",
            fontWeight: 500,
            fontSize: "24px",
          }}
        >
          India’s First AI-Powered
        </Typography> */}
          <div className="text-center ">
            <div
              style={{
                width: "70%",
                marginLeft: "auto",
                marginRight: "auto", // Default for mobile
                // "@media (min-width: 424px)": {
                //   width: "%",
                //   textAlign: "center",
                //   marginLeft: "auto",
                //   marginRight: "auto",
                // },
                // "@media (min-width: 768px)": { width: "70%" },
                // "@media (min-width: 1024px)": { width: "60%" },
                // "@media (min-width: 1280px)": { width: "50%" },
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#141B31",
                  fontFamily: "Urbanist",
                  fontWeight: 800,
                  fontSize: "42px",
                  lineHeight: "50.4px",
                  // "@media (min-width: 424px)": {
                  //   width: "90%",
                  //   textAlign: "center",
                  //   marginLeft: "auto",
                  //   marginRight: "auto",
                  // },
                }}
              >
                Take Control of Diabetes, Naturally
              </Typography>
            </div>
          </div>

          {/* <div className="my-8">
          <div className="flex gap-x-1 ml-5">
            <img src={check} alt="tick" />
            <Typography
              sx={{
                color: "#3D4966",
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Reduce Your HBA1C Naturally
            </Typography>
          </div>
          <div className="flex gap-x-1">
            <img src={check} alt="" />
            <Typography
              sx={{
                color: "#3D4966",
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Costs less than your daily newspaper
            </Typography>
          </div>
        </div> */}
          <div
            className="text-center"
            style={{
              width: "80%", // Default for mobile
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Typography
              sx={{
                color: "#141B31",
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "17px",
                paddingTop: "32px",
                // "@media (min-width: 380px)": {
                //     width: "80%",
                //   },
                // "@media (min-width: 376px)": {
                //   width: "94%",
                //   textAlign: "center",
                //   marginLeft: "auto",
                //   marginRight: "auto",
                // },
                // "@media (min-width: 396px)": {
                //   width: "90%",
                //   textAlign: "center",
                //   marginLeft: "auto",
                //   marginRight: "auto",
                // },
                // "@media (min-width: 414px)": {
                //   width: "88%",
                //   textAlign: "center",
                //   marginLeft: "auto",
                //   marginRight: "auto",
                // },
                // "@media (min-width: 426px)": {
                //   width: "86%",
                //   textAlign: "center",
                //   marginLeft: "auto",
                //   marginRight: "auto",
                // },
              }}
            >
              Reclaim Your Health with the help of{" "}
              <span className="bg-yellow-300">AI Powered</span> Diabetes Coach
            </Typography>
          </div>
          <div className="mt-8 ">
            <img
              src={heroImg}
              alt=""
              className="w-full h-full rounded-[20px]"
            />
          </div>
        </div>
      </div>
      <div>
        <img src={banner} alt="" className="w-full h-full" />
      </div>
    </>
  );
}