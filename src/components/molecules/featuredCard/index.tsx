import EllipseImage from "@/components/atom/ellipseImage";
import React from "react";
import ArrowCircle from "@/public/images/svg/arrowCircle1.svg";
import Image from "next/image";
export default function FeaturedCard() {
  return (
    <section>
      <div className="flex">
        <EllipseImage />

          <Image src={ArrowCircle} alt="arrow" className="hidden lg:flex" />
      </div>
    </section>
  );
}
