import EllipseImage from "@/components/atom/ellipseImage";
import React from "react";
import { cn } from "@/base/libs/utils";
import ArrowCircle from "@/public/images/svg/arrowCircle.svg";
import Image from "next/image";
import {articles} from "@/base/libs/data";
import Link from "next/link";

export default function FeaturedCard() {
  return (
    <section className="container pb-40">
      <h2 className="font-bold lg:font-medium text-[1.75rem] lg:text-[3rem] leading-[4rem] lg:pb-9 pb-4">
        Featured products
      </h2>
      {articles.map(({ title, body, img, mobileImg }, index) => (
        <div
          key={index}
          className={`
            flex flex-col items-start gap-x-8 border-t-grey border-t-[0.5px] py-8 lg:py-[60px] border-b-grey last:border-none border-b-[0.5px] ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
        >
          <div className="flex-1 w-fit relative group ">
            <Image src={img} alt="featured1" className="group hidden lg:flex" />
            <Image
              src={mobileImg}
              alt="featured1a"
              className="group lg:hidden "
            />

            {/* Hover overlay */}
            <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              {/* Content to show on hover */}
              <Link
                href={"/marketplace"}
                className="lg:flex lg:items-center text-white mb-6 ml-auto mr-10 lg:m-0"
              >
                <span className="absolute top-4 left-1/2 -translate-x-1/2 lg:hidden   text-3xl font-semibold  w-full text-center">
                  {title}
                </span>
                <span className="mr-10 hidden lg:inline text-5xl">
                  View product
                </span>
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
              </Link>
            </div>
          </div>

          <article className="flex flex-col flex-1 gap-y-6 ">
            <h4 className="text-[30px] lg:text-[2.5rem] w-full text-center font-semibold  lg:font-normal  text-grey hidden lg:flex">
              {title}
            </h4>
            <p className="text-[15px] lg:text-2xl lg:text-xl mr-9 lg:mr-0 text-[#616161] lg:text-grey my-4 lg:my-0 lg:max-w-[540px]">
              {body}
            </p>
            <div className="flex justify-between">
              <EllipseImage />
              <Image src={ArrowCircle} alt="arrow" className="hidden lg:flex" />
            </div>
          </article>
        </div>
      ))}

    </section>
  );
}
