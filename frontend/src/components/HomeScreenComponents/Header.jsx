import React, { useRef, useState } from "react";

import banner from "../../assets/bannerimg.png";
import topnav from "../../assets/Top Nav.png";
import heroImg from "../../assets/wmremove-transformed 1.png";
import google_play_icon from "../../assets/icons/google_play_icon.svg";
import et_icon from "../../assets/icons/et_icon.svg";
import doctor_icon from "../../assets/icons/doctor_icon.svg";
import bgImg from "../../assets/Hero.png";
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
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center pt-8 rounded-b-2xl">
          <div className="flex items-center">
            <img src={topnav} className="w-full h-full" alt="Tap Health Logo" />
          </div>

          <div className="text-center">
            <div
              style={{
                width: "70%",
                marginLeft: "auto",
                marginRight: "auto",
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
                }}
              >
                Take Control of Diabetes, Naturally
              </Typography>
            </div>
          </div>

          <div
            className="text-center"
            style={{
              width: "80%",
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
      <div className="px-4 mt-[20px]">
        {/* <img src={banner} alt="" className="w-full h-full" /> */}
        <div className="flex rounded-[16px] py-[16px] border-[1px] border-[#DCE1E8] w-[100%] sm:gap-8 justify-evenly">
          <div className="flex flex-col  items-center gap-1">
            <img
              src={google_play_icon}
              alt="google_play_icon"
              className=" xs:w-[25px] xs:h-[25px] sm:w-[30px] sm:h-[30px] "
            />
            <div>
              <div className="flex items-center">
                <span className="text-[#F59E0B] text-xl">★</span>
                <span className="text-[#F59E0B] text-xl">★</span>
                <span className="text-[#F59E0B] text-xl">★</span>
                <span className="text-[#F59E0B] text-xl">★</span>

                <div className="relative text-xl text-[#F59E0B]">
                  <span className="absolute inset-0 text-[#F59E0B] overflow-hidden w-1/2">
                    ★
                  </span>
                  <span className="text-gray-300">★</span>
                </div>
              </div>
            </div>
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "15px",
                fontWeight: 700,
                lineHeight: "14.4px",
                letterSpacing: "-0.004em",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              Rated 4.5/5
            </Typography>
          </div>
          <div className="flex flex-col  items-center gap-1">
            <img
              src={et_icon}
              alt="et_icon"
              className="xs:w-[25px] xs:h-[25px] sm:w-[30px] sm:h-[30px]"
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "15px",
                fontWeight: 700,
                marginTop: "13px",
                lineHeight: "14.4px",
                letterSpacing: "-0.004em",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              ET
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "15px",
                fontWeight: 700,
                marginTop: "5px",
                lineHeight: "14.4px",
                letterSpacing: "-0.004em",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              Award
            </Typography>
          </div>
          <div className="flex flex-col  items-center gap-1">
            <img
              src={doctor_icon}
              alt="doctor_icon"
              className="xs:w-[25px] xs:h-[25px] sm:w-[30px] sm:h-[30px]"
            />
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: "14.4px",
                letterSpacing: "-0.004em",
                marginTop: "13px",

                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              Designed by
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: "14.4px",
                marginTop: "5px",

                letterSpacing: "-0.004em",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              Endocrinologists
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
