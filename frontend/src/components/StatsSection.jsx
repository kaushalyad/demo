import { Box, Typography } from "@mui/material";
// import LottieAnimation from "./LottieAnimation";
import smartimg from "../assets/smartbg.png";
import stat1 from "../assets/stat1.png";
import stat2 from "../assets/stat2.png";
import stat3 from "../assets/stat3.png";
import stat4 from "../assets/stat4.png";
import priceAnimation from "../assets/animations/price.json";
import Experts from "./Experts";

function StatsSection() {
  return (
    <div>
      <div className="bg-[#F2F5F9]">
        {/* <div className="w-4/5 items-center mx-auto">
          <Typography
            sx={{
              color: "#252E49",
              fontFamily: "Urbanist",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "38.4px",
            }}
          >
            Results that Inspire Trust
          </Typography>
        </div> */}

        {/* <img src={peopleImg} alt="" className="pt-12 pb-12" /> */}

        {/* <div className="px-6 pb-12 py-12 bg-[#F2F5F9]">
          <div className="flex flex-row gap-4">
            <div className="flex-1">
              <img src={stat1} alt="" className="w-full h-auto" />
            </div>
            <div className="flex-1">
              <img src={stat2} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="flex flex-row gap-4 pt-4">
            <div className="flex-1">
              <img src={stat3} alt="" className="w-full h-auto" />
            </div>
            <div className="flex-1">
              <img src={stat4} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div> */}
        {/* <div className="pt-16 mb-6">
          <Typography
            sx={{
              textAlign: "center",
              color: "#3D4966",
              fontFamily: "Urbanist",
              fontWeight: 500,
              fontSize: "22px",
            }}
          >
            Results that Inspire Trust
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "#141B31",
              fontFamily: "Urbanist",
              fontWeight: 700,
              fontSize: "32px",
              marginTop: "-12px",
            }}
          >
            accessible to all
          </Typography>
        </div> */}
      </div>

      <div className="pt-12 mx-12">
        <Typography
          sx={{
            color: "#252E49",
            fontFamily: "Urbanist",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "38.4px",
          }}
        >
          Experts Behind the Program
        </Typography>
      </div>
      <div className="pt-12 pb-12">
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
          paddingTop:"24px",
          marginTop: "32px"
          // borderRadius: "20px", // Optional for rounded corners
          // alignItems: "center",
          // justifyContent: "center",
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
            // width: "100%",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center", // Aligns text content to the center
            // justifyContent: "center", // Centers content vertically
            "@media (min-width: 383px)": {
                    width: "95%",
                    textAlign:'center',
                    marginLeft: "auto",
                marginRight: "auto",
                  },
                  "@media (min-width: 401px)": {
                    width: "92%",
                    textAlign:'center',
                    marginLeft: "auto",
                marginRight: "auto",
                  },
                  "@media (min-width: 414px)": {
                    width: "88%",
                    textAlign:'center',
                    marginLeft: "auto",
                marginRight: "auto",
                  },
          }}
        >
          Get smart diabetes care for the price of a{" "}
          <span className="bg-yellow-300"
            style={{
              // backgroundColor: "#FFEB3B", // Yellow highlight
              padding: "0 4px", // Adds padding inside the yellow box
            }}
          >
            monthly newspaper
          </span>{" "}
          <span className="bg-yellow-300"
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
          // bottom: 10,
          // borderRadius: "16px", // Add border radius here

          // overflow: "hidden", // Ensure the border radius is applied to the content
        }}
      >
        {/* <LottieAnimation
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
        /> */}

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
