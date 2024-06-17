import Image from "next/image";
import React from "react";
import IntroBodyText from "./IntroBodyText";

const IntroBody = async () => {
  return (
    <div className="absolute inset-0 top-[20vh] w-[100vw] h-[80vh] flex flex-col justify-start items-center overflow-hidden">
      <IntroBodyText />
      <Image
        width={400}
        height={400}
        alt="astronoat"
        className="grayscale absolute bg-contain top-0 left-0 transition-transform duration-300 transform hover:scale-110"
        src="/astro-color.webp"
      />
      <Image
        width={400}
        height={400}
        alt="tv"
        className="grayscale absolute bg-contain bottom-0 right-0 transition-transform duration-300 transform hover:scale-110"
        src="/tv-ast-color.webp"
      />
      <Image
        width={400}
        height={400}
        alt="greek king"
        className="grayscale absolute bg-contain bottom-0 left-0 transition-transform duration-300 transform hover:scale-110"
        src="/greek-king.webp"
      />
    </div>
  );
};

export default IntroBody;
