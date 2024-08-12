import { getScopedI18n } from "@/locales/server";
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface ContactOptionsProps {
  name: string;
  icon: string;
  url: string;
}

const ContactOptionList: ContactOptionsProps[] = [
  {
    name: "Linkedin",
    icon: "/linkedin.png",
    url: "https://www.linkedin.com/in/ali-ghieth/",
  },
  {
    name: "Github",
    icon: "/facebook.png",
    url: "https://github.com/alighieth",
  },
  {
    name: "Instagram",
    icon: "/facebook.png",
    url: "https://www.instagram.com/alighieth/",
  },
  {
    name: "Leetcode",
    icon: "/facebook.png",
    url: "https://leetcode.com/alighieth/",
  },
  {
    name: "Medium",
    icon: "/facebook.png",
    url: "https://medium.com/@alighieth",
  },
  {
    name: "Upwork",
    icon: "/facebook.png",
    url:
      "https://www.upwork.com/freelancers/~0165186670554350de?mp_source=share",
  },
  {
    name: "(+20)1211399151",
    icon: "/facebook.png",
    url: "tel:(+20)1211399151",
  },
  {
    name: "alighieth2709@gmail.com",
    icon: "/facebook.png",
    url: "mailto:alighieth2709@gmail.com",
  },
];

const Footer = async () => {
  const t = await getScopedI18n("footer");
  return (
    <footer
      id="footer"
      className="relative p-4 grid grid-cols-4 w-full rounded shadow font-bold overflow-hidden"
    >
      <div
        id="footerLogo"
        className="col-span-1 text-white flex flex-col gap-5 justify-start items-center"
      >
        <h3 className="text-6xl">alighieth.</h3>
        <div className="uppercase w-1/2 flex flex-col justify-start items-start">
          <h6> I work to give customers</h6>
          <div className="self-center overflow-hidden h-7 w-32">
            <ul className="footerScroller m-0 p-0">
              <li>Exceptional</li>
              <li>Unique</li>
              <li>Endearing</li>
              <li>Long Lasting</li>
              <li>Memorable</li>
            </ul>
          </div>
          <h6>Experiences</h6>
        </div>
      </div>
      <div
        id="footeContactInfo"
        className="col-span-2 text-white flex flex-col gap-5 justify-start"
      >
        <h3 className="text-6xl">{t("contact")}</h3>
        <div className="flex flex-row justify-start items-center gap-5 text-3xl flex-wrap">
          {ContactOptionList.map((option) => (
            <a
              href={option.url}
              key={option.name}
              className="hover:text-mainBlue"
            >
              {option.name}
            </a>
          ))}
        </div>
      </div>
      <div
        id="footeContactInfo"
        className="col-span-1 flex flex-col justify-center"
      >
        <Image
          src="/greek1.webp"
          height={200}
          width={200}
          className="self-start"
          alt="greek skulpture"
        />
        <Image
          src="/greek2.webp"
          height={200}
          width={200}
          className="absolute top-0 right-0"
          alt="greek skulpture"
        />
      </div>
    </footer>
  );
};

export default Footer;
