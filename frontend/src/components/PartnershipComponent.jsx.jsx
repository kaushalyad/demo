import BuyButton from "../components/BuyButton";
import bgImg from "../assets/Background.png";
import star from "../assets/star.svg";
import logo from "../assets/247.svg";
import management from "../assets/management.svg";
import InformationComponent from "./InformationComponent";
import PlanPicker from "./PlanScreenComponents/PlanPicker";
import MobileInputModal from "./PlanScreenComponents/MobileInputModal";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const PartnershipComponent = () => {
  const { login, isAuthenticated } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false); // Initialize based on isAuthenticated
  const navigate = useNavigate();
  const handleLoginSuccess = (newSessionId) => {
    login(newSessionId);
  };
  const handleClose = () => setIsModalOpen(false); // Function to close modal

  const informationData = [
    {
      title: "Designed by Top Diabetologists",
      description: "To give you long-term sustainable results",
      imgSrc: star,
    },
    {
      title: "Manage your lifestyle",
      description: "Without giving up on your favorite foods and activites",
      imgSrc: logo,
    },
    {
      title: "24/7 Coach",
      description:
        "To guide you through every step of your diabetes management journey",
      imgSrc: management,
    },
  ];
  return (
    <>
      <MobileInputModal
        open={isModalOpen}
        handleClose={handleClose}
        onLoginSuccess={handleLoginSuccess}
        isPartner={true}
      />
      <div className="flex flex-col bg-white justify-between items-center xs:h-[100vh] w-[100vw] sm:h-[120vh]">
        <div>
          <img
            src={bgImg}
            alt="bgImage"
            className=" max-h-[300px] w-[100vw] "
          />
        </div>
        <div className="flex flex-col gap-3 py-[16px] -mt-20 justify-center items-center  rounded-t-[16px] bg-[#FFFFFF] w-[100%]">
          <div className="flex flex-col gap-2 w-[100%]">
            {informationData.map((item, index) => (
              <InformationComponent key={index} {...item} imgWidth="61px" />
            ))}
          </div>
          <div className="w-[91%] flex justify-center mt-4">
            <PlanPicker
              month={12}
              description={"For achieving the best health results"}
              actualPrice={7188}
              discountedPrice={0}
              isSelected={true}
              padding={" py-1"}
            />
          </div>
        </div>
        {/* Sticky Buy button */}
        <div className="sticky bottom-4 flex items-center justify-center w-[100%] ">
          <BuyButton
            price={0}
            month={2}
            text={"Claim offer"}
            onClick={() => {
              if (isAuthenticated) navigate("/beurer/success");
              if (!isAuthenticated) setIsModalOpen(true);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PartnershipComponent;
