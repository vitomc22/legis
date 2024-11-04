"use client";

import React from "react";
import Image from "next/image";
import { Carousel, IconButton } from "@material-tailwind/react";
import car1 from "../../public/image/car1.jpeg";
import car2 from "../../public/image/car2.jpeg";
import car3 from "../../public/image/car3.jpeg";
export function CarouselDefault() {
  return (
    <div className="p-8">
      <div className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-20 max-w-4xl ">        
      <Carousel
          className="rounded-xl"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="gray"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="gray"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </IconButton>
          )} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
      <Image
        src={car1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <Image
        src={car2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <Image
        src={car3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
        </Carousel>
      </div>
    </div>
  
  );
}

export default CarouselDefault;