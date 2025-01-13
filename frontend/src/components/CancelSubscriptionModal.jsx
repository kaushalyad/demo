import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import SuccessfulCancellation from "./SuccessfulCancellation";
const CancelSubscriptionModal = () => {
  return (
    <>
      <div className="absolute left-0 bottom-0 bg-[#FFFFFF] w-[100%] h-[250px] rounded-t-[16px] py-[24px] px-[16px]">
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
          Are you sure you want to cancel?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "19.2px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#5D6A85",
            marginTop: "5px",
          }}
        >
          You will lose access to the program and receive a full refund
        </Typography>
        <div className=" flex mt-5 flex-col gap-4">
          <button className="bg-[#2563EB] text-[#FFFFFF] py-[14px] px-[24px] rounded-[99px]">
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
              No, keep me subscribed
            </Typography>
          </button>
          <button className="text-[#DA1E2E]">
            <Typography
              sx={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "19.2px",
                letterSpacing: "-0.004em",
                textAlign: "center",
                marginTop: "5px",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Yes, cancel
            </Typography>
          </button>
        </div>
      </div>
    </>
  );
};

export default CancelSubscriptionModal;
