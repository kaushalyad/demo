import React, { useState } from "react";
import AiSection from "../components/HomeScreenComponents/AiSection";
import Header from "../components/HomeScreenComponents/Header";
import TestimonialCaraousel from "../components/TestimonialCaraousel";
import StatsSection from "../components/StatsSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { PricingComponent } from "../components/HomeScreenComponents/PricingComponent";
import { Typography } from "@mui/material";
import FastResults from "../components/HomeScreenComponents/FastResults";
const HomeScreen = () => {
  return (
    <>
      <div className="bg-[#FFFFFF]">
        <Header />
        <AiSection />
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="w-[60%]">
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "32px",
                fontWeight: 700,
                lineHeight: "38.4px",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              Stories of Transformation
            </Typography>
          </div>
          <div>
            <TestimonialCaraousel />
          </div>
        </div>
        <FastResults />
        <StatsSection />
        <Features />
        <div className=" bg-[#090E1D] px-6">
          <div className="">
            <Typography
              sx={{
                textAlign: "left",
                color: "#FFFFFF",
                fontFamily: "Urbanist",
                fontWeight: 700,
                fontSize: "28px",
                marginRight: "32px",
                paddingTop: "32px",
              }}
            >
              Frequently asked questions
            </Typography>
          </div>

          <div className="ml-[-20px] mt-3 mb-[-16px] pb-24">
            <Footer />
          </div>
        </div>
        <div className=" sticky bottom-0 bg-[#FFFFFF] rounded-t-2xl">
          <PricingComponent role="button" className=" sticky bottom-0" />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
