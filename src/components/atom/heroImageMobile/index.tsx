import Image from "next/image";
import Rectangle242 from "@/public/images/mobileHero/Rectangle242.png";
import Rectangle240 from "@/public/images/mobileHero/Rectangle240.png";
import Rectangle241 from "@/public/images/mobileHero/Rectangle241.png";

export function HeroImageMobile() {
  return (
    <div className="mt-16 mb-[100px] flex container justify-center lg:hidden ">
      <div className="relative w-fit h-[300px] ">
        <Image
          src={Rectangle240}
          alt="Rectangle240"
          className="absolute top-0 left-1/2 -z-10 h-full -translate-x-1/2 -rotate-[9.31deg]"
        />
        <Image
          src={Rectangle241}
          alt="Rectangle241"
          className="absolute top-0 left-1/2 -z-10 h-full -translate-x-1/2 rotate-[7.75deg]"
        />
        <Image src={Rectangle242} alt="Rectangle242" className="h-full" />
        <div className="blurBox bg-[#C05609] left-0 bottom-0"></div>
        <div className="blurBox bg-[#F44336] right-0 bottom-0"></div>
        <div className="blurBox bg-[#006CA2] right-0 top-0"></div>
      </div>
    </div>
  );
}
