import { useEffect } from "react";
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
  useEffect(() => {
    // Function to handle plan selection
    const handleRadioChange = () => {
      const selectedPlanRadio = document.querySelector(
        'input[name="plan"]:checked'
      );
      const selectedTenureRadio = document.querySelector(
        'input[name="tenure"]:checked'
      );

      if (selectedPlanRadio && selectedTenureRadio) {
        const selectedPlan = selectedPlanRadio.value;
        const selectedTenure = selectedTenureRadio.value;
        const amount = selectedPlanRadio.dataset[selectedTenure]; // Use bracket notation

        if (amount) {
          // Ensure dataLayer is initialized
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "plan_selection",
            plan_name: selectedPlan,
            plan_duration: selectedTenure,
            plan_original_price: amount,
            discounted: !actualPrice === discountedPrice,
          });

          console.log("Pushed to dataLayer:", {
            selectedPlan,
            selectedTenure,
            amount,
          });
        } else {
          console.warn("Amount not found for selected plan and tenure.");
        }
      }
    };

    // Attach event listeners
    const planRadios = document.querySelectorAll('input[name="plan"]');
    const tenureRadios = document.querySelectorAll('input[name="tenure"]');

    planRadios.forEach((radio) =>
      radio.addEventListener("change", handleRadioChange)
    );
    tenureRadios.forEach((radio) =>
      radio.addEventListener("change", handleRadioChange)
    );

    // Cleanup event listeners when component unmounts
    return () => {
      planRadios.forEach((radio) =>
        radio.removeEventListener("change", handleRadioChange)
      );
      tenureRadios.forEach((radio) =>
        radio.removeEventListener("change", handleRadioChange)
      );
    };
  }, []);

  return (
    <div
      className={`w-[100%] justify-between rounded-[12px] flex flex-col text-black cursor-pointer ${
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
        <div className="bg-[#2563EB] text-white py-2 px-3 border-[#2563EB] border-r-[1px] border-b-[1px]">
          <Typography
            sx={{
              fontFamily: "Urbanist, sans-serif",
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
      <div className={`flex justify-between pl-3 pr-5 gap-4 ${padding} sm:p-4`}>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            className="w-5 h-5 checked:w-4 checked:h-4 appearance-none border-[3px] border-gray-900 checked:border-[#FFFFFF] checked:bg-[#2563EB] checked:ring-[2px] checked:ring-[#2563EB] rounded-full"
            defaultChecked={isSelected}
            onChange={onClick}
            name="plan"
            value={month}
            data-month={actualPrice}
            data-tenure={discountedPrice}
          />
          <div className="ml-2 flex flex-col">
            <span className="text-[16px] font-bold leading-[19.2px] text-left sm:text-[20px]">
              {month}
              <span className="ml-1 sm:text-2xl">
                {month === 2 ? `month ` : `months plan`}
              </span>
            </span>
            <span className="text-[12px] font-normal leading-[16.8px] sm:text-[20px]">
              {description}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          {actualPrice === discountedPrice ? (
            <Typography
              sx={{ fontSize: "20px", fontWeight: 800, textAlign: "right" }}
            >
              &#8377;{discountedPrice}
            </Typography>
          ) : (
            <div className="flex flex-col sm:gap-1">
              <span className="text-[15px] font-medium leading-[14.4px] line-through text-[#818BA0] sm:text-[18px]">
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
