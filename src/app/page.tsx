
import ExploreCard from "@/components/molecules/exploreCard";
import FeaturedCard from "@/components/molecules/featuredCard";
import Hero from "@/components/molecules/hero"
import Upcoming from "@/components/molecules/upcoming";
import React from "react";
export default function Home() {
  return (
    <main className="flex flex-col items-center ">
    <Hero />
    <FeaturedCard />
    <Upcoming />
    <ExploreCard />
   
    </main>
  );
}
