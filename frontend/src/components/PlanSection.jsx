import React, { useState, useEffect } from "react";
import PlanPicker from "./PlanPicker";
import Features from "./Features";
import BuyButton from "./BuyButton";
import Footer from "./Footer";
import bgImg from "../assets/Hero.png";
import topnav from "../assets/Top Nav.png";
import { Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import MobileInputModal from "./MobileInputModal";

const PlanSection = ({ sessionId }) => {
  const navigate = useNavigate();

  const plans = [
    {
      month: 3,
      description: "Ideal solution for trying out the plan",
      actualPrice: 1495,
      discountedPrice: 1495,
      planId: "3monthsPlan",
      isDisabled: true,
    },
    {
      month: 12,
      description: "For achieving the best health results",
      actualPrice: 5988,
      discountedPrice: 1,
      offerName: "INTRODUCTORY OFFER",
      planId: "newYearOffer",
      isDisabled: false,
    },
    {
      month: 6,
      description: "Great for building new healthy habits",
      actualPrice: 1794,
      discountedPrice: 1794,
      planId: "6monthsPlan",
      isDisabled: true,
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[1].planId); // Default to "standard"

  // Update the route whenever the selected plan changes

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [planId, setPlanId] = useState("newYearOffer");
  const [price, setPrice] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "https://demo2-g4uz.onrender.com";

  // const handleSubscribe = async () => {
  //   setLoading(true);
  //   setError(null);
  //   setSuccess(null);

  //   if (!sessionId || !planId) {
  //     setError("Missing required parameters");
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     // Create subscription
  //     const { data } = await axios.post(
  //       `${API_BASE_URL}/api/createOrder`,
  //       { planId, price },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           sessionid: sessionId,
  //         },
  //       }
  //     );

  //     // Razorpay options
  //     const options = {
  //       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
  //       subscription_id: data.data.subscriptionId,
  //       name: "Tap Health",
  //       currency: "INR",
  //       amount: data.data.nextBillingAmount,
  //       description: "Subscription Payment",
  //       handler: async (response) => {
  //         try {
  //           const verifyResponse = await axios.post(
  //             `${API_BASE_URL}/api/verifyPayment`,
  //             {
  //               // type: "subscription",
  //               razorpay_payment_id: response.razorpay_payment_id,
  //               razorpay_subscription_id: response.razorpay_subscription_id,
  //               razorpay_signature: response.razorpay_signature,
  //             },
  //             {
  //               headers: {
  //                 "Content-Type": "application/json",
  //                 sessionid: sessionId,
  //               },
  //             }
  //           );

  //           if (verifyResponse.status === 200) {
  //             setSuccess("Subscription successful!");
  //             console.log("Subscription successful!");
  //           } else {
  //             throw new Error("Payment verification failed");
  //           }
  //         } catch (verificationError) {
  //           console.error("Verification Error:", verificationError);
  //           setError("Payment verification failed");
  //         }
  //       },
  //     };

  //     // Initialize Razorpay
  //     if (!window.Razorpay) {
  //       throw new Error("Razorpay SDK not loaded");
  //     }

  //     const razorpay = new window.Razorpay(options);
  //     razorpay.open();
  //   } catch (subscriptionError) {
  //     console.error("Subscription Error:", subscriptionError);
  //     setError(
  //       subscriptionError.response?.data?.message ||
  //         subscriptionError.message ||
  //         "Failed to create subscription"
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubscribe = async (price, planId, selectedIndex) => {
    // create order

    // just add the payment to route

    try {
      const options = {
        planId: planId,
        amount: price, // amount in paise
      };
      const response = await axios.post(
        "https://demo2-g4uz.onrender.com/api/createOrder",
        options
      );
      const data = await response.data;
      console.log(data);
      navigate(`/plans/${planId}/payment`);
      const paymentObject = new window.Razorpay({
        key: "rzp_test_6lMjhuyGcAxEbl",
        amount: price, // amount in paise
        order_id: data.id,
        ...data,
        handler: function (response) {
          // handle success
          console.log(response);
          // make a payment request to your backend

          const options2 = {
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          };

          axios
            .post("https://demo2-g4uz.onrender.com/api/verifyPayment", options2)
            .then((res) => {
              if (res.data.success) {
                console.log("Payment Successful");
                // alert("Payment Successful");
                navigate(`/plans/${planId}/payment/success`, {
                  state: {
                    planId: plans[selectedIndex].plan,
                    paidAmount: plans[selectedIndex].discountedPrice,
                    planDuration: plans[selectedIndex].month,
                  },
                });
                onPaymentSuccess();
              } else {
                console.log("Payment Failed");
                alert("Payment Failed");
                // handle payment failure
              }
            });
        },
        modal: {
          ondismiss: function () {
            // Custom behavior when Razorpay modal is closed
            console.log("Payment canceled");
            navigate(`/payment/cancel`, {
              state: { planId, price },
            });
          },
        }, 
      });

      paymentObject.open();
    } catch (error) {
      // handle error
      console.log("not found api end points");
      console.log(error);
    }
  };

  useEffect(() => {
    navigate(`/plans/${plans[selectedIndex].planId}`);
  }, [selectedIndex]);

  const features = [
    { title: "Custom Diet Plan", included: true },
    { title: "Meal Sequencing", included: true },
    { title: "Diabetic Specific Exercise Video Library", included: true },
    { title: "24x7 AI Coach", included: true },
    { title: "Medicine Reminder", included: true },
    { title: "Scan to Share Report", included: true },
    { title: "Exciting Rewards for Adherence", included: true },
  ];

  // const handleOpen = () => setIsModalOpen(true); // Function to open modal
  // const handleClose = () => setIsModalOpen(false); // Function to close modal

  return (
    <div className="flex flex-col bg-white">
      {/* Mobile Input Modal */}
      {/* <MobileInputModal
        open={isModalOpen}
        handleClose={handleClose}
        price={plans[selectedIndex].discountedPrice}
        planId={plans[selectedIndex].planId}
      /> */}
      {/* <OtpArea open={isModalOpen} handleClose={handleClose} /> */}
      {/* Parent div with background image */}
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="pb-8 h-[256px]"
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
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-[20px] px-[16px] -mt-11 rounded-t-[16px] bg-white">
        {plans.map((plan, index) => (
          <PlanPicker
            key={index}
            id={plan.planId}
            month={plan.month}
            description={plan.description}
            actualPrice={plan.actualPrice}
            discountedPrice={plan.discountedPrice}
            offerName={plan.offerName}
            isSelected={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
            plans={plans}
          />
        ))}
      </div>

      {/* Features and footer */}
      <Features featuresHeading={"What you get"} />
      <Footer heading={"Frequently asked questions"} />

      {/* Sticky Buy button */}
      <div className="sticky bottom-1 flex items-center justify-center ">
        <BuyButton
          month={plans[selectedIndex].month}
          price={plans[selectedIndex].discountedPrice}
          planId={plans[selectedIndex].planId}
          onClick={() => {
            handleSubscribe(price, planId, selectedIndex);
          }} // Open modal on button click
        />
      </div>
    </div>
  );
};

export default PlanSection;
