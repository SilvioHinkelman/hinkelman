"use client";

import { Button } from "@/ui/button";
import ThemeSwitcher from "../SwitchTheme";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip";
import { ButtonsHeader, ButtonsHeaderType } from "@/constants/header";
import { useEffect, useState } from "react";
import { bungee } from "@/app/fonts";

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [time, setTime] = useState(new Date());
  const hours = parseInt(time.getHours().toString().padStart(2, "0"));
  const saudation =
    hours < 12 ? "Bom dia" : hours < 18 ? "Boa tarde" : "Boa noite";

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: any) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours} : ${minutes} : ${seconds}`;
  };

  return (
    <nav className="flex justify-center h-[128px] min-[443px]:h-[60px] md:h-[88px] p-1 md:p-5 z-50">
      <div
        className="flex w-full max-w-[1920px] p-2 md:p-5 justify-between items-center gap-7 flex-wrap fixed top-0
       bg-white bg-opacity-70 dark:bg-[#0a0a0a] dark:bg-opacity-70 z-50"
      >
        <h1
          className={`bold text-2xl md:text-4xl font-black`}
        >{`${saudation}`}</h1>
        <div className="flex justify-center grow">
          <h1
            className={`${bungee.className} dark:bg-white bg-[#819b7f] text-xs md:text-2xl py-2 px-3 animate-pulse rounded-3xl text-blue-700 dark:text-green-500 ml-auto min-[443px]:m-auto`}
          >
            {isClient ? formatTime(time) : ""}
          </h1>
        </div>
        <div className="flex gap-2 ml-auto">
          <TooltipProvider>
            {ButtonsHeader.map((btn: ButtonsHeaderType) => {
              return (
                <Tooltip key={btn.key}>
                  <TooltipTrigger asChild>
                    <a
                      href={btn?.link}
                      target="_blank"
                      {...(btn?.down && { download: "SilvioHinkelman.pdf" })}
                    >
                      <Button size="icon">{btn.icon}</Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{btn?.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Header;
