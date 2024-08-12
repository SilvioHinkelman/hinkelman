"use client";

import ThemeSwitcher from "@/components/theme-switcher";
import Image from "next/image";
import profileOne from "../../public/images/3x4.jpg";
import profileTwo from "../../public/images/cria-silvio.jpg";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const [imageSrc, setImageSrc] = useState(profileOne);
  const { theme } = useTheme();

  const handleHover = () => {
    setImageSrc((prev) => (prev === profileOne ? profileTwo : profileOne));
  };

  useEffect(() => {
    setImageSrc((prev) => (prev === profileOne ? profileTwo : profileOne));
  }, [theme]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="z-10 w-full max-w-[1920px] items-center justify-between font-mono text-sm flex gap-2 lg:gap-7">
        <div className="flex items-center gap-2 lg:gap-7">
        <div className="relative  size-20  lg:size-32 xl:size-40 ">
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
          <h1 className="typing-effect w-[200px]  lg:w-[420px] lg:text-3xl bg-red-100">
            Silvio da Costa Hinkelman
          </h1>
        </div>
        <ThemeSwitcher />
      </div>
    </main>
  );
}
