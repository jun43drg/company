import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./Customers.css";
import Image from "next/image";

const Customers = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="text">WHAT OUR CUSTOMERS SAY</div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src="/customer-1.png" alt="Image 1" />
          </div>
          <div className="embla__slide">
            <img src="/customer-2.png" alt="Image 2" />
          </div>
          <div className="embla__slide">
            <img src="/customer-3.png" alt="Image 3" />
          </div>
        </div>
      </div>
      <button
        className="embla__button embla__button--prev"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        Prev
      </button>
      <button
        className="embla__button embla__button--next"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        Next
      </button>
    </div>
  );
};

export default Customers;
