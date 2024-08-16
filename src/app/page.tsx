"use client";

import Image from "next/image";
import profileOne from "../../public/images/3x4.jpg";
import profileTwo from "../../public/images/cria-silvio.jpg";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { TypeAnimation } from "react-type-animation";
import { bungee } from "@/app/fonts";

export default function Home() {
  const [imageSrc, setImageSrc] = useState(profileOne);
  const { theme } = useTheme();
  const [animationKey, setAnimationKey] = useState(0);

  const handleHover = () => {
    setImageSrc((prev) => (prev === profileOne ? profileTwo : profileOne));
  };

  useEffect(() => {
    setImageSrc((prev) => (prev === profileOne ? profileTwo : profileOne));
    setAnimationKey((prevKey) => prevKey + 1);
  }, [theme]);

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
          <h1>654654</h1>
          <h1 className={`${bungee.className} `}>
            <TypeAnimation
              key={animationKey}
              aria-hidden="true"
              wrapper="h1"
              className="text sm:text-xl md:text-3xl text-blue-700 border-r-gray-700 dark:text-red-900 font-semibold "
              sequence={["Silvio da Costa Hinkelman"]}
            />
          </h1>
        </div>
      </div>
      <a href="/rota">rota</a>
      <TypeAnimation
        sequence={[
          "One a", // Types 'One'
          1000, // Waits 1s
          "Two", // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          "Two Three", // Types 'Three' without deleting 'Two'
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        //  repeat={Infinity}
        style={{ fontSize: "2em", display: "inline-block" }}
      />
    </main>
  );
}
