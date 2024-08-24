"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useScopedI18n } from "@/locales/client";

interface HeaderOptions {
  key: string;
  label: string | JSX.Element;
  href: string;
  icon?: JSX.Element;
}

const Header = async (params: { locale: string }) => {
  const t = useScopedI18n("home");
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOptionsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOptionsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOptionsOpen]);

  const headerOptions: HeaderOptions[] = [
    {
      key: "Home",
      label: t("Home"),
      href: "#home",
    },
    {
      key: "About",
      label: t("About"),
      href: "#about",
    },
    {
      key: "Products",
      label: t("Products"),
      href: "#products",
    },
    {
      key: "Contact",
      label: t("Contact"),
      href: "#contact",
    },
    {
      key: "Resume",
      label: t("resume"),
      href: "https://drive.google.com/file/d/1WAdKAew2-ZJTkLxYhWH5-AiEUhAUDxSj/view?usp=sharing",
    },
  ];

  return (
    <>
      <header className="w-full p-5 md:p-8 lg:p-10 max-w-maxScreen flex flex-row items-center justify-between h-[20vh] lg:h-[15vh] overflow-hidden">
        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-white">
          alighieth.
        </h3>
        <div
          className="header__options cursor-pointer"
          onClick={toggleOptions}
        ></div>
      </header>

      <div
        className={`header__options_div fixed inset-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col justify-start items-start md:items-center gap-8 md:gap-10 lg:gap-12 transition-transform duration-300 ease-in-out ${
          isOptionsOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-full p-5 md:p-8 lg:p-10 max-w-maxScreen flex flex-row items-center justify-between h-[20vh] lg:h-[15vh] overflow-hidden">
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-white">
            alighieth.
          </h3>
          <div
            className="header__options cursor-pointer -rotate-45"
            onClick={toggleOptions}
          ></div>
        </div>

        <ol className="flex flex-col w-full max-w-maxScreen gap-5 md:gap-[10vmin] p-5">
          {headerOptions.map((option) => (
            <Link
              key={option.key}
              className="hover:text-mainBlue p-2 rounded-md transition-all duration-200 ease-in-out text-4xl md:text-[8vmin] lg:text-[6vmin] text-white"
              href={option.href}
              onClick={toggleOptions}
            >
              {option.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </ol>
      </div>
    </>
  );
};

export default Header;
