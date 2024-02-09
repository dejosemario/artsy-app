import Link from "next/link";
import Image from "next/image";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import ArrowLeft from "@/public/images/svg/upcomingArrowLeft.svg";
import ArrowRight from "@/public/images/svg/upcomingArrowRight.svg";
import backgroundImage from "@/public/images/upcoming-image.png";

function Upcoming() {
  const styles = {
    backgroundImage: `url(${backgroundImage.src})`,
  };

  return (
    <section className="gradient mb-[100px] lg:mb-[190px] w-full">
      <div className="container p-[25px] lg:px-0 ">
        <h2 className="hidden lg:block text-[2.5rem] mb-[38px] font-medium leading-[120%] underline text-white underline-offset-[17px] decoration-[0.8px]">
          See Upcoming Auctions and Exhibitions
        </h2>
        <div
          style={styles}
          className="h-[350px] lg:h-[556px] text-white p-4 lg:px-8 lg:pb-[52px] flex flex-col lg:flex-row lg:items-end justify-end relative overflow-hidden image-bg w-full"
        >
          <article className="lg:w-3/5 flex items-center">
            <h2 className="font-bellefair text-[2.5rem] lg:text-[77px] text-[#E1E1E1] mr-5">
              01
            </h2>
            <div className="relative">
              <div className="h-4 w-4 bg-[#F5F5F5] rounded-full absolute top-2 -left-6" />
              <h3 className="text-xl lg:text-[29px] font-bellefair leading-[120%] lg:max-w-[353px]">
                MONALISA REDEFINED IN STYLE.
              </h3>
              <p className="text-xs lg:text-[13.64px] leading-[20px] font-poppin mt-4 mb-3">
                Start on : 08:00 GTS . Monday{" "}
              </p>
              <p className="text-[10px] lg:text-base font-medium tracking-[0.065em]">
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
            </div>
          </article>
          <div className="ml-auto mt-4 lg:mt-0 text-sm lg:text-2xl">
            <Link href="/auctions">
              <span className="underline mr-[20px] mb-3.5">See more</span>
            </Link>
            <Link href="/drop">
              <button className="border rounded-[10px] px-3.5 py-[14px]">
                Set a reminder
              </button>
            </Link>
          </div>
        </div>
        <div className=" items-center justify-between mt-[21px] hidden lg:flex">
          <div className="w-[295.69px] rounded-full h-2.5 bg-[#AEAEAE] overflow-hidden">
            <div className="w-1/5 h-full bg-white rounded-full"></div>
          </div>
          <div className="flex ">
            <button className="relative transform transition duration-100  hover:scale-[1.1]">
              <Image src={ArrowLeft} alt="arrow-left" />
              <RiArrowDropLeftLine
                color="white"
                size={38}
                className="absolute top-0 right-1/2 translate-x-1/4 translate-y-1/2 "
              />
            </button>
            <button className="relative transform transition duration-100  hover:scale-[1.1]">
              <Image src={ArrowRight} alt="arrow-right" />
              <RiArrowDropRightLine
                color="white"
                size={38}
                className="absolute top-0 right-1/2 translate-x-1/4 translate-y-1/2"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Upcoming;
