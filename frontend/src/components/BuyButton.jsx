import { Typography } from "@mui/material";
import Right_icon from "../assets/Right_icon.svg";

const BuyButton = ({ month, price, text, onClick }) => {
  // console.log("razorpayPlanId", planId);
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="flex justify-between items-center rounded-[16px] bg-[#2563EB] w-[92%] py-[12px] hover:bg-[#1E4DB7] transition duration-200 ease-in-out"
      onClick={handleClick}
      aria-label={`Proceed to pay for ${month} months plan at ₹${price}`}
    >
      <div className="flex flex-col text-left px-4">
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "21.6px",
            color: "#FFFFFF",
          }}
        >
          <span className="sm:text-[27px]">₹{price}</span>
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontWeight: 500,
            fontSize: "14px",
            color: "#D1D5DB",
          }}
        >
          <span className="sm:text-[24px]">{month} months plan</span>
        </Typography>
      </div>
      <div className="flex items-center gap-2 px-3">
        <Typography
          sx={{
            fontFamily: "Urbanist",
            fontWeight: 700,
            fontSize: "16px",
            color: "#FFFFFF",
          }}
        >
          <span className="sm:text-[27px]">{text}</span>
        </Typography>
        <img
          src={Right_icon}
          alt="Right Arrow Icon"
          className="h-[24px] w-[24px] sm:h-[35px] sm:w-[35px]"
        />
      </div>
    </button>
  );
};

export default BuyButton;
