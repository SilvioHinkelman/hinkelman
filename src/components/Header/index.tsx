"use client";
import { Button } from "@/ui/button";
import ThemeSwitcher from "../SwitchTheme";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BtnsHeader, butns } from "@/constants/header";
import { useEffect, useState } from "react";
import { bungee } from "@/app/fonts";
import Link from "next/link";

const Header = () => {
  const [time, setTime] = useState(new Date());

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
    return `${hours}:${minutes}:${seconds}`;
  };
  //console.log("TCL: Header -> time", time);

  return (
    <header className="flex bg-orange-200 justify-center p-1 md:p-5">
      <div className="flex w-full max-w-[1920px] justify-between items-center">
        {/*   <h1 className={`${bungee.className} bg-white p-2 text-[#ef5a31]`}>
          {formatTime(time)}
        </h1> */}
        <Link href="/aqui">rota</Link>
        <h1 className={`${bungee.className}`}>564</h1>
        <div className="flex gap-2">
          <TooltipProvider>
            {butns.map((btn: BtnsHeader) => {
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
