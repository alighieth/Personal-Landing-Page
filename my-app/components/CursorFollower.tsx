"use client";
import React, { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.pageX, y: event.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="z-50 absolute w-5 h-5 bg-mainBlue rounded-full pointer-events-none"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CursorFollower;
