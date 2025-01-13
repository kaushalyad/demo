import React from "react";
import DoctorCarousel from "./TestimonialCaraousel";
import { Typography } from "@mui/material";

function Testimonials() {
  return (
    <div className="bg-[#F2F5F9]">
      <div className="w-3/5 items-center mx-auto pt-12">
        <Typography
          sx={{
            color: "#252E49",
            fontFamily: "Urbanist",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "38.4px",
          }}
        >
          Stories of Transformation
        </Typography>
      </div>

      <div className="mt-6 pb-12">
        <DoctorCarousel />
      </div>
    </div>
  );
}

export default Testimonials;
