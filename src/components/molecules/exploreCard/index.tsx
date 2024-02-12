import Explore from "@/components/atom/explore";
import React from "react";

export default function ExploreCard() {
  return (
    <section className="mb-[100px] md:mb-[180px] w-full">
      <Explore content="Explore marketplace" link="/marketplace" />
      <Explore content="See auctions" link="/auctions" />
    </section>
  );
}
