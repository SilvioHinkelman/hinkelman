"use client";

import { Toggle } from "@/ui/toggle";

import { useTheme } from "next-themes";
import { useState } from "react";
import { LuSun } from "react-icons/lu";
import { RiMoonLine } from "react-icons/ri";

const ThemeSwitcher: React.FC = () => {
  const { setTheme  } = useTheme();
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
    setTheme(toggle ? "dark" : "light");
  };

  return (
    <div className="flex">
      <Toggle onClick={handleClick} 
      className="
      border-[1px] border-gray-300 dark:border-white outline-none 
      transition-colors duration-1000
      hover:bg-gray-900 
      bg-gray-200 
      dark:bg-gray-800
      dark:hover:bg-gray-600
      " >
        {toggle  ? <RiMoonLine size={20}  className="hover:animate-pulse"/> : <LuSun size={20}  className="hover:animate-pulse " />}
      </Toggle>
    </div>
  );
};

export default ThemeSwitcher;
