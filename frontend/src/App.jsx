"use client";
import "./App.css";
import { Typography } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useState, useEffect } from "react";
import AiSection from "./components/AiSection";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import StatsSection from "./components/StatsSection";
import OfferSection from "./components/OfferSection";
import PlanSection from "./components/PlanSection";
import axios from "axios";
import MobileInputModal from "./components/MobileInputModal";
import { useAuth } from "../src/hooks/useAuth";
import TestimonialCaraousel from "./components/TestimonialCaraousel";
import { useNavigate } from "react-router-dom";

const PricingComponent = ({
  onShowPlanSection,
  price = 1,
  planId = "newYearOffer",
  onPayment,
  onClick,
  className,
  isAuthenticated,
  handleCurrentStep,
}) => {
  // const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      if (isAuthenticated) {
        // move to route /plans
        navigate(`/plans/${planId}`); // Navigate to /plans if logged in
      } else {
        navigate("/login");
        onClick();
      }
    }
  };

  return (
    <div
      className={`flexrounded-t-2xl rounded-t-[16px] gradient-background ${className}`}
    >
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontSize: "12px",
          fontWeight: 700,
          lineHeight: "14.4px",
          letterSpacing: "-0.003em",
          textAlign: "center",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          paddingBottom: "4px",
          paddingTop: "4px",
          color: "#FFFFFF",
        }}
      >
        LIMITED PERIOD OFFER
      </Typography>
      <div>
        {/* {!isClicked ? (
        // Initial Card
        <div className="text-center">
          <div className="flex justify-center items-center mb-2 space-x-2">
            <span className="pt-3">
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#5D6A85",
                  fontFamily: "Urbanist",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "21.6px",
                  textDecoration: "line-through",
                }}
              >
                ₹1999
              </Typography>
            </span>
            <span className="pt-3">
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#252E49",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: "36px",
                }}
              >
                ₹199
              </Typography>
            </span>
            <span className="pt-3">
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#252E49",
                  fontFamily: "Urbanist",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "19.2px",
                }}
              >
                per month
              </Typography>
            </span>
          </div>

          <button
            className="bg-[#2563EB] py-4 px-7 w-[90%] rounded-full mb-6"
            onClick={handleClick}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "21.6px",
              }}
            >
              Get started
            </Typography>
          </button>
        </div>
      ) : (
        // Changed Card on Click
        <div className="flex justify-around items-center py-4 bg-white rounded-t-2xl">
          <div className="flex flex-col">
            <Typography
              sx={{
                textAlign: "left",
                color: "#252E49",
                fontFamily: "Urbanist",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "36px",
              }}
            >
              ₹199
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                color: "#5D6A85",
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              per month
            </Typography>
          </div>
          <button
            className="bg-[#2563EB] w-[60%] rounded-full py-4"
            onClick={handleClick}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontFamily: "Urbanist",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              Get started
            </Typography>
          </button>
        </div>
      )} */}
        <div className="flex justify-around items-center py-4 bg-white rounded-t-2xl">
          {/* <div className="flex flex-col"> */}
          {/* <Typography
            sx={{
              textAlign: "left",
              color: "#252E49",
              fontFamily: "Urbanist",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "36px",
            }}
          >
            ₹199
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              color: "#5D6A85",
              fontFamily: "Urbanist",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            per month
          </Typography> */}
          {/* </div> */}
          <div className="flex flex-col justify-center items-between">
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "14.4px",
                textAlign: "left",
                textDecorationLine: "line-through",
                color: "#818BA0",
              }}
            >
              &#8377;{5988}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "22px",
                fontWeight: 800,
                lineHeight: "26.4px",
                letterSpacing: "-0.01em",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              ₹1
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: { xs: "12px", sm: "14px" }, // Responsive font size
                fontWeight: 600,
                lineHeight: "16.8px",
                letterSpacing: "-0.003em",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#5D6A85",
              }}
            >
              for 1 year
            </Typography>
          </div>
          <button
            style={{
              borderWidth: "1px",
              borderColor: "#2563EB",
            }}
            className="w-[231px] rounded-full py-[12px] bg-[#2563EB]"
            onClick={handleClick}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontFamily: "Urbanist",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "19.2px",
              }}
            >
              Join Now
            </Typography>
          </button>
        </div>
      </div>
    </div>
  );
};

const App = ({ open = false }) => {
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(open); // State to handle modal visibility
  const handleOpen = () => setIsModalOpen(true); // Function to open modal
  const handleClose = () => setIsModalOpen(false); // Function to close modal
  const { isAuthenticated, sessionId, login, logout } = useAuth();
  const [currentStep, setCurrentStep] = useState("login");
  const handleLoginSuccess = (newSessionId) => {
    login(newSessionId);
    setCurrentStep("subscription");
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js").then(() => {});
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    // <>
    //   {currentStep === "login" ? (
    //     <>
    //       <MobileInputModal
    //         open={isModalOpen}
    //         handleClose={handleClose}
    //         onLoginSuccess={handleLoginSuccess}
    //       />
    //       <div className="bg-[#FFFFFF] max-w-screen-sm">
    //         <Header />
    //         <AiSection />
    //         <div className="flex flex-col gap-8 justify-center items-center">
    //           <div className="w-[60%]">
    //             <Typography
    //               sx={{
    //                 fontFamily: "Urbanist, sans-serif",
    //                 fontSize: "32px",
    //                 fontWeight: 700,
    //                 lineHeight: "38.4px",
    //                 textAlign: "center",
    //                 textUnderlinePosition: "from-font",
    //                 textDecorationSkipInk: "none",
    //                 color: "#252E49",
    //               }}
    //             >
    //               Stories of Transformation
    //             </Typography>
    //           </div>
    //           <div>
    //             <TestimonialCaraousel />
    //           </div>
    //         </div>
    //         <StatsSection />
    //         <Features />

    //         <div>
    //           {/* <Typography
    //             sx={{
    //               textAlign: "left",
    //               color: "#FFFFFF",
    //               fontFamily: "Urbanist",
    //               fontWeight: 700,
    //               fontSize: "28px",
    //               marginRight: "32px",
    //               paddingTop: "32px",
    //             }}
    //           >
    //             Frequently asked questions
    //           </Typography> */}
    //           <div className=" pb-14 sticky bottom-0 ">
    //             <Footer />
    //           </div>
    //         </div>
    //         <div className=" sticky bottom-0 bg-[#FFFFFF] rounded-t-2xl">
    //           <PricingComponent
    //             onClick={handleOpen}
    //             isAuthenticated={isAuthenticated}
    //             handleCurrentStep={setCurrentStep}
    //             role="button"
    //             className=" sticky bottom-0"
    //           />
    //         </div>
    //         {/* <div className="bg-white rounded-t-2xl sticky bottom-0"> */}
    //         {/* <PricingComponent InputMobileModal={handleClick} /> */}
    //         {/* <PricingComponent
    //             onPayment={onPayment}
    //             price={1}
    //             planId={"newYearOffer"}
    //           /> */}
    //         {/* </div> */}
    //       </div>
    //     </>
    //   ) : (
    //     <PlanSection sessionId={sessionId} onLogout={logout} />
    //   )}
    // </>

    <>
      <MobileInputModal
        open={isModalOpen}
        handleClose={handleClose}
        onLoginSuccess={handleLoginSuccess}
      />
      <div className="bg-[#FFFFFF] max-w-screen-sm">
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
        <StatsSection />
        <Features />

        <div>
          {/* <Typography
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
    </Typography> */}
          <div className=" pb-14 sticky bottom-0 ">
            <Footer />
          </div>
        </div>
        <div className=" sticky bottom-0 bg-[#FFFFFF] rounded-t-2xl">
          <PricingComponent
            onClick={handleOpen}
            isAuthenticated={isAuthenticated}
            handleCurrentStep={setCurrentStep}
            role="button"
            className=" sticky bottom-0"
            planId={"newYearOffer"}
          />
        </div>
        {/* <div className="bg-white rounded-t-2xl sticky bottom-0"> */}
        {/* <PricingComponent InputMobileModal={handleClick} /> */}
        {/* <PricingComponent
      onPayment={onPayment}
      price={1}
      planId={"newYearOffer"}
    /> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default App;
