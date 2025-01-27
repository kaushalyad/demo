import React, { useState, useEffect } from "react";
import PlanPicker from "../components/PlanScreenComponents/PlanPicker";
import Features from "../components/Features";
import BuyButton from "../components/BuyButton";
import bgImg from "../assets/Hero.png";
import topnav from "../assets/Top Nav.png";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import MobileInputModal from "../components/PlanScreenComponents/MobileInputModal";
import Loading from "../components/Loading";
const PlanScreen = () => {
  const navigate = useNavigate();

  const [originalPlans, setOriginalPlans] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { isAuthenticated, sessionId, login, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false); // Initialize based on isAuthenticated

  const handleOpen = () => setIsModalOpen(true); // Function to open modal
  const handleClose = () => setIsModalOpen(false); // Function to close modal

  const apiUrl = import.meta.env.VITE_API_URL;
  const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

  const handleLoginSuccess = (newSessionId) => {
    login(newSessionId);
  };

  const handleSubscribe = async (price, planId, isPromotional, promotionCode) => {
    if (!isAuthenticated) {
      setIsModalOpen(true);
      return;
    }
  
    try {
      // Sending the subscription creation request
      const response = await axios.post(
        `${apiUrl}/api/subscription/create`,
        {
          planId,
          ...(isPromotional && { promotionCode }),
        },
        {
          headers: {
            "Content-Type": "application/json",
            sessionid: sessionId,
          }
        }
      );
  
      const data = response.data?.data;
  
      // Check for successful subscription creation
      if (data) {
        toast.success(
          "Successfully created subscription, moving to the payment page",
          {
            style: { color: "green" },
          }
        );
  
        const options = {
          key: razorpayKeyId, // Razorpay Key
          subscription_id: data.subscriptionId, // Subscription ID from API
          name: "Tap Health",
          currency: "INR",
          amount: data.nextBillingAmount,
          description: "Subscription Payment",
          handler: async (response) => {
            try {
              // Verify the payment response
              await axios.post(
                `${apiUrl}/api/payment/verify`,
                {
                  type: "SUBSCRIPTION",
                  payload: {
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_subscription_id: response.razorpay_subscription_id,
                    razorpay_signature: response.razorpay_signature,
                  },
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    sessionid: sessionId,
                  },
                }
              );
  
              navigate("payment/success");
              setSuccess("Subscription successful!");
            } catch (error) {
              console.error("Verification Error:", error);
              navigate("payment/failure");
  
              const errorMessage =
                error.response?.data?.message || "Payment verification failed.";
              toast.error(errorMessage, { style: { color: "red" } });
              setError(errorMessage);
            }
          },
        };
  
        // Open Razorpay only when the subscription creation is successful
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        // Handle the case where the subscription creation failed
        const errorMessage =
          response.data?.message ||
          "Failed to create subscription. Please try again.";
        setError(errorMessage);
        toast.error(errorMessage, { style: { color: "red" } });
      }
    } catch (error) {
      console.error("Subscription Error:", error);
  
      const errorMessage =
        error.response?.data?.message ||
        "Failed to create subscription. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage, { style: { color: "red" } });
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/subscription/plans`)
      .then((response) => {
        const tempPlans = [];
        tempPlans.push(response.data.data.plans[2]);
        tempPlans.push(response.data.data.plans[0]);
        tempPlans.push(response.data.data.plans[1]);
        // console.log(tempPlans);
        setOriginalPlans(tempPlans);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Error retrieving session:", error);
        // handle error
        // console.log("not found api end points");
        // console.log(error);
        setError(error);
      });
  }, []);
  //   console.log(selectedIndex);
  // console.log(error);
  const features = [
    { title: "Custom Diet Plan", included: true },
    { title: "Meal Sequencing", included: true },
    { title: "Diabetic Specific Exercise Video Library", included: true },
    { title: "24x7 AI Coach", included: true },
    { title: "Medicine Reminder", included: true },
    { title: "Scan to Share Report", included: true },
    { title: "Exciting Rewards for Adherence", included: true },
  ];
  //   console.log(isModalOpen, !isAuthenticated);
  return (
    <div className="flex flex-col bg-white justify-center items-center">
      <MobileInputModal
        open={isModalOpen}
        handleClose={handleClose}
        onLoginSuccess={handleLoginSuccess}
      />
      <Toaster position="top-center" />
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="pb-8 xs:h-[270px] sm:h-[340px] md:h-[420px]"
      >
        <div className="flex flex-col items-center justify-center text-center pt-8">
          <img src={topnav} className="w-full h-full" alt="Tap Health Logo" />
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "16.8px",
              letterSpacing: "-0.012em",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#252E49",
            }}
          >
            Get early access to our plan
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist",
              fontSize: "26px",
              marginTop: "6px",
              fontWeight: 800,
              lineHeight: "31.2px",
              letterSpacing: "-0.012em",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#252E49",
            }}
          >
            Exclusively for you
          </Typography>
          {/* {error && (
            <span className="text-[15px] text-red-500 mt-3">{error}</span>
          )} */}
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-[20px] px-[16px] -mt-11 rounded-t-[16px] bg-white w-[100%]">
        {loading ? (
          <Loading /> // Show loading spinner or message while data is loading
        ) : (
          originalPlans.map((plan, index) => (
            <PlanPicker
              key={index}
              id={plan.id}
              month={plan.interval}
              description={plan.item.description}
              actualPrice={plan.item.originalAmount / 100}
              discountedPrice={
                plan.isPromotional
                  ? plan.promotion.discountedAmount / 100
                  : plan.item.unitAmount / 100
              }
              offerName={plan.isPromotional ? "INTRODUCTORY OFFER" : null}
              isPromotional={plan.isPromotional}
              promotionalCode={plan.isPromotional ? plan.promotion?.code : ""}
              isSelected={selectedIndex === index}
              onClick={() => setSelectedIndex(1)}
            />
          ))
        )}
      </div>

      {/* Features and footer */}
      <div className="w-[100%]">
        <Features featuresHeading={"What you get"} />
      </div>
      {/* <Footer heading={"Frequently asked questions"} /> */}
      <div className=" xs:max-w-[340px] sm:max-w-[480px] pb-10 sm:pb-20 sm:space-y-4 ">
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "16.8px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#5D6A85",
          }}
        >
          <span className="sm:text-[27px] leading-tight ">
            Subscribe today and you’ll be charged
          </span>
          <span
            style={{
              fontFamily: "Urbanist",
              fontSize: "19px",
              fontWeight: 700,
              lineHeight: "16.8px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#5D6A85",
            }}
          >
            <span className="sm:text-[32px] leading-tight">
              {" "}
              ₹2399 per year.
            </span>
          </span>
          <span className="sm:text-[27px] leading-tight"> Cancel anytime.</span>
        </Typography>
      </div>

      {/* Sticky Buy button */}
      <div className="sticky bottom-1 flex items-center justify-center w-[100%] ">
        {!loading && (
          <BuyButton
            month={originalPlans[selectedIndex]?.interval}
            price={
              originalPlans[selectedIndex]?.isPromotional
                ? originalPlans[selectedIndex]?.promotion?.discountedAmount /
                  100
                : originalPlans[selectedIndex]?.item?.unitAmount / 100
            }
            planId={originalPlans[selectedIndex]?.razorpayPlanId}
            isPromotional={originalPlans[selectedIndex]?.isPromotional}
            promotionalCode={
              originalPlans[selectedIndex]?.isPromotional
                ? originalPlans[selectedIndex]?.promotion?.code
                : ""
            }
            onClick={() => {
              const plan = originalPlans[selectedIndex];
              handleSubscribe(
                plan?.isPromotional
                  ? plan?.promotion?.discountedAmount / 100
                  : plan?.item?.unitAmount / 100, // Pass the calculated price
                plan?.razorpayPlanId, // Pass the plan ID
                plan?.isPromotional, // Pass if the plan is promotional
                plan?.isPromotional ? plan?.promotion?.code : null // Pass the promotional code if applicable
              );
            }} // Open modal on button click
          />
        )}
      </div>
    </div>
  );
};

export default PlanScreen;
