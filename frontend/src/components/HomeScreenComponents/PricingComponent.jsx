import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const PricingComponent = ({ className }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/plans");
  };

  return (
    <div
      style={{
        background: "linear-gradient(289.07deg, #F5780B 33.61%, #F9A011 100%)",
      }}
      className={`flexrounded-t-2xl rounded-t-[16px]  ${className}`}
    >
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontSize: "15px",
          fontWeight: 650,
          lineHeight: "14.4px",
          letterSpacing: "-0.003em",
          textAlign: "center",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          paddingBottom: "4px",
          paddingTop: "4px",
          color: "#FFFFFF",
        }}
       
      >
        LIMITED PERIOD OFFER
      </Typography>
      <div>
        <div className="flex justify-around items-center py-4 bg-white rounded-t-2xl">
          <div className="flex flex-col justify-center items-between sm:gap-1">
            <span className="xs:text-[12px] sm:text-[18px] font-medium leading-[14.4px] text-left line-through text-[#818BA0]">
              ₹5988
            </span>

            <span className="font-urbanist xs:text-[22px] sm:text-[30px] font-extrabold leading-[26.4px] tracking-[-0.01em] text-left  underline-offset-[0.1em] decoration-skip-ink-none text-[#252E49]">
              ₹9
            </span>

            <span className="font-urbanist text-[12px] sm:text-[18px] font-semibold leading-[16.8px] tracking-[-0.003em] text-left  underline-offset-[0.1em] decoration-skip-ink-none text-[#5D6A85]">
              for 1 year
            </span>
          </div>
          <button
            style={{
              borderWidth: "1px",
              borderColor: "#2563EB",
            }}
            className="xs:w-[231px] sm:w-[300px] rounded-full py-[12px] bg-[#2563EB]"
            onClick={handleClick}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFFFFF",
                fontFamily: "Urbanist",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "19.2px",
              }}
            >
              Join Now
            </Typography>
          </button>
        </div>
      </div>
    </div>
  );
};
