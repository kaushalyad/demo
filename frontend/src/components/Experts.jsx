import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import I1 from "../assets/doc_1.png";
import I2 from "../assets/doc_2.png";
import I3 from "../assets/I3.png";
import DoctorCard from "./DoctorCard";
import male_doctor from "../assets/male_doctor.png";
import woman_doctor from "../assets/woman_doctor.png";
const doctorCards = [
  <DoctorCard
    imageURL={male_doctor}
    doctorName={"Dr. Sneh P Pandey"}
    experience={"10+ years"}
    linkedInURL="https://www.linkedin.com/in/sneh-p-pandey-7ba6281b/?originalSubdomain=in"
    aboutDr={
      "Dr. Sneh P Pandey is an American Board certified Internal Medicine Specialist and graduate of University of Pittsburgh. With over 10 years of experience in interdisciplinary patient care and chronic disease management, Dr. Sneh integrates traditional care models with new AI-powered tech to improve ealth outcomes."
    }
    expertiseArea={"Internal Medicine Specialist"}
    expertiseAreaCare={"CHRONIC DISEASE CARE"}
  />,
  <DoctorCard
    imageURL={woman_doctor}
    doctorName={"Dr. Yasaswini VVN"}
    experience={"4+ Years"}
    linkedInURL="https://www.linkedin.com/in/dr-yasaswini-vajupeyajula-a9111a238/"
    aboutDr={
      "Dr. Yasaswini is a diabetes specialist with 4+ years of experience in delivering high-quality patient care. She has a deep understanding of chronic diseases and oversees our medical knowledge and care management processes, ensuring the accuracy and reliability of our program."
    }
    expertiseArea={"Diabetes Specialist"}
    expertiseAreaCare={"DIABETES CARE "}
  />,
];

const Experts = () => {
  const [emblaRef] = useEmblaCarousel();
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  // Lock screen in landscape mode when video is opened
  const openVideo = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsOpen(true);
    if (screen.orientation) {
      screen.orientation.lock("landscape").catch((err) => console.warn(err));
    }
  };

  // Unlock screen orientation on close
  const closeVideo = () => {
    setIsOpen(false);
    setCurrentVideoUrl("");
    if (screen.orientation) {
      screen.orientation.unlock();
    }
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape") {
        closeVideo();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className=" overflow-hidden " ref={emblaRef}>
      <div className="flex touch-pan-y  xs:gap-5 sm:gap-12 md:gap-16 px-6">
        {doctorCards.map((slide, index) => (
          <div
            className="flex-shrink-0 flex justify-left items-center  gap-4"
            key={index}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
