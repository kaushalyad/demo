import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const MealCaraousel = ({ cards }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Initialize the selected index
  }, [emblaApi, onSelect]);

  return (
    <>
      <div className=" overflow-hidden " ref={emblaRef}>
        <div className="flex touch-pan-y  gap-3 px-3">
          {cards.map((slide, index) => (
            <div
              className="flex-shrink-0 flex justify-left items-center  gap-4"
              key={index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots flex justify-center mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`embla__dot ${
              index === selectedIndex
                ? "w-[20px] h-[5px] bg-blue-500" // Active dot: elongated
                : "w-[5px] h-[5px] bg-gray-300" // Inactive dot: round
            } rounded-full mx-1`}
            onClick={() => emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default MealCaraousel;
