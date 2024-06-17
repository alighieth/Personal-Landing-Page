"use client";
import React from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const ScrollToTop = () => {
  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="z-30 p-5 bg-mainBlue fixed bottom-5 right-5 w-[4rem] h-[4rem] rounded-full border-mainBlue hover:opacity-50 transition-opacity delay-100"
    >
      <ArrowUpIcon />
    </button>
  );
};

export default ScrollToTop;
