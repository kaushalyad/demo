import { Typography } from "@mui/material";
import React from "react";
import stat1 from "../../assets/stat1.png";
import stat2 from "../../assets/stat2.png";
import stat3 from "../../assets/stat3.png";
import stat4 from "../../assets/stat4.png";

const FastResults = () => {
  return (
    <div className="flex  flex-col  gap-14  mt-16">
      <div className="flex flex-col gap-[4px]">
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "38.4px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#252E49",
          }}
        >
          Fast results
        </Typography>
        <Typography
          sx={{
            fontFamily: "Urbanist, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "19.2px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "#252E49",
          }}
        >
          in just
          <span
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "19.2px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
           {" "} 3 months{" "}
          </span>
          of program usage
        </Typography>
      </div>
      <div className="grid grid-cols-2  gap-4 p-4">
        <img src={stat1} alt="stat1" />
        <img src={stat2} alt="stat2" />
        <img src={stat3} alt="stat3" />
        <img src={stat4} alt="stat4" />
      </div>
    </div>
  );
};

export default FastResults;
