"use client";

import { useEffect, useState } from "react";
import { Button } from "@/ui/button";
import { useTheme } from "next-themes";
import { LuSun } from "react-icons/lu";
import { RiMoonLine } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip";

const ThemeSwitcher: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={handleClick} size="icon">
            {theme === "dark" ? <LuSun size={20} /> : <RiMoonLine size={20} />}
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
