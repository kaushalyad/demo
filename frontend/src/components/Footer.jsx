import { Typography } from "@mui/material";
import { useState } from "react";
import DownArrow from "../assets/downarrow.svg";
const faqs = [
  {
    question: "Can I still enjoy my favorite foods while managing diabetes?",
    answer:
      "Yes, you can! Our program helps you enjoy your favorite foods in moderation by creating meal plans that balance taste and health, ensuring your diabetes stays under control.",
  },
  {
    question: "How does the program help me stay motivated?",
    answer:
      "Our program keeps you engaged with regular progress updates, personalized recommendations, and rewards like Tap Coins for staying on track. Plus, your AI coach provides constant encouragement and guidance.",
  },
  {
    question: "What if I miss a workout or meal logging?",
    answer:
      "No worries! The program accounts for occasional lapses. You can log later, and our AI will adjust your recommendations to keep you on track.",
  },
  {
    question: "How can I monitor my progress?",
    answer:
      "You can track metrics like HbA1c, glucose levels, weight, and overall health through easy-to-read charts and reports on the app, ensuring you're always aware of your improvements.",
  },
  {
    question:
      "Is this program suitable for someone with multiple health conditions?",
    answer:
      "Yes, our program tailors recommendations based on your unique health profile, considering conditions like hypertension, obesity, or cholesterol issues, to provide safe and effective diabetes management.",
  },
  {
    question: "Do I need to follow a strict diet?",
    answer:
      "Not at all! We focus on balanced eating rather than restrictions, helping you make healthier choices while still enjoying variety in your meals.",
  },
  {
    question: "How is this different from traditional programs?",
    answer:
      "Unlike traditional programs, our AI-powered solution offers 24/7 support, personalized plans, and cost-effective management designed specifically for your needs, making it convenient and impactful.",
  },
  {
    question: "Will I get human support if I need it?",
    answer:
      "This is a 100% AI based program! You will generally not need any human support as possibly AI will take care of all situations. However, our support team is always there to help you for any product functionality and other related issues. ",
  },
];

const Footer = ({ heading = "Frequently asked questions" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="px-6 pb-10 text-[#252E49] bg-white">
      <Typography
        sx={{
          fontFamily: "Urbanist",
          fontSize: "16px",
          fontWeight: 800,
          lineHeight: "19.2px",
          textAlign: "left",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        {heading}
      </Typography>
      {faqs.map((faq, index) => (
        <div key={index} className="pt-[16px]">
          <button
            className="w-full text-left flex justify-between items-center py-2 text-lg font-semibold bg-transparent focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <Typography
              sx={{
                textAlign: "left",
                color: "#252E49",
                fontFamily: "Urbanist",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              {faq.question}
            </Typography>

            <span>
              {openIndex === index ? (
                <svg
                  className="w-6 h-6 rotate-180 transform text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.16663 8.03516L7.87864 11.7472C9.05021 12.9187 10.9497 12.9187 12.1213 11.7472L15.8333 8.03516"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.16663 8.03516L7.87864 11.7472C9.05021 12.9187 10.9497 12.9187 12.1213 11.7472L15.8333 8.03516"
                  ></path>
                </svg>
              )}
            </span>
          </button>
          {openIndex === index && (
            <Typography
              sx={{
                textAlign: "left",
                color: "black",
                fontFamily: "Urbanist",
                fontWeight: 400,
                fontSize: "16px",
              }}
            >
              {faq.answer}
            </Typography>
          )}
          <hr className="#DCE1E8 mt-2" />
        </div>
      ))}
    </div>
  );
};

export default Footer;