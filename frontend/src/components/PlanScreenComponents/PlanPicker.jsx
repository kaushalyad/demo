import { Typography } from "@mui/material";

const PlanPicker = ({
  month,
  description,
  actualPrice,
  discountedPrice,
  isSelected,
  offerName,
  onClick,
  isPromotional,
  padding,
}) => {
  const typographyStyles = {
    fontFamily: "Urbanist, sans-serif",
    letterSpacing: "-0.003em",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
  };
  // console.log(isPromotional,promotionalCode);
  return (
    <div
      className={` w-[100%]  justify-between rounded-[12px]  flex flex-col text-black cursor-pointer ${
        isSelected ? "opacity-100 bg-[#EDF5FF]" : "opacity-40 bg-[#FFFFFF]"
      } transition-opacity duration-300`}
      style={{
        borderColor: isSelected ? "#2563EB" : "#DCE1E8",
        borderWidth: isSelected ? "2px" : "1px",
        overflow: "hidden",
      }}
      onClick={onClick}
    >
      {isPromotional && offerName && (
        <div className="bg-[#2563EB] text-white py-2 px-3 border-[#2563EB]  border-r-[1px] border-b-[1px]">
          <Typography
            sx={{
              ...typographyStyles,
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "16.8px",
              textAlign: "center",
            }}
          >
            {offerName}
          </Typography>
        </div>
      )}
      <div
        className={` flex justify-between pl-3 pr-5 gap-4 ${padding} sm:p-4`}
      >
        <div className="flex items-center gap-2">
          <input
            type="radio"
            className="w-5 h-5 border-2 border-[#2563EB] rounded-full text-[#2563EB] bg-[#FFFFFF]"
            checked={isSelected}
            onChange={onClick}
            name="plan"
          />
          <div className="ml-2 flex flex-col">
            <span className="text-[16px] font-bold leading-[19.2px] text-left sm:text-[20px]">
              {month}
              <span className="ml-2 sm:text-2xl">months plan</span>
            </span>

            <span className="font-urbanist text-[12px] text-left font-normal leading-[16.8px] tracking-[-0.003em] sm:text-[20px]">
              {description}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end">
          {actualPrice === discountedPrice ? (
            <Typography
              sx={{
                ...typographyStyles,
                fontSize: "20px",
                fontWeight: 800,
                lineHeight: "24px",
                textAlign: "right",
              }}
            >
              &#8377;{discountedPrice}
            </Typography>
          ) : (
            <div className="flex flex-col sm:gap-1">
              <span className="text-[11px] font-medium leading-[14.4px] text-left line-through text-[#818BA0] sm:text-[18px]">
                ₹{actualPrice}
              </span>
              <span className="text-[28px] font-extrabold leading-[33.6px] text-right sm:text-[35px]">
                {discountedPrice === 0 ? "Free" : `₹${discountedPrice}`}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanPicker;
