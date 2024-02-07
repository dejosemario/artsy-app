import EllipseImage from "@/components/atom/ellipseImage";
import React from "react";
import ArrowCircle from "@/public/images/svg/arrowCircle1.svg";
import Image from "next/image";
import featured1 from "@/public/images/featured/Featured-product-1.png";
import featured2 from "@/public/images/featured/Featured-product-2.png";
import featured3 from "@/public/images/featured/Featured-product-3.png";
import Link from "next/link";
export default function FeaturedCard() {
  const article = [
    {
      title: "The Boolean Egyptian",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    },
    {
      title: "Are we there yet?",
      body: "aecati repudiandae vel ex iusto praesentium placeat, adipisci soluta hic aperiam omnis consequuntur facilis quo, quibusdam quidem. Sed eveniet a obcaecati quis at eligendi nulla, voluptates praesentium dolor",
    },
    {
      tile: "Oloibiri",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    },
  ];

  return (
    <section className="container flex flex-col lg:flex-row items-start gap-x-8 border-t-grey border-t-[0.5px] py-8">
      <div className="flex-1 w-fit relative group ">
        <Image src={featured3} alt="featured1" className="group" />

        {/* Hover overlay */}
        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {/* Content to show on hover */}
          <Link
            href={"/marketplace"}
            className="flex items-end lg:items-center text-white mb-6 ml-auto mr-10 md:m-0"
          >
            <span className="mr-10 hidden lg:inline text-5xl">
              View product
            </span>
            <svg
              width="78"
              height="78"
              viewBox="0 0 78 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="39"
                cy="39"
                r="38.75"
                stroke="white"
                strokeWidth="0.5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 39C19 38.617 19.1505 38.2496 19.4184 37.9788C19.6863 37.7079 20.0496 37.5558 20.4285 37.5558H54.1206L45.1298 28.4686C44.8615 28.1974 44.7108 27.8296 44.7108 27.4461C44.7108 27.0625 44.8615 26.6947 45.1298 26.4235C45.398 26.1524 45.7618 26 46.1411 26C46.5205 26 46.8843 26.1524 47.1525 26.4235L58.5803 37.9775C58.7134 38.1116 58.8189 38.271 58.8909 38.4465C58.9629 38.6219 59 38.81 59 39C59 39.19 58.9629 39.3781 58.8909 39.5535C58.8189 39.729 58.7134 39.8884 58.5803 40.0225L47.1525 51.5765C46.8843 51.8476 46.5205 52 46.1411 52C45.7618 52 45.398 51.8476 45.1298 51.5765C44.8615 51.3053 44.7108 50.9375 44.7108 50.5539C44.7108 50.1704 44.8615 49.8026 45.1298 49.5314L54.1206 40.4442H20.4285C20.0496 40.4442 19.6863 40.2921 19.4184 40.0212C19.1505 39.7504 19 39.383 19 39Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>

      <article className="flex flex-col flex-1 gap-y-8">
        <h4 className="text-[30px] md:text-[2.5rem] w-full text-center font-semibold  lg:font-normal  text-grey hidden lg:flex">
          {article[0].title}
        </h4>
        <p className="text-[15px] lg:text-2xl md:text-xl mr-9 lg:mr-0 text-[#616161] lg:text-grey my-4 lg:my-0 lg:max-w-[540px]">
          {article[0].body}
        </p>
        <div className="flex justify-between">
          <EllipseImage />
          <Image src={ArrowCircle} alt="arrow" className="hidden lg:flex" />
        </div>
      </article>
      {/* <div className="bg-[#333] h-[0.5px] w-full " /> */}
    </section>
  );
}
