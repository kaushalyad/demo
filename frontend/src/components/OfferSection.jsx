import React from "react";
import { FaInfoCircle, FaCheckCircle } from "react-icons/fa";

const OfferSection = () => {
  const features = [
    "Custom Diet Plan",
    "Meal Sequencing",
    "Diabetic Specific Exercise Video Library",
    "24x7 AI Coach",
    "Medicine Reminder",
    "Scan to Share Report",
    "Exciting Rewards for Adherence",
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Features</h2>
      </div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center justify-between text-gray-600 text-lg"
          >
            <div className="flex items-center space-x-2">
              {/* <FaInfoCircle className="text-blue-500" /> */}
              <span>{feature}</span>
            </div>
            {/* <FaCheckCircle className="text-green-500" />
             */}
            {/* <img src={tick} alt="" /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfferSection;
