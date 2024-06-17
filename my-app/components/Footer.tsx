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
      className="relative grid grid-cols-4 gap-4 w-full p-4 rounded shadow font-bold"
    >
      <Image
        src="/greek1.webp"
        height={200}
        width={200}
        className="absolute bottom-0 right-0"
        alt="greek skulpture"
      />
      <Image
        src="/greek2.webp"
        height={200}
        width={200}
        className="absolute top-0 right-0"
        alt="greek skulpture"
      />
      <div
        id="footerLogo"
        className="col-span-1 p-4 text-white flex flex-col gap-5 justify-start items-center"
      >
        <h3 className="text-6xl">alighieth.</h3>
        <p className="uppercase">
          I work to give customers{" "}
          <p className="flex flex-col overflow-hidden">
            <span>Exceptional</span>
            <span>Unique</span>
            <span>Endearing</span>
            <span>Long Lasting</span>
            <span>Memorable</span>
          </p>
          Experiences
        </p>
      </div>
      <div
        id="footeContactInfo"
        className="col-span-3 p-4 text-white flex flex-col gap-5 justify-start"
      >
        <h3 className="text-6xl">{t("contact")}</h3>
        <div className="flex flex-row justify-start items-center gap-5 text-3xl">
          {ContactOptionList.map((option) => (
            <a href={option.url} className="hover:text-mainBlue">
              {option.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
