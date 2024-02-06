import React from "react";
import HeroImageDesktop from "@/components/atom/heroImageDesktop";
import HeroImageMobile from "@/components/atom/heroImageMobile";

export default function Hero() {
  return (
    <section className="">
      <h1 className="mb-[30px] font-medium lg:font-semibold font-clash text-center lg:text-[80px] text-[2rem] px-4 leading-[150%] lg:leading-[120%] max-w-[1068px] mx-auto">
        Photography is poetry{" "}
        <span className="hidden lg:inline">
          & <br />
        </span>{" "}
        <span className="lg:hidden">and</span> beautiful untold stories
      </h1>
      <p className="lg:text-[1.25rem] font-medium px-4 text-center max-w-[926px] mx-auto leading-[156%] lg:leading-[120%]">
        Flip through more than 10,000 vintage shots, old photograghs, historic{" "}
        <br className="hidden lg:inline" /> images and captures seamlessly in
        one place. Register to get top access.
      </p>
      <HeroImageMobile />
      <HeroImageDesktop />
    </section>
  );
}
