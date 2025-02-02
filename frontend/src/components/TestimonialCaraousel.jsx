import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ReactPlayer from "react-player";

import img1 from "../assets/P 4.png";
import img2 from "../assets/P 5.png";
import img3 from "../assets/P 6.png";
// import ReactHlsPlayer from "react-hls-player";

const slides = [
  {
    id: 1,
    image: img1,
    videoUrl:
      "https://taphealthassets.blob.core.windows.net/videos/e24b929e-f887-424e-8e99-99b9e581e834/master.m3u8",
  },
  {
    id: 2,
    image: img2,
    videoUrl:
      "https://taphealthassets.blob.core.windows.net/videos/e24b929e-f887-424e-8e99-99b9e581e834/master.m3u8",
  },
  {
    id: 3,
    image: img3,
    videoUrl:
      "https://taphealthassets.blob.core.windows.net/videos/e24b929e-f887-424e-8e99-99b9e581e834/master.m3u8",
  },
];

const TestimonialCaraousel = () => {
  const [emblaRef] = useEmblaCarousel();
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  // Open the video modal
  const openVideo = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsOpen(true);
  };

  // Close the video modal
  const closeVideo = () => {
    setIsOpen(false);
    setCurrentVideoUrl("");
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
    <div>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex px-6 md:px-8 gap-4">
          {slides.map(({ id, image, videoUrl }) => (
            <div
              key={id}
              className="embla__slide flex items-center justify-center min-w-[80%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%]"
            >
              <img
                src={image}
                className="w-full cursor-pointer object-cover"
                onClick={() => openVideo(videoUrl)}
                alt={`Slide ${id}`}
              />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
          <div className="relative w-full h-screen">
            {/* <ReactHlsPlayer
            src={currentVideoUrl}
            autoPlay={true}
            controls={true}
            width="auto"
            height="auto"
          /> */}
            <ReactPlayer
              url={currentVideoUrl}
              controls
              playing
              width="100%"
              height="100%"
            />
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCaraousel;
