import image2 from "@/public/images/carousel-second/image2.png";
import image3 from "@/public/images/carousel-second/image3.png";
import image1 from "@/public/images/carousel-second/image1.png";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FadeImg() {
  // Set all images in array
  const images = [
    {
      imgSrc: image1,
      alt: "image1",
    },
    {
      imgSrc: image2,
      alt: "image2",
    },
    {
      imgSrc: image3,
      alt: "image3",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Set next image index
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="absolute -bottom-[37px] lg:-bottom-[56.75px] right-[67px] lg:right-28 w-[237.2px] lg:w-[826px] h-[240px] lg:h-[835px] max-w-[100%] bg-black/[0.04]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.imgSrc}
          alt={image.alt}
          className={`opacity-${
            index === currentImageIndex ? 100 : 0
          } absolute bottom-0 transition-all duration-1000`} // Set opacity based on index and currentImageIndex
        />
      ))}
    </section>
  );
}
