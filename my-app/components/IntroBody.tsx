import Image from "next/image";
import React from "react";
import IntroBodyText from "./IntroBodyText";
import astro from "../public/astro-color.webp";
import tv from "../public/tv-ast-color.webp";
import greekKing from "../public/greek-king.webp";

const IntroBody = async () => {
  return (
    <div
      id="introBody"
      className="absolute inset-0 top-[20vh] w-[100vw] h-[80vh] flex flex-col justify-center md:justify-start items-center overflow-hidden"
    >
      <IntroBodyText />

      <Image
        alt="Picture of an astronoat"
        className="introBody__img grayscale absolute bg-contain top-0 left-[25%] md:left-0 transition-transform duration-300 transform hover:scale-110"
        src={astro}
      />
      <Image
        alt="Picture of a tv"
        className="introBody__img grayscale absolute bg-contain bottom-0 right-0 transition-transform duration-300 transform hover:scale-110"
        src={tv}
      />
      <Image
        alt="Picture of a greek king"
        className="introBody__img grayscale absolute bg-contain bottom-0 left-0 transition-transform duration-300 transform hover:scale-110"
        src={greekKing}
      />
    </div>
  );
};

export default IntroBody;
