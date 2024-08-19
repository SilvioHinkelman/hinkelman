"use client";

import Image from "next/image";
import profileOne from "../../public/images/3x4.jpg";
import profileTwo from "../../public/images/cria-silvio.jpg";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { TypeAnimation } from "react-type-animation";
import { bungee } from "@/app/fonts";
import { animationSequence } from "@/constants/header";

export default function Home() {
  const [imageSrc, setImageSrc] = useState(profileOne);
  const { theme } = useTheme();
  const [animationKey, setAnimationKey] = useState(0);

  const handleHover = () => {
    setImageSrc((prev) => (prev === profileOne ? profileTwo : profileOne));
    setAnimationKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    setImageSrc((prev) => (prev === profileOne ? profileTwo : profileOne));
    setAnimationKey((prevKey) => prevKey + 1);
  }, [theme]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1 md:p-5">
      <div className="z-10 w-full max-w-[1920px] items-center justify-between font-mono text-sm flex gap-2 lg:gap-7 px-2 bg-orange-400">
        <div className="flex items-center gap-3 lg:gap-7">
          <div className="relative min-w-[5rem] size-20 md:size-32 xl:size-40 w-100%">
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
          <div>
            <h1 className="font-bold text-2xl">Me chamo</h1>
            <TypeAnimation
              aria-hidden="true"
              wrapper="h1"
              cursor={false}
              className={`${bungee.className} text sm:text-xl md:text-3xl text-blue-700 border-r-gray-700 dark:text-green-500 font-semibold`}
              sequence={["Silvio da Costa Hinkelman"]}
            />
            <TypeAnimation
              key={animationKey}
              sequence={animationSequence}
              wrapper="h1"
              cursor={true}
              className="text sm:text-xl md:text-2xl border-r-gray-700 "
            />
          </div>
        </div>
      </div>
      <a href="/rota">rota</a>
    </main>
  );
}
