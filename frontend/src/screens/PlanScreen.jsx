import { useState, useEffect } from "react";
import PlanPicker from "../components/PlanScreenComponents/PlanPicker";
import Features from "../components/Features";
import BuyButton from "../components/BuyButton";
import bgImg from "../assets/Hero.png";
import topnav from "../assets/Top Nav.png";
import { Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import MobileInputModal from "../components/PlanScreenComponents/MobileInputModal";
import Loading from "../components/Loading";
import Timer from "../components/Timer";
const PlanScreen = () => {
  const navigate = useNavigate();
  const [originalPlans, setOriginalPlans] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, sessionId, login } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false); // Initialize based on isAuthenticated
  const [promotionsData, setPromotionsData] = useState([]);
  const handleClose = () => setIsModalOpen(false); // Function to close modal
  const apiUrl = import.meta.env.VITE_API_URL;
  const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const [subscribed, setSubscribed] = useState(false)

  const handleLoginSuccess = (newSessionId) => {
    login(newSessionId);
  };

  console.log('subscribed status', subscribed)

  const subscriptionStatus = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/subscription`, {
        headers: { sessionid: sessionId },
      });
      const data = response.data;
      if (
        data?.data?.status === "ACTIVE"
      ) {
        setSubscribed(true);
      }
      else {
        setSubscribed(false)
      }
    } catch (error) {
      console.error("Error fetching subscription status:", error);
      setSubscribed(false)
    }
  };

  const handleSubscribe = async (planId, isPromotional, promotionCode) => {
    console.log('isPromotional', isPromotional)
    console.log('promotioncode', promotionCode)
    console.log('promotioncode', planId)
    if (!isAuthenticated) {
      setIsModalOpen(true);
      return;
    }


    await subscriptionStatus();

    if (!subscribed) {
      try {
        // Sending the subscription creation request
        const response = await axios.post(
          `${apiUrl}/api/subscription/create`,
          {
            planId,
            promotionCode: isPromotional ? promotionCode : "",
          },
          {
            headers: {
              "Content-Type": "application/json",
              sessionid: sessionId,
            },
          }
        );

        const data = response.data?.data;
        console.log('...', data);
        // Check for successful subscription creation
        if (data) {
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
              } catch (error) {
                console.error("Verification Error:", error);
                navigate("payment/failure");
              }
            },
          };

          // Open Razorpay only when the subscription creation is successful
          const razorpay = new window.Razorpay(options);
          razorpay.open();
        } else {
          // Handle the case where the subscription creation failed
        }
      } catch (error) {
        console.error("Subscription Error:", error);
      } finally {
        setLoading(false);
      }
    }
    else {
      navigate("/manage-subscription");
    }

  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch subscription plans and promotions concurrently
    const fetchData = async () => {
      try {
        const [plansResponse, promotionsResponse] = await Promise.all([
          axios.get(`${apiUrl}/api/subscription/plans`),
          axios.get(`${apiUrl}/api/subscription/promotions`),
        ]);

        // Extract and reorder plans if needed
        const plans = plansResponse.data?.data?.plans || [];
        console.log('fetchedplans', plans)
        setOriginalPlans(plans);
        // setSelectedIndex(plans.)
        plans.map((plan, index) => {
          if (plan.interval === 12) setSelectedIndex(index);
        });
        setPromotionsData(promotionsResponse.data?.data[0] || []);
        setLoading(false);
      } catch (err) {
        // Handle errors for both API calls
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);
  console.log(promotionsData);
  return (
    <div className="flex flex-col bg-white justify-center items-center h-[100%]">
      <MobileInputModal
        open={isModalOpen}
        handleClose={handleClose}
        onLoginSuccess={handleLoginSuccess}
        isPromotional={originalPlans[selectedIndex]?.isPromotional}
        promotionCode={
          originalPlans[selectedIndex]?.isPromotional
            ? originalPlans[selectedIndex]?.promotion?.code
            : ""
        }
        planId={originalPlans[selectedIndex]?.razorpayPlanId}
      />
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
        </div>
      </div>

      <div className="flex flex-col gap-3   -mt-11 rounded-t-[16px] bg-white w-[100%]">
        {loading ? (
          <Loading /> // Show loading spinner or message while data is loading
        ) : (
          <>
            {promotionsData && (
              <div
                className="flex items-center w-full xs:h-[65px] sm:h-[82px] md:h-[92px] rounded-t-[16px] px-[16px] py-[8px]  flex-col gap-2" // Ensure a height
                style={{
                  backgroundImage: `url(${promotionsData?.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex justify-between w-[100%]">
                  <Typography
                    sx={{
                      fontFamily: "Urbanist, sans-serif", // Ensure font is loaded in your project
                      fontSize: "14px",
                      fontWeight: 700,
                      lineHeight: "14.4px",
                      letterSpacing: "-0.003em",
                      textAlign: "left",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                    }}
                  >
                    {promotionsData?.description.toUpperCase()}{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Urbanist, sans-serif", // Ensure font is loaded in your project
                      fontSize: "14px",
                      fontWeight: 700,
                      lineHeight: "14.4px",
                      letterSpacing: "-0.003em",
                      textAlign: "left",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                    }}
                  >
                    Expires in
                  </Typography>
                </div>
                <div className="flex justify-between w-[100%]">
                  {promotionsData.discountType === 1 ? (
                    <Typography
                      sx={{
                        fontFamily: "Urbanist, sans-serif",
                        fontSize: "20px",
                        fontWeight: 900,
                        lineHeight: "21.6px",
                        letterSpacing: "-0.003em",
                        textAlign: "left",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                      }}
                    >
                      {`Upto ${promotionsData?.discountValue}% off`}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        fontFamily: "Urbanist, sans-serif",
                        fontSize: "20px",
                        fontWeight: 900,
                        lineHeight: "21.6px",
                        letterSpacing: "-0.003em",
                        textAlign: "left",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                      }}
                    >
                      {`Flat ${promotionsData?.discountValue} off`}
                    </Typography>
                  )}
                  {/* <Typography
                    sx={{
                      fontFamily: "Urbanist, sans-serif",
                      fontSize: "20px",
                      fontWeight: 900,
                      lineHeight: "21.6px",
                      letterSpacing: "-0.003em",
                      textAlign: "left",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                    }}
                  >
                    13:43
                  </Typography> */}
                  <Timer />
                </div>
              </div>
            )}
            {
              <div className="w-[100%] px-[12px] flex flex-col gap-3 mt-[20px]">
                {originalPlans.map((plan, index) => (
                  <PlanPicker
                    key={index}
                    padding={" py-4"}
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
                    promotionalCode={
                      plan.isPromotional ? plan.promotion?.code : ""
                    }
                    isSelected={selectedIndex === index}
                  // onClick={() => setSelectedIndex(index)}
                  />
                ))}
              </div>
            }
          </>
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
      <div className="sticky bottom-5 flex items-center justify-center w-[100%] ">
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
              console.log('second time plan', JSON.stringify(plan, null, Infinity))
              console.log('razorpay id', plan.razorpayPlanId)
              handleSubscribe(
                // plan?.isPromotional
                //   ? plan?.promotion?.discountedAmount / 100
                //   : plan?.item?.unitAmount / 100, // Pass the calculated price
                plan?.razorpayPlanId, // Pass the plan ID
                plan?.isPromotional, // Pass if the plan is promotional
                plan?.isPromotional ? plan?.promotion?.code : null // Pass the promotional code if applicable
              );
            }} // Open modal on button click
            text="Buy plan"
          />
        )}
      </div>
    </div>
  );
};

export default PlanScreen;
