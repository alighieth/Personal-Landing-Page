"use client";
import React, { useState } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { LOCALE } from "@/types";
import { useParams, usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { push, refresh } = useRouter();
  const pathname = usePathname();
  const { lang } = useParams();

  const changeLocale = (locale: string) => {
    const regex = new RegExp(`^/${lang}`);
    const newPath = regex.test(pathname)
      ? pathname.replace(regex, `/${locale}`)
      : `/${locale}/${pathname}`;

    setIsModalOpen(false);
    push(newPath);
    refresh();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsModalOpen((prev) => !prev)}
        className="uppercase"
      >
        <GlobeAltIcon />
        {lang}
      </button>

      {isModalOpen && (
        <div className="z-50 absolute right-0 p-2 flex flex-col justify-center items-center bg-mainBlue rounded">
          {LOCALE.map(
            (localeOption) =>
              lang !== localeOption && (
                <button
                  onClick={() => changeLocale(localeOption)}
                  key={localeOption}
                >
                  <span className="uppercase">{localeOption}</span>
                </button>
              ),
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
