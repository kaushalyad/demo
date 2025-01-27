import { Box, Typography } from "@mui/material";
import LottieAnimation from "./LottieAnimation";
import smartimg from "../assets/smartbg.png";
import priceAnimation from "../assets/animations/price.json";
import Experts from "./Experts";

function StatsSection() {
  return (
    <div>

      <div className="pt-12 mx-12 flex justify-center ">
        <Typography
          sx={{
            color: "#252E49",
            fontFamily: "Urbanist",
            fontWeight: 700,
            fontSize: "32px",
            alignItems: "center",
            textAlign: "center",
            lineHeight: "38.4px",
          }}
        >
          Experts Behind the Program
        </Typography>
      </div>
      <div className="pt-12 pb-12 w-[100vw] flex justify-center">
        <Experts />
      </div>

      <div
        className=""
        style={{
          backgroundImage: `url(${smartimg})`,
          backgroundSize: "cover", // Ensures the image covers the div properly
          backgroundPosition: "center", // Centers the image
          width: "100%",
          height: "420px", // Set a specific height for visibility
          paddingTop: "24px",
          marginTop: "32px",
        }}
      >
        <Typography
          className="pt-16 "
          sx={{
            color: "#252E49",
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "38.4px",
            textAlign: "center", // Centers the text horizontally
            paddingLeft: "12px", // Retained for spacing consistency
            paddingRight: "12px", // Added for even spacing

            "@media (min-width: 383px)": {
              width: "95%",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            },
            "@media (min-width: 401px)": {
              width: "92%",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            },
            "@media (min-width: 414px)": {
              width: "88%",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            },
          }}
        >
          Get smart diabetes care for the price of a{" "}
          <span
            className="bg-yellow-300"
            style={{
              // backgroundColor: "#FFEB3B", // Yellow highlight
              padding: "0 4px", // Adds padding inside the yellow box
            }}
          >
            monthly newspaper
          </span>{" "}
          <span
            className="bg-yellow-300"
            style={{
              // backgroundColor: "#FFEB3B", // Yellow highlight
              padding: "0 4px", // Adds padding inside the yellow box
            }}
          >
            subscription.
          </span>
        </Typography>
      </div>

      <Box
        sx={{
          position: "relative",
          marginLeft: "24px",
          marginRight: "24px",
        }}
      >
        <LottieAnimation
          loop={false}
          animation={priceAnimation}
          threshold={1}
          width={"100%"}
          height={"80px"}
          containerStyle={{
            borderRadius: "16px",
            overflow: "hidden", // Ensures content stays within the rounded edges
            "@media (min-width: 381px)": {
              width: "100%", // Correct syntax for width
              height: "80px",
              borderRadius: "16px", // Correct syntax for height
            },
            "@media (min-width: 400px)": {
              width: "100%", // Correct syntax for width
              height: "80px",
              borderRadius: "16px", // Correct syntax for height
            },
          }}
        />

        <Typography
          sx={{
            color: "#252E49",
            fontFamily: "Urbanist",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "19.2px",
            textAlign: "right",
            paddingRight: "12px",
            paddingTop: "8px",
          }}
        >
          per month
        </Typography>
      </Box>
    </div>
  );
}

export default StatsSection;
