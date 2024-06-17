import { getScopedI18n } from "@/locales/server";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderOptions {
  key: string;
  label: string | JSX.Element;
  href: string;
  icon?: JSX.Element;
}

const Header = async (params: { locale: string }) => {
  const t = await getScopedI18n("home");

  console.log("params.locale ", params.locale);
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
  ];

  return (
    <header className="w-full max-w-maxScreen flex flex-row items-center justify-between h-[20vh] box-border">
      <h3>alighieth.</h3>
      <ol className="flex flex-row gap-7">
        {headerOptions.map((option) => (
          <Link
            key={option.key}
            className="hover:bg-mainBlue p-2 rounded"
            href={option.href}
          >
            {option.label}
          </Link>
        ))}

        <LanguageSwitcher />
      </ol>
    </header>
  );
};

export default Header;
