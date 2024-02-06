import Image from "next/image";
import eclipse1 from "@/public/images/eclipse/Ellipse-14.png";

import eclipse2 from "@/public/images/eclipse/Ellipse-15.png";
import eclipse3 from "@/public/images/eclipse/Ellipse-16.png";
import eclipse4 from "@/public/images/eclipse/Ellipse-17.png";
import eclipse5 from "@/public/images/eclipse/Ellipse-18.png";

const images = [eclipse1, eclipse2, eclipse3, eclipse4, eclipse5];

function EllipseImage() {
  return (
    <div className="flex gap-6 lg:gap-8 items-center">
         <div className="grid grid-cols-5 first:ml-0 ">
      {images.map((image, index) => (
        <div
          key={index}
          className="border border-[#78A3AD] rounded-full lg:h-[51px] w-[42px] h-[42px] lg:w-[51px] -m-2.5  transform transition duration-200  hover:scale-[1.2] hover:z-[1] cursor-pointer"
        >
          <Image src={image} alt="Ellipse Image" />
        </div>
      ))}
    </div>
       <p className='font-medium lg:text-xl '>64 major creators</p>
    </div>
   
  );
}

export default EllipseImage;
