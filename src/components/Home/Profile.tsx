"use client";

import Image from "next/image";
import profileDark from "../../../public/images/photo-dark.jpg";
import profileWhite from "../../../public/images/photo-white.jpg";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { TypeAnimation } from "react-type-animation";
import { bungee } from "@/app/fonts";
import { animationSequence } from "@/constants/header";

export default function Profile() {
  const { theme } = useTheme();
  const [imageSrc, setImageSrc] = useState(profileDark);
  const [animationKey, setAnimationKey] = useState(0);

  const handleHover = () => {
    setImageSrc((prev) => (prev === profileDark ? profileWhite : profileDark));
    setAnimationKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    setImageSrc((prev) => (prev === profileDark ? profileWhite : profileDark));
    setAnimationKey((prevKey) => prevKey + 1);
  }, [theme]);

  return (
    <div className="z-10 w-full max-w-[1620px] items-center justify-between font-mono text-sm flex gap-2 lg:gap-7">
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className="rotateX transition-all duration-300 bg-[#819b7f] bg-gradient-to-t dark:bg-[#5d50cf] rounded-xl md:max-w-[750px]  sm:max-w-[560px] max-w-[430px] w-full p-5 "
      >
        <div className="flex gap-3 lg:gap-7 md:items-center">
          <div className="relative min-w-[5rem] size-20 md:size-32 xl:size-40 w-100%">
            <Image
              className="rounded-full border-4 border-gray-400 backdrop-contrast-200 transition-all duration-200"
              src={imageSrc}
              layout="fill"
              objectFit="cover"
              alt="my picture"
            />
          </div>
          <div>
            <h1 className="font-bold text-base md:text-2xl mb-[-7px]">
              Me chamo
            </h1>
            <TypeAnimation
              aria-hidden="true"
              wrapper="h1"
              speed={{ type: "keyStrokeDelayInMs", value: 250 }}
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
    </div>
  );
}
