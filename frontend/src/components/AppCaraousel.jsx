import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import cardImg from "../assets/cheatmeal.png"; // Replace with your actual image import
import cardImg2 from "../assets/dinner.png";
import cardImg3 from "../assets/workout.png";

const images = [
  { id: 1, src: cardImg },
  { id: 2, src: cardImg2 },
  { id: 3, src: cardImg3 },
  // Add more images here as needed
];

const AppCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0); // Go back to the first slide
      }
    };

    const interval = setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex px-4">
          {images.map(({ id, src }) => (
            <div
              key={id}
              className="embla__slide flex items-center justify-center min-w-[85%]"
            >
              <img src={src} className="w-60 rounded-lg" alt={`Slide ${id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppCarousel;
