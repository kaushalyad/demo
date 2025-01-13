import React from "react";
import NewCard from "./NewCard.jsx";
import stethoscope_icon from "../assets/stethoscope_icon.png";
import blood_test_icon from "../assets/blood_test_icon.png";
import microscope_icon from "../assets/microscope_icon.png";
import bed_rest_icon from "../assets/bed_rest_icon.png";
import heart_icon from "../assets/heart_icon.png";
import MealCaraousel from "./MealCaraousel.jsx";
const FeatureCaraousel = () => {
  const cardData = [
    {
      imgSrc: stethoscope_icon,
      heading: "Results Backed by Expertise",
      description:
        "Effective, evidence-based care that adapts to your progress, ensuring improvements month after month.",
    },
    {
      imgSrc: blood_test_icon,
      heading: "Redefining Diabetes Care",
      description:
        "Break free from outdated methods. We use AI to deliver faster, more accurate, and personalized results.",
    },
    {
      imgSrc: microscope_icon,
      heading: "Science Meets Simplicity",
      description:
        "Cutting-edge AI with practical, everyday solutions tailored to your lifestyle.",
    },
    {
      imgSrc: bed_rest_icon,
      heading: "Affordable Care, Powerful Results",
      description:
        "At just 199/month, get precision-driven diabetes management for a fraction of the cost of traditional programs.",
    },
    {
      imgSrc: heart_icon,
      heading: "Your Health, Your Way",
      description: "Personalized care designed around your preferences.",
    },
  ];
  return (
    <>
      <MealCaraousel
        cards={cardData.map((data, index) => (
          <NewCard
            key={index}
            imgSrc={data.imgSrc}
            heading={data.heading}
            description={data.description}
          />
        ))}
      />
    </>
  );
};

export default FeatureCaraousel;
