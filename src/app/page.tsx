import { HeroImageDesktop } from "@/components/atom/heroImageDesktop";
import { HeroImageMobile } from "@/components/atom/heroImageMobile";
import React from "react";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <HeroImageMobile />
    <HeroImageDesktop />
    </main>
  );
}
