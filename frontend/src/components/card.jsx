import React from "react";
import { Box, Typography } from "@mui/material";
import gift from "../assets/coupon.png";
import man from "../assets/45yrsoldmanexercice.png";
import support from "../assets/Frame 4037.png";
import LottieAnimation from "./LottieAnimation";
import plateanimation from "../assets/animations/pltes.json";
import blood from "../assets/blood.png";

const FoodCard = () => {
  const cardsData = [
    {
      index: 1,
      title: "Enjoy Your Favorite Food, Guilt Free",
      description: [
        "Tasty, expert-designed meal plans just for you.",
        "Personalized diets to match your health goals.",
        "Balanced meals for better sugar control.",
        "Perfectly timed to keep you healthy.",
      ],
      image: gift,
      bgcolor: "#D1FAE5", // Light Green
      titlecolor: "#022C22",
    },
    {
      index: 2,
      title: "Easy and Effective Exercises",
      description: [
        "Simple, equipment-free exercises you can do at home.",
        "Guided videos to ensure perfect posture.",
        "Proven to help manage blood sugar effectively.",
        "Customized to your age, health needs, and gender",
      ],
      image: man,
      bgcolor: "#FEF2C7", // Orange
      titlecolor: "#451A03",
    },
    {
      index: 3,
      title: "24 x 7 Health Monitoring",
      description: [
        "Steps Tracking for managing your activity level",
        "Calorie counting based on your meal logs",
        "Medicine reminders so that you never miss your dose",
        "Glucose level tracking to make lifestyle adjustments in real time",
      ],
      image: support,
      bgcolor: "#D0E4FF", // Teal
      titlecolor: "#00226C",
    },
    {
      index: 4,
      title: "Smart support that adapts to your daily needs",
      description: [
        "Medicine Reminders to never miss a dose.",
        "Dynamic Diet Adjustments to balance your last meal's impact.",
        "Exercise Recommendations tailored to your needs.",
        "AI-Powered Answers, validated by experts.",
      ],
      image: blood,
      bgcolor: "#E6DAFF", // Grey
      titlecolor: "#31135E",
    },
    {
      index: 5,
      title: "Earn Rewards for Living Healthy",
      description: [
        "Log your meals",
        "Add your glucose levels",
        "Complete workouts",
        "Participate in exciting challenges",
      ],
      image: gift,
      bgcolor: "#D9FBFB", // Grey
      titlecolor: "#022A30",
    },
  ];

  const getImageSize = (index) => {
    switch (index) {
      case 1:
        return { height: "200px", width: "200px" };
      case 2:
        return { height: "200px", width: "200px" };
      case 3:
        return { height: "180px", width: "180px" };
      case 4:
        return { height: "100%", width: "100%" };
      case 5:
        return { height: "200px", width: "200px" };
      default:
        return { height: "200px", width: "200px" };
    }
  };

  return (
    <>
      {cardsData.map((card, index) => {
        const { height, width } = getImageSize(card.index); // Get dynamic size based on index

        return (
          <div
            key={index}
            className="items-center mx-6 mt-24 rounded-3xl pb-6"
            style={{ backgroundColor: card.bgcolor }} // Outer div background color
          >
            <div
              style={{
                backgroundColor: card.bgcolor, // Card background color
                borderRadius: "32px",
                position: "relative",
              }}
              className="mx-6 rounded-3xl relative"
            >
              {/* Lottie Animation is only shown when the card index is 1 */}
              {card.index === 1 ? (
                <Box
                  sx={{
                    position: "relative",
                    bottom: 40,
                    // borderRadius: "32px",
                    overflow: "hidden", // This will hide the bottom part of the Lottie animation
                    // height: "170px",
                  }}
                >
                  <LottieAnimation
                    animation={plateanimation}
                    threshold={1}
                    width={195}
                    height={195} // Set Lottie height to its full size
                    loop={true}
                    style={{
                      position: "relative",
                      top: "-25px",
                    }}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    position: "relative",
                    bottom: 40,
                    borderRadius: "32px",
                    display: "flex", // Enable Flexbox
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically (optional)
                    marginLeft: "auto", // Auto margin for centering horizontally
                    marginRight: "auto", // Auto margin for centering horizontally
                    width: "100%", // Ensure the Box has full width (optional)
                  }}
                >
                  <img
                    src={card.image}
                    alt="Card Image"
                    style={{
                      width: width, // Set dynamic width
                      height: height, // Set dynamic height
                      objectFit: "contain", // Maintain aspect ratio
                    }}
                  />
                </Box>
              )}

              <Typography
                sx={{
                  color: card.titlecolor,
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                  fontSize: "20px",
                  textAlign: "left",
                  lineHeight: "28px",
                  letterSpacing: "-0.4%",
                }}
              >
                {card.title}
              </Typography>
              <ul className="pt-3">
                {card.description.map((point, idx) => (
                  <li key={idx} className="flex flex-row gap-2">
                    <Typography
                      sx={{
                        color: card.titlecolor,
                        fontFamily: "Urbanist",
                        fontSize: "14px",
                        fontWeight: 500,
                        textAlign: "center",
                        lineHeight: "21px",
                        paddingLeft: "8px",
                      }}
                    >
                      •
                    </Typography>
                    <Typography
                      sx={{
                        color: "#022C22",
                        fontFamily: "Urbanist",
                        fontSize: "14px",
                        fontWeight: 500,
                        textAlign: "left",
                        lineHeight: "21px",
                      }}
                    >
                      {point}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FoodCard;
