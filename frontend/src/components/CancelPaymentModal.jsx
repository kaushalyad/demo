import { Button, Typography } from "@mui/material";
import React from "react";

const CancelPaymentModal = () => {
  return (
    <div className="absolute left-0 bottom-0 bg-[#FFFFFF] w-[100%] h-[186px] rounded-t-[16px] py-[24px] px-[16px]">
      <Typography
        sx={{
          fontFamily: "Urbanist, sans-serif",
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "24px",
          letterSpacing: "-0.008em",
          textAlign: "left",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          color: "#252E49",
        }}
      >
        Are you sure you want to cancel the payment?
      </Typography>
      <div className=" flex gap-16 mt-12">
        <button className="bg-[#2563EB] text-[#FFFFFF] py-[12px] px-[24px] rounded-[99px]" onClick={() => window.history.back()}>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "19.2px",
              letterSpacing: "-0.004em",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Retry payment
          </Typography>
        </button>
        <button className="text-[#0048CE]" onClick={() => window.history.back()} >
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "19.2px",
              letterSpacing: "-0.004em",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Yes, cancel
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default CancelPaymentModal;
