import React, { useState, useEffect } from "react";
import left_icon from "../assets/Left icon.svg";
import background_image from "../assets/Frame 26080462.png"; // Assuming this is your image path
import { Typography } from "@mui/material";
import HeaderContent from "./HeaderContent";
import right_arrow_icon from "../assets/right_arrow_icon.svg";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
const Manage = ({ leftDays, duesAmount, date, renewCancelled,headerContents }) => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { sessionId } = useAuth();
  const [subscriptionData, setSubscriptionData] = useState([]);
  const calculateTimeLeft = (updatedAt) => {
    const startDate = new Date(updatedAt);

    // Calculate the expiration date (12 months later)
    const expiryDate = new Date(startDate);
    expiryDate.setFullYear(startDate.getFullYear() + 1);

    // Get today's date
    const today = new Date();

    // Calculate the difference in months
    const monthsLeft =
      (expiryDate.getFullYear() - today.getFullYear()) * 12 +
      expiryDate.getMonth() -
      today.getMonth();

    if (monthsLeft > 0) {
      return `${monthsLeft} month${monthsLeft > 1 ? "s" : ""} left`;
    } else if (monthsLeft === 0) {
      return "The subscription ends this month.";
    } else {
      return "The subscription has expired.";
    }
  };

  const calculateOneYearLater = (dateString) => {
    // Parse the input date
    const date = new Date(dateString);

    // Validate if the parsed date is valid
    if (isNaN(date)) {
      return "Invalid date provided.";
    }

    // Add one year to the date
    date.setFullYear(date.getFullYear() + 1);

    // Format the resulting date
    const options = { day: "numeric", month: "short", year: "numeric" }; // Format: 27 Jan 2026
    return new Intl.DateTimeFormat("en-GB", options).format(date); // Use 'en-GB' for day-month-year order
  };
  const calculateDaysLeft = (updatedAt) => {
    // Parse the provided updatedAt date
    const startDate = new Date(updatedAt);

    // Add 30 days to the given date
    const targetDate = new Date(startDate);
    targetDate.setDate(startDate.getDate() + 30);

    // Get today's date
    const today = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = targetDate - today;

    // If the target date has passed
    if (timeDifference <= 0) {
      return "The target date has passed.";
    }

    // Calculate the difference in days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return `${daysLeft} day${daysLeft > 1 ? "s" : ""} left`;
  };
  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/subscription`, {
          headers: { sessionid: sessionId },
        });
        const data = response.data;
        setSubscriptionData(data?.data);

        // Directly handle status
        if (
          data?.data?.status === "ACTIVE" ||
          data?.data?.status === "PENDING"
        ) {
          console.log("Subscription is active or pending.");
        }
      } catch (error) {
        console.error("Error fetching subscription status:", error);
      }
    };

    // Fetch data once
    fetchSubscriptionStatus();
  }, []);
  console.log(subscriptionData);
  return (
    <>
      <div className="flex  flex-col bg-[#F2F5F9] w-[100vw] h-[100vh] justify-between  items-center">
        {/* Set background image */}
        <div
          className="w-[100vw] flex flex-col gap-20"
          style={{
            backgroundImage: `url(${background_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex px-[4px] items-center -ml-2">
            <button
              onClick={() => {
                navigate("/plans");
              }}
            >
              <img
                className="w-[50px] h-[50px]"
                src={left_icon}
                alt="back_icon"
              />
            </button>
            <Typography
              color="#252E49"
              sx={{
                fontFamily: "Urbanist",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "19.2px",
                letterSpacing: "-0.008em",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Manage Subscription
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
          {renewCancelled && (
            <div className="w-100%] flex justify-center ">
              <div className="w-[118px] h-[22px] bg-[#FFF1F3] py-[4px] px-[8px] justify-center text-center items-center rounded-[4px]">
                <Typography
                  sx={{
                    color: "#DA1E2E",
                    fontFamily: "Urbanist",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "14.4px",
                    letterSpacing: "-0.003em",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  {renewCancelled}
                </Typography>
              </div>
            </div>
          )}
          <div className="">
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "30px",
                fontWeight: 700,
                lineHeight: "36px",
                textAlign: "center",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              {calculateTimeLeft(subscriptionData?.updatedAt)}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Urbanist",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "16.8px",
                textAlign: "center",
                marginTop: "15px",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#252E49",
              }}
            >
              Your next bill is{" "}
              <span className="font-bold">
                ₹{subscriptionData?.nextBillingAmount / 100}
              </span>{" "}
              on{" "}
              <span className="font-bold">
                {calculateOneYearLater(subscriptionData?.updatedAt)}
              </span>
            </Typography>
          </div>
          </div>
        </div>
        <div className="flex flex-col gap-0 px-[8px] items-center justify-center w-[100%]  absolute top-[45%]">
          <div className="w-[100%]">
            {/* <HeaderContent
            content={"Renew Subscription"}
            rightArrowIcon={right_arrow_icon}
            backgroundColor="#FFFFFF"
            className={"rounded-t-[12px]"}
          /> */}
          </div>
          <div className="w-[100%]">
            <NavLink to="/manage-subscription/cancel-subscription">
              <HeaderContent
                content={"End Subscription"}
                rightArrowIcon={right_arrow_icon}
                backgroundColor={"#FFFFFF"}
                className={"rounded-[12px]"}
              />
            </NavLink>
          </div>
          <div className="w-[100%]">
            <NavLink to="/manage-subscription/request-refund">
              <HeaderContent
                content={"Request Refund"}
                rightArrowIcon={right_arrow_icon}
                remainDiv={calculateDaysLeft(subscriptionData?.updatedAt)}
                className={"mt-2"}
                backgroundColor={"#F2F5F9"}
                refundableAmount={
                  subscriptionData?.paymentHistory?.totalPaidAmount
                }
              />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manage;
