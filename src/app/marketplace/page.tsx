import SideNav from "@/components/molecules/sideNav";
import Products from "@/components/molecules/productsCard";
import React from "react";

export default function Marketplace() {
  return (
    <section className="md:mt-5 mb-16 h-calc overflow-y-scroll">
      <div className="container mx-auto flex gap-2">
        <SideNav />
        <div className="flex-1 overflow-y-auto">
          <Products />
        </div>
      </div>
    </section>
  );
}
