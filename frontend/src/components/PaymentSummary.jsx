import { Typography } from "@mui/material";
import React from "react";
import download_icon from "../assets/download_icon.svg";
import { FaDownload } from "react-icons/fa";
const PaymentSummary = ({ planDuration, paidAmount, upiId }) => {
  const maskUpiId = (upiId) => {
    if (!upiId || !upiId.includes("@")) return upiId; // Return as-is if invalid format
    const [name, domain] = upiId.split("@");
    const maskedName = name.length > 3 ? name.slice(0, 3) + "***" : "***";
    return `${maskedName}@${domain}`;
  };

  return (
    <div className="px-4">
      <Typography
        sx={{
          fontFamily: "Urbanist, sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: "16.8px",
          textAlign: "left",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          color: "#252E49",
        }}
      >
        Payment Summary
      </Typography>
      <div className="flex flex-col mt-2  border-[1px] border-[#DCE1E8] border-solid rounded-[16px] bg-white text-black w-[100%] px-5 py-5">
        <div className="flex justify-between">
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "28px",
              letterSpacing: "-0.012em",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#3D4966",
            }}
          >
            Plan Duration
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "28px",
              letterSpacing: "-0.012em",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#3D4966",
            }}
          >
            {planDuration} months
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "28px",
              letterSpacing: "-0.012em",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#3D4966",
            }}
          >
            Amount paid
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "28px",
              letterSpacing: "-0.012em",
              textAlign: "left",
              color: "#3D4966",
            }}
          >
            ₹ {paidAmount}
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "28px",
              letterSpacing: "-0.012em",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#3D4966",
            }}
          >
            Paid using
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "28px",
              letterSpacing: "-0.012em",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#3D4966",
            }}
          >
            {maskUpiId(upiId)}
          </Typography>
        </div>
      </div>
      <div className="flex justify-center gap-1 my-5">
        <img src={download_icon}></img>
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "16.8px",
            letterSpacing: "-0.004em",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#0048CE",
          }}
        >
          Download Invoice
        </Typography>
      </div>
    </div>
  );
};

export default PaymentSummary;
