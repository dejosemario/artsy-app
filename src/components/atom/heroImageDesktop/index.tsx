"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import image1 from "@/public/images/carouselImage/Homepage-carousel-WEB.png";
import image2 from "@/public/images/carouselImage/Homepage-carousel-WEB-1.png";
import image3 from "@/public/images/carouselImage/Homepage-carousel-WEB-2.png";
import image4 from "@/public/images/carouselImage/Homepage-carousel-WEB-3.png";
import image5 from "@/public/images/carouselImage/Homepage-carousel-WEB-4.png";

const carouselImages = [image1, image2, image3, image4, image5];

export default function HeroImageDesktop() {
  const [images, setImages] = useState(carouselImages);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(true);
    const interval = setInterval(() => {
      setImages((currentItems) => shuffleImage(currentItems));
    }, 5000);
    setTimeout(() => setAnimate(false), 1500);
    return () => clearInterval(interval);
  }, [images]);

  function shuffleImage(originalArray: any[]) {
    setAnimate(false);
    let array = [...originalArray];
    let currentIndex = array.length,
      temporaryValue = null,
      randomIndex = null;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return (
    <div className="hidden lg:grid grid-cols-5 content-center mt-[50px] mb-[162px] overflow-hidden">
      {carouselImages.map((image, index) => {
        return (
          <div
            key={index}
            className={`h-[505px] w-max ${
              animate ? "item" : ""
            } `}
          >
            <Image src={image} alt="hero-image" />
          </div>
        );
      })}
    </div>
  );
}
