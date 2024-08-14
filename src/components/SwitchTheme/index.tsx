"use client";

import { Button } from "@/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import { LuSun } from "react-icons/lu";
import { RiMoonLine } from "react-icons/ri";

const ThemeSwitcher: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const [toggle, setToggle] = useState(theme === "light");

  const handleClick = () => {
    setToggle(!toggle);
    setTheme(toggle ? "dark" : "light");
  };

  return (
    <div className="flex">
      <Button onClick={handleClick} size="icon">
        {!toggle ? (
          <RiMoonLine size={20} className="hover:animate-pulse" />
        ) : (
          <LuSun size={20} className="hover:animate-pulse " />
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
