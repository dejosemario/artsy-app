import React from "react";
import Image from "next/image";
import ArrowCircle from "@/public/images/svg/arrowCircle.svg";
import Link from "next/link";

type ExploreProps = {
  content: string;
  link: string;
};

function Explore({ content, link }: ExploreProps) {
  return (
    <div className="text-[1.5rem] lg:text-[2.5rem] font-medium py-5 border-y border-y-grey color-grey last:border-t-[0] hover:px-8 cursor-pointer">
      <Link href={link}>
        <div className="container mx-auto flex items-center justify-between">
          <span>{content}</span>
          <Image
                  src={ArrowCircle}
                  alt="arrow"
                  className="absolute right-4 lg:hidden"
                  width={50}
                  height={50}
                />
                <Image
                  src={ArrowCircle}
                  alt="arrow"
                  className="hidden lg:flex"
                />
        </div>
      </Link>
    </div>
  );
}

export default Explore;
