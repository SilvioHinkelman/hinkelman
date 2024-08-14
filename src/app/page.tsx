"use client";

import ThemeSwitcher from "@/components/theme-switcher";
import Image from "next/image";
import profileOne from "../../public/images/3x4.jpg";
import profileTwo from "../../public/images/cria-silvio.jpg";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const [imageSrc, setImageSrc] = useState(profileOne);
  const { theme } = useTheme();
  const textRef = useRef(null);

  const handleHover = () => {
    setImageSrc((prev) => (prev === profileOne ? profileTwo : profileOne));
  };

  useEffect(() => {
    setImageSrc((prev) => (prev === profileOne ? profileTwo : profileOne));
  }, [theme]);

  useEffect(() => {
    if (textRef.current) {
      typeWriter(textRef.current);
    }
  }, []);

  const typeWriter = (element: any) => {
    const textoArray = element.innerHTML.split("");
    element.innerHTML = "";
    textoArray.forEach((letra: string, i: number) => {
      setTimeout(() => (element.innerHTML += letra), 75 * i);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="z-10 w-full max-w-[1920px] items-center justify-between font-mono text-sm flex gap-2 lg:gap-7">
        <div className="flex items-center gap-2 lg:gap-7">
          <div className="relative size-20 md:size-32 xl:size-40 w-100%">
            <Image
              className="rounded-full border-4 border-gray-400 backdrop-contrast-200 transition-all duration-300"
              src={imageSrc}
              layout="fill"
              objectFit="cover"
              alt="my picture"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            />
          </div>
          <div className="bg-green-50">
            <h1 className="bg-red-100">Olá me chamo</h1>
            <h1
              ref={textRef}
              className="typewriter max-w-max text sm:text-xl md:text-3xl text-gray-700 border-r-gray-700 dark:text-gray-300 font-semibold"
            >
              Silvio da Costa Hinkelman
            </h1>
          </div>
        </div>
        <ThemeSwitcher />
      </div>
    </main>
  );
}
