import React, { useEffect, useState } from "react";
import bg_image from "../assets/mobile_background.png";
import bg_color_image from "../assets/Frame 26080462.png";
import topnav from "../assets/logomark-white.svg";
import gpay_icon from "../assets/gpay_icon.png";
import app_store_icon from "../assets/app_store_icon.png";
import { Typography, Box } from "@mui/material";
import PaymentSummary from "./PaymentSummary";
import CustomButton from "./CustomButton";
import { useAuth } from "../hooks/useAuth";
import plusAnimation from "../assets/animations/plus_animation.json";
import axios from "axios";
import LottieAnimation from "./LottieAnimation";

const PostPayment = () => {
  const [paymentSummaryData, setPaymentSummaryData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [isPolling, setIsPolling] = useState(true);
  const { sessionId } = useAuth();

  useEffect(() => {
    const pollSubscriptionStatus = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/subscription`, {
          headers: { sessionid: sessionId },
        });
        const data = response.data;
        setPaymentSummaryData(data?.data?.paymentHistory[0]);

        // Stop polling if status becomes ACTIVE or PENDING
        if (
          data?.data?.status === "ACTIVE" ||
          data?.data?.status === "PENDING"
        ) {
          setIsPolling(false); // Stops polling
        }
      } catch (error) {
        console.error("Error fetching subscription status:", error);
      }
    };

    if (isPolling) {
      // Start polling every 3 seconds
      const intervalId = setInterval(() => {
        pollSubscriptionStatus();
      }, 3000);

      // Cleanup interval when the component unmounts or polling stops
      return () => clearInterval(intervalId);
    }
  }, [isPolling]);

  console.log(paymentSummaryData);

  return (
    <>
      {isPolling ? (
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            width: "100vw",
            display: "flex",
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LottieAnimation
            animation={plusAnimation}
            threshold={1}
            width={"100%"}
            height={"100%"} // Set Lottie height to its full size
            loop={true}
            style={{
              position: "relative",
            }}
          />
        </Box>
      ) : (
        <div className="bg-[#FFFFFF] xs:w-[100%] min-h-[100vh]">
          <div
            style={{ backgroundImage: `url(${bg_color_image})` }}
            className="bg-[#FFFFFF] w-[100vw] min-h-[40vh] bg-cover bg-center flex flex-col items-center px-5"
          >
            <div className="flex items-center gap-1 my-[50px]">
              <Typography
                sx={{
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "#252E49",
                  lineHeight: "28.8px",
                  minWidth: "125px",
                  letterSpacing: "-0.012em",
                  textAlign: "center",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Welcome to
              </Typography>

              <img
                src={topnav}
                className=" items-start "
                alt="Tap Health Logo"
              />
            </div>
            <img
              src={bg_image}
              className="w-[100%] xs:min-h-[380px] sm:min-h-[480px] bg-cover bg-center "
            />
          </div>
          <div className="px-10">
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "26px",
                fontWeight: 800,
                marginTop: "10px",
                lineHeight: "31.2px",
                letterSpacing: "-0.012em",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              Download Tap Health to get started
            </Typography>
            <div className="flex justify-center items-center gap-5 py-5">
              <img src={gpay_icon} className="w-[94px]" />
              <img src={app_store_icon} className="w-[94px]" />
            </div>
          </div>
          <div className="w-[100%]">
            <PaymentSummary paymentSummaryData={paymentSummaryData} />
          </div>
          <div className="w-[100%] py-5 flex justify-center">
            <CustomButton
              text="Download Tap Health"
              link="https://play.google.com/store/apps/details?id=com.taphealthapp"
              className={" text-[#FFFFFF]"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PostPayment;
