"use client";

import { Button } from "@/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import { LuSun } from "react-icons/lu";
import { RiMoonLine } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ThemeSwitcher: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const [toggle, setToggle] = useState(theme === "light");

  const handleClick = () => {
    setToggle(!toggle);
    setTheme(toggle ? "dark" : "light");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={handleClick} size="icon">
            {!toggle ? <RiMoonLine size={20} /> : <LuSun size={20} />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tema</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeSwitcher;
