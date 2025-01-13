import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import OtpInput from "./OtpInput";
import { styled, css } from "@mui/system";
import axios from "axios";
import { Modal as BaseModal, Button, Typography } from "@mui/material";
import left_arrow_icon from "../assets/left_arrow_icon.svg";
import edit_icon from "../assets/edit_icon.svg";
import { useNavigate } from "react-router-dom";

const NotReceivedOtp = ({
  handleResendOtp,
  setOtpAreaVisible,
  otpAreaVisible,
}) => {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontSize: "14px",
          fontWeight: 600,
          marginTop: "20px",
          lineHeight: "16.8px",
          letterSpacing: "-0.002em",
          textAlign: "center",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Didn't receive the OTP?
        <span className="text-[#2563EB] ml-1" onClick={handleResendOtp}>
          Re-send
        </span>
      </Typography>
    </>
  );
};
const formatTime = (timeTemp) => {
  const minutes = Math.floor(timeTemp / 60);
  const seconds = timeTemp % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};
const ReceivedOtp = ({ timeLeft }) => {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontSize: "14px",
          marginTop: "20px",
          fontWeight: 600,
          lineHeight: "16.8px",
          letterSpacing: "-0.002em",
          textAlign: "center",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Resend OTP in {formatTime(timeLeft)}
      </Typography>
    </>
  );
};
export default function OtpArea({
  open,
  close,
  mobileNumber,
  setOtpAreaVisible,
  onLoginSuccess,
  price = 1,
  planId = "newYearOffer",
}) {
  const [isValidOtp, setIsValidOtp] = useState(true);
  const [otp, setOtp] = useState("");
  const [isResendVisible, setIsResendVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

  console.log(otp);
  const api_url = "http://dev.azure.tap.health";
  // Timer for resend visibility
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js").then(() => {});
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (!isResendVisible && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsResendVisible(true);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [timeLeft, isResendVisible]);

  const handleVerifyOTP = (otp) => {
    if (otp.length !== 4) {
      setIsValidOtp(false);
      return;
    }
    axios
      .post(api_url + "/api/auth/verify-otp", { phone: mobileNumber, otp: otp })
      .then((response) => {
        console.log(response);
        // const cookie = response.headers["Set-Cookie"];
        // const sessionId = response.headers["Sessionid"];
        // const session = response.headers.get("Sessionid");
        // console.log(sessionId);
        // store the sesssionId in the session
        // localStorage.setItem("sessionid", sessionId);
        console.log(response.headers);

        // console.log(res.headers['sessionid']);
        // localStorage.setItem("Cookie", cookie ? cookie : "");
        // localStorage.setItem("sessionid", res.headers["sessionid"]);
        // Extract and log the userId
        const userId = response.data?.user?.id;
        console.log("User ID:", userId);

        // Set OTP validation state and visibility
        setIsValidOtp(true);
        setOtpAreaVisible(false);
        onLoginSuccess(response.headers.get("sessionid"));
        navigate("/plans/newYearOffer"); // Navigate to /plans if logged in

        // Perform payment

        // Close the modal/popup
        close();
        console.log("Yes, done");

        // Log the user data
        console.log(response.data.user);

        // Check if the user already has the planId in localStorage
        const userPlans =
          JSON.parse(localStorage.getItem(`plans_${userId}`)) || [];

        if (userPlans === planId) {
          alert("You already have this plan.");
        } else {
          // Add the new planId to the user's plans
          // onPayment(price, planId, userId);
        }
      })
      .catch((error) => {
        console.log("not correct post");
        console.error(error);
        setIsValidOtp(false);
      });
  };
  const onOtpSubmit = (otp) => {
    setOtp(otp);
    handleVerifyOTP(otp);
  };
  const handleResendOtp = () => {
    setIsResendVisible(false);
    setTimeLeft(30);
    handleSignIn();
  };
  // const onPayment = async (price, planId, userId) => {
  //   // create order
  //   try {
  //     const options = {
  //       planId: planId,
  //       amount: price, // amount in paise
  //     };
  //     const response = await axios.post(
  //       "http://dev.azure.tap.health",
  //       options
  //     );
  //     const data = await response.data;
  //     console.log(data);
  //     const paymentObject = new window.Razorpay({
  //       key: "rzp_live_kcB9R3YS04DMNn",
  //       amount: price, // amount in paise
  //       order_id: data.id,
  //       ...data,
  //       handler: function (response) {
  //         // handle success
  //         console.log(response);
  //         // make a payment request to your backend
  //         const options2 = {
  //           order_id: response.razorpay_order_id,
  //           payment_id: response.razorpay_payment_id,
  //           signature: response.razorpay_signature,
  //         };
  //         axios
  //           .post("http://dev:3000/api/verifyPayment", options2)
  //           .then((res) => {
  //             if (res.data.success) {
  //               localStorage.setItem(`plans_${userId}`, JSON.stringify(planId));

  //               console.log("Payment Successful");
  //               alert("Payment Successful");
  //               // onPaymentSuccess();
  //             } else {
  //               console.log("Payment Failed");
  //               alert("Payment Failed");
  //               // handle payment failure
  //             }
  //           });
  //       },
  //     });
  //     paymentObject.open();
  //   } catch (error) {
  //     // handle error
  //     console.log("not found api end points");
  //     console.log(error);
  //   }
  // };
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  return (
    <div>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={close}
        slots={{ backdrop: StyledBackdrop }}
        className="py-[20px] px-[16px] gap-[8px]"
      >
        <ModalContent
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            boxShadow: 24,
            borderRadius: "24px 24px 0 0",
            p: 3,
            gap: "8px",
            minWidth: "100%",
            minHeight: "273px",
          }}
          style={{
            background: "#F2F5F9",
            boxShadow: `
              0px 14px 31px 0px #4B34251A,
              0px 57px 57px 0px #4B342517,
              0px 128px 77px 0px #4B34250D,
              0px 228px 91px 0px #4B342503,
              0px 356px 100px 0px #4B342500
            `,
          }}
        >
          <div className="flex  items-center gap-1">
            <img
              src={left_arrow_icon}
              className="w-[24px] h-[24px] -ml-2"
              onClick={() => {
                setOtpAreaVisible(false);
              }}
            />
            <Typography
              id="unstyled-modal-title"
              className="modal-title"
              sx={{
                fontFamily: "Urbanist",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "28px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Enter OTP
            </Typography>
          </div>
          <div className="flex gap-1">
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "16.8px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              We have sent OTP on +91 {mobileNumber}
            </Typography>
            <button
              onClick={() => {
                setOtpAreaVisible(false);
              }}
            >
              <img
                src={edit_icon}
                alt="edit_icon"
                className="w-[16px] h-[16px]"
              />
            </button>
          </div>
          <div className="mt-[20px]">
            {/* <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              shouldAutoFocus={true}
              renderSeparator={<span className="bg-red-500 ml-[12px]"></span>}
              renderInput={(props) => (
                <input
                  className={`w-[73px] h-[88px] rounded-[1234px] focus:ring-0 text-[40px] font-extrabold leading-[56px] tracking-[-0.015em] 
                  text-center  focus:outline-none font-urbanist
                  ${
                    isValidOtp
                      ? "focus:border-[#2563EB]"
                      : "border-2 border-[#DA1E2E]  "
                  }
                `}
                />
              )}
            /> */}
            <OtpInput
              length={4}
              onOtpSubmit={onOtpSubmit}
              isValidOtp={isValidOtp}
            />
          </div>
          {!isValidOtp && (
            <Typography
              sx={{
                position: "fixed",
                bottom: "120px",
                fontFamily: "Urbanist",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "18px",
                textAlign: "center",
                color: "#DA1E2E",
                padding: "8px 16px",
              }}
              aria-live="polite"
            >
              Invalid OTP
            </Typography>
          )}
          {!isResendVisible ? (
            <ReceivedOtp timeLeft={timeLeft} />
          ) : (
            <NotReceivedOtp handleResendOtp={handleResendOtp} />
          )}
          <div className="flex justify-center mt-4">
            <Button
              sx={{
                width: "328px",
                height: "56px",
                position: "relative",
                padding: "16px 20px",
                gap: "8px",
                borderRadius: "99px",
                opacity: 1,
                backgroundColor: isValidOtp ? "#2563EB" : "#DCE1E8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                onOtpSubmit(otp);
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Urbanist",
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: "21.6px",
                  textAlign: "center",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#FFFFFF",
                }}
              >
                Continue
              </Typography>
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}
const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? "#303740" : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? "#434D5B" : "#E5EAF2"};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? "#F3F6F9" : "#303740"};
  `
);
