import { Typography } from "@mui/material";
import download_icon from "../assets/download_icon.svg";
import master_card_icon from "../assets/icons/master_card_icon.svg";
import visa_card_icon from "../assets/icons/visa_card_icon.svg";

const CardDetails = ({ last4, network }) => {
  return (
    <div className="flex items-center gap-2">
      {network && (
        <img
          src={
            network === "MasterCard"
              ? master_card_icon
              : network === "Visa"
              ? visa_card_icon
              : ""
          }
          alt="Card Icon"
          className="h-5 w-5"
        />
      )}
      <Typography
        sx={{
          fontFamily: "Urbanist, sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "28px",
          letterSpacing: "-0.012em",
          textAlign: "left",
          color: "#3D4966",
        }}
      >
        **** **** **** {last4}
      </Typography>
    </div>
  );
};

const PaymentSummary = ({ paymentSummaryData }) => {
  const maskUpiId = (upiId) => {
    if (!upiId || !upiId.includes("@")) return upiId; // Return as-is if invalid
    const [name, domain] = upiId.split("@");
    const maskedName = name.length > 3 ? name.slice(0, 3) + "***" : "***";
    return `${maskedName}@${domain}`;
  };

  const handleInvoiceDownload = () => {
    console.log("Download Invoice"); // Replace with actual download logic
  };

  return (
    <div className="px-4">
      <Typography
        sx={{
          fontFamily: "Urbanist, sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: "16.8px",
          color: "#252E49",
        }}
      >
        Payment Summary
      </Typography>
      <div className="flex flex-col mt-2 border border-[#DCE1E8] rounded-[16px] bg-white text-black w-full px-5 py-5">
        <div className="flex justify-between">
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "28px",
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
              color: "#3D4966",
            }}
          >
            {paymentSummaryData?.duration || "12 months"}
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "28px",
              color: "#3D4966",
            }}
          >
            Amount Paid
          </Typography>
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "28px",
              color: "#3D4966",
            }}
          >
            ₹ {paymentSummaryData?.amount / 100 || 9}
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "28px",
              color: "#3D4966",
            }}
          >
            Paid Using
          </Typography>
          <div>
            {/* UPI Details */}
            {paymentSummaryData?.upi?.vpa && (
              <Typography>{maskUpiId(paymentSummaryData.upi.vpa)}</Typography>
            )}
            {/* Card Details */}
            {paymentSummaryData?.card && (
              <CardDetails
                last4={paymentSummaryData.card.last4}
                network={paymentSummaryData.card.network}
              />
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center gap-1 my-5 cursor-pointer" onClick={handleInvoiceDownload}>
        <img src={download_icon} alt="Download Icon" />
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "16.8px",
            color: "#0048CE",
          }}
        >
          Download Invoice
        </Typography>
      </div> */}
    </div>
  );
};

export default PaymentSummary;
