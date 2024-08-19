"use client";

import { Button } from "@/ui/button";
import ThemeSwitcher from "../SwitchTheme";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
    <header className="flex justify-center p-1 md:p-5">
      <div className="flex w-full max-w-[1920px] justify-between items-center gap-7 flex-wrap-reverse p-2">
        <h1
          className={`bold text-2xl md:text-4xl font-black`}
        >{`${saudation}`}</h1>
        <div className="flex justify-center grow">
          <h1
            className={`${bungee.className} bg-white text-xs md:text-2xl py-2 px-3 animate-pulse rounded-3xl text-[#ef5a31] ml-auto md:m-auto`}
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
    </header>
  );
};

export default Header;
